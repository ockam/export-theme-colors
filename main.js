
const fs = require('fs');
const arg = require('arg');

const args = arg({
  // Types
  '--themeType':    String,  // --themeType <string> or --themeType=<string>
                             //   enum: 'tw' (Tailwind), 'ck' (Chakra)
  '--themeFile':    String,  // --themeFile <string> or --themeFile=<string>
  '--themeColors':  String,  // --themeColors <string> or --themeColors=<string>
  '--cssFile':      String,  // --cssFile <string> or --cssFile=<string>
  '--prefix':       String,  // --prefix <string> or --prefix=<string>

  // Aliases
  '-t':   '--themeType',     // -t <string>; result is stored in --themeType
  '-f':   '--themeFile',     // -f <string>; result is stored in --themeFile
  '-c':   '--themeColors',   // -c <string>; result is stored in --themeColors
  '-o':   '--cssFile',       // -c <string>; result is stored in --cssFile
  '-p':   '--prefix'         // -p <string>; result is stored in --prefix
});

const themeType = args[`--themeType`] || 'tw'
const cssFile = args[`--cssFile`] || './custom-properties.css'
const prefix = args[`--prefix`] || ''

let themeFile = '';
let themeColors = '';

switch (themeType) {
  case 'tw':
    themeFile = './tailwind.config.js'
    themeColors = 'theme.colors'
    break;

  case 'ck':
    themeFile = './theme.js'
    themeColors = 'default.colors'
    break;

  default:
    themeFile = args[`--themeFile`] || './tailwind.config.js'
    themeColors = args[`--themeColors`] || 'theme.colors'
    break;
}

try {
  import(themeFile).then(config => {
    const colors = themeColors.split('.').reduce((o,i)=>o[i], config);

    const parseColor = (colorName, value) => {
      const pfx = prefix ? `${prefix}-` : ``;
      return `--${pfx}${colorName}: ${value};`;
    }

    let cssColors = [];

    for (let color in colors) {
      if (typeof colors[color] === 'object') {
        for (let subColor in colors[color]) {
          cssColors.push(parseColor(`${color}-${subColor}`, colors[color][subColor]));
        }
      } else {
        cssColors.push(parseColor(color, colors[color]));
      }
    }

    const customProperties = `:root {\n  ${cssColors.join(`\n  `)}\n}`;

    fs.writeFile(cssFile, customProperties, (err) => {
      if (err) throw err;
      console.log('The CSS file has been saved!');
    });
  });

} catch (error) {
  console.log(error);
}

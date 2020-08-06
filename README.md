This script will export UI library theme colors to CSS custom properties.

Has been tested with TailwindCSS (tailwind.config.js) and Chakra UI (theme.js).

Use `npm run start` or `node index.js` to run.

If using npm with arguments, add `--` before arguments:

```
  npm run start -- -t "ck"
```

Arguments:

- `--themeType`: _string_ `tw` | `ck` (default: "tw")
- `--themeFile`: _string_ filename (default: "./tailwind.config.js")
- `--themeColors`: _string_ theme object path (default: "theme.colors")
- `--cssFile`: _string_ filename (default: "./custom-properties.css")
- `--prefix`: _string_ (default: "")

Aliases:

- `-t`: --themeType
- `-f`: --themeFile
- `-c`: --themeColors
- `-o`: --cssFile
- `-p`: --prefix

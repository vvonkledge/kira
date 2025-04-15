# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and Biome.js for linting and formatting.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Biome.js Configuration

This project uses [Biome.js](https://biomejs.dev/) for linting and formatting. The configuration is in `biome.json`.

The following npm scripts are available:

```bash
# Run linting
npm run lint
# or
npm run biome:lint

# Run formatting
npm run biome:format

# Check for linting and formatting issues
npm run biome:check
```

You can customize the Biome.js configuration by editing the `biome.json` file. For React-specific rules and configurations, refer to the [Biome.js documentation](https://biomejs.dev/linter/rules/).

Here's a sample of the current configuration:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "a11y": {
        "useKeyWithClickEvents": "error"
      },
      "correctness": {
        "useExhaustiveDependencies": "error"
      },
      "suspicious": {
        "noExplicitAny": "error"
      },
      "style": {
        "noNonNullAssertion": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  }
}
```

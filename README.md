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

# Kira

## Authentication with Clerk

This project uses [Clerk](https://clerk.com/) for authentication and user management.

### Setup Instructions

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new Clerk application
3. Copy your API keys from the Clerk dashboard
4. Create a `.env` file in the root of your project (you can copy from `.env.example`)
5. Add your Clerk API keys to the `.env` file:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```

### Authentication Routes

- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/dashboard` - Protected route (requires authentication)

### Protected Routes

To create a protected route, wrap your component with `SignedIn` and `SignedOut` components:

```tsx
<Route
  path="/protected-route"
  element={
    <>
      <SignedIn>
        <YourProtectedComponent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  }
/>
```

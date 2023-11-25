# File creator

Create a file tree based on template files allowing you to interpolate variables

e.g

createFiles({
templateDir: "./files",
replacer: { appName: "./App" },
targetDir: "../out/files",
});

### File structure

- files
  - main.tsx.template

### Contents

```
import { App } from '<TEMPLATE={appName}>'

return <App />
```

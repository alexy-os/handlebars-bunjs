# buildy hbs with bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## Usage

```ts
import { setConfig, initHandlebars, render } from 'bun-hbs';
import { join } from 'path';

// Configuring the configuration
setConfig({
  VIEWS_DIR: join(__dirname, 'views'),
  PARTIALS_DIR: join(__dirname, 'views/partials'),
  LAYOUTS_DIR: join(__dirname, 'views/layouts'),
  LOG_LEVEL: 'debug'
});

// Initializing the template engine
await initHandlebars();

// Rendering a template
const result = await render('home.hbs', { title: 'Home' }, 'main.hbs');
console.log(result);
```

This project was created using `bun init` in bun v1.1.27. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

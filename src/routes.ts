import { Elysia } from 'elysia';
import { render, setConfig, initHandlebars } from 'bun-hbs';
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

export function setupRoutes(app: Elysia) {
  app.get('/', () => {
    return render('home.hbs', { title: 'Home' }, 'main.hbs');
  });

  // Add other routes here
}
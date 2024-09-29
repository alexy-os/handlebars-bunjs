import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import { CONFIG } from './config';
import { setupRoutes } from './routes';

const app = new Elysia();

// Serve static files
app.use(staticPlugin({
  assets: 'public',  // Directory where your static files are located
  prefix: '/static'  // URL prefix for static files
}));

app.use(html());

setupRoutes(app);

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});
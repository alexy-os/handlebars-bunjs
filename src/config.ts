import { join } from 'path';

export const CONFIG = {
  PORT: 5001,
  VIEWS_DIR: join(__dirname, 'views'),
  PARTIALS_DIR: join(__dirname, 'views/partials'),
  LAYOUTS_DIR: join(__dirname, 'views/layouts'),
  STATIC_DIR: join(__dirname, '..', 'public'),  // Add this line
  LOG_LEVEL: 'debug' as 'debug' | 'production'
};
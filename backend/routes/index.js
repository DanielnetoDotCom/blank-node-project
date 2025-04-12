import helloRoute from './hello.js';
import pingRoute from './ping.js';

export default function registerRoutes(app) {
  app.use('/api', helloRoute);
  app.use('/api', pingRoute);
}

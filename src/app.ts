import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/Server';




(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}
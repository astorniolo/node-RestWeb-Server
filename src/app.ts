import { envs } from "./config/envs";
import { Server } from "./presentation/Server";


// llamamos al server.app desde una fn anonima autoinvocada
(async() => {
    main();
})();


function main() {
    
    console.log('main... llama al server');

    const server= new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
    });

    server.start();

}
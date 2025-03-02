import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly routes : Router;
  private readonly publicPath: string;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.routes = routes;
    this.publicPath = public_path;
  }

  
  
  async start() {
    

    //* Middlewares

    //* Parsear info del body y transf 
    this.app.use( express.json() ) //serializa a json  raw
    this.app.use( express.urlencoded({ extended: true }) ); //x-www-form-urlencoded
    

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );

    //* ROUTES
    this.app.use(this.routes);

    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });
    

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

}
import { Certificate } from 'crypto';
import fs from 'fs'
import  http2 from 'http2'

// video 193  variables de entorno 
// openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
const server = http2.createSecureServer({
    key: fs.readFileSync('./keys/server.key', 'utf-8') ,
    cert: fs.readFileSync('./keys/server.crt', 'utf-8') 
},
(req, res) => {
    console.log(req.url);

    // res.write('holamundo')
    // res.end()
    
    //tipo de informacion de la rta
    // res.writeHead(200,{'content-type': 'text/html' });
    // res.write(`<h1>Hola mundo   URL:${req.url} </h1>`);
    // res.end()

    // const data = {name:'Johm Doe', age:30, city:'New York'}
    // res.writeHead(200,{'content-type': 'application/json' });
    // res.end(JSON.stringify(data));

    if (req.url === '/'){
        const htmlfile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200,{'content-type': 'text/html' });
        res.end(htmlfile);
        return;
    } 
    
    if (req.url?.endsWith('js')) {
        res.writeHead(200,{'content-type': 'aplication/javascript' });
        return;
    } else if (req.url?.endsWith('css')) {
        res.writeHead(200,{'content-type': 'text/css' });
    }
    try {
        const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
        res.end(responseContent);
        
    } catch (error) {
        res.writeHead(404,{'content-type': 'text/html' });
        res.end();
    }
});



server.listen(8080, () => {
    console.log('Server runing on port 8080')
});
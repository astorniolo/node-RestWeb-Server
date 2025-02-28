import fs from 'fs'
import  http from 'http'

const server = http.createServer((req, res) => {
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
    
    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);
});



server.listen(8080, () => {
    console.log('Server runing on port 8080')
});
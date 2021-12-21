const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('WELCOME TO OUR HOMEPAGE')
    }
    // res.write('Welcome to our Homepage')
    // res.end()
    if(req.url === '/about'){
        res.end('Here is or short history')
    }
    res.end(`
    <h1>Oops!</h1>
        <p>We cant find the page you are looking for!!!!!!!!</P> 
        <a href="/">Back Home</a>
    `)
});


server.listen(5000);


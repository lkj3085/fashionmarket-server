var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer(function (req, res) {
    const path = req.url;
    const method = req.method;
    if(path === '/products'){
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const products = JSON.stringify([{
                name: "댄디남 셔츠",
                price: 30000
            }
        ]);
        res.end(products);
    }else if (method === 'post'){
        res.end('생성 완료');
    }
}
res.end('Bye');
});

server.listen(port, hostname);

console.log("fashtion flower server on");
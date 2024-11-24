
const http = require('http')
const url = require('url')

const port = 8005


const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname
    

    if (pathname === '/api/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify({ message: 'Hello from the backend server!' }))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
    }
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
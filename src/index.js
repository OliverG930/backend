const http = require('http')
const app = require('./app')

const server = http.createServer(app)

server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})

// comando para matar el servidor si se queda abierto
//taskkill /F /IM node.exe
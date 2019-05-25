const server = require('./api'),
    PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`${PORT} is connected`))
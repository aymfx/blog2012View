const http = require('http')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({
    path: '/blog',
    secret: 'liuyang',
})

let i = 0

http.createServer(function(req, res) {
    handler(req, res, function(err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(4002)

handler.on('error', function(err) {
    console.error('Error:', err.message)
})

handler.on('push', function(event) {
    console.log(
        'Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref
    )
    console.log('执行脚本')
    add()
    rumCommand('sh', ['./auto.sh'], function(txt) {
        // 执行 autoBuild.sh 脚本文件
        console.log(txt)
    })
})

handler.on('issues', function(event) {
    console.log(
        'Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title
    )
})

function add() {
    console.log(`这是第次${i++}push`)
}

function rumCommand(cmd, args, callback) {
    console.log(cmd, 'dadadad')
    var child = spawn(cmd, args)
    console.log(child, 'dadadad')
    var response = ''
    child.stdout.on('data', function(buffer) {
        response += buffer.toString()
    })
    child.stdout.on('end', function() {
        callback(response)
    })
}

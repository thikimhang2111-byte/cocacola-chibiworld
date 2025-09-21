const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' }})

io.on('connection', (socket)=>{
  console.log('client connected')
  socket.on('create', (room)=>{ socket.join(room); socket.emit('message', 'room created '+room) })
  socket.on('join', (room)=>{ socket.join(room); socket.to(room).emit('message', 'someone joined '+room) })
  socket.on('message', (data)=>{ io.to(data.room).emit('message', data) })
})

server.listen(3001, ()=> console.log('server running on 3001'))
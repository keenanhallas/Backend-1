require("dotenv").config()
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const usersRouter = require("./users/user-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname })
})

server.use("/api/users", usersRouter)

module.exports = server
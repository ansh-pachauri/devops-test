import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (ws) => {
    await client.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    ws.send("Welcome to the chat room && Websocket server Connected");
})
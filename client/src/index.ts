import { printWorld } from "./types";

console.log("Hello");
printWorld();

const ws = new WebSocket("ws://localhost:8000");
ws.onopen = () => console.log("Connected to websocket");
ws.onmessage = (msg) => console.log(msg);

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
ctx.fillRect(0, 0, 20, 20);

document.onkeydown = (e) => {
    if (e.key === "w") {
        ws.send("Moving up");
    } else if (e.key === "a") {
        ws.send("Moving left");
    } else if (e.key === "s") {
        ws.send("Moving down");
    } else if (e.key === "d") {
        ws.send("Moving right");
    }
};

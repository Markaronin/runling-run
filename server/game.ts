import { Drone } from "./drone.ts";
import { Player } from "./player.ts";

export class Game {
    private readonly players: Player[] = [];
    private readonly drones: Drone[] = [];
    constructor() {
        this.drones.push(
            new Drone(
                { position: { x: 50, y: 50 }, momentum: { x: 5, y: 5 } },
                5,
            ),
        );
    }

    public addPlayer(ws: WebSocket) {
        console.debug("New player joined!");
        this.players.push(new Player(ws));
    }

    private update(elapsedTime: number) {
        this.players.forEach((player) => player.updatePosition(elapsedTime));
        this.drones.forEach((drone) => drone.updatePosition(elapsedTime));
    }
}

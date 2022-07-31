import { PositionAndMomentum } from "./types.ts";

export class Player {
    public pam: PositionAndMomentum = {
        position: { x: 0, y: 0 },
        momentum: { x: 0, y: 0 },
    };
    constructor(private readonly ws: WebSocket) {
        ws.onmessage = (e) => {
            if (e.data === "Moving up") {
                this.pam.momentum.y -= 1;
            } else if (e.data === "Moving down") {
                this.pam.momentum.y += 1;
            } else if (e.data === "Moving right") {
                this.pam.momentum.x += 1;
            } else if (e.data === "Moving left") {
                this.pam.momentum.x -= 1;
            }
        };
    }

    public updatePosition(elapsedTime: number) {
        this.pam.position.x += this.pam.momentum.x * elapsedTime;
        this.pam.position.y += this.pam.momentum.y * elapsedTime;
    }
}

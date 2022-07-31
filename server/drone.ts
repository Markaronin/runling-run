import { PositionAndMomentum } from "./types.ts";

export class Drone {
    constructor(
        private pam: PositionAndMomentum,
        private readonly radius: number,
    ) {}

    public updatePosition(elapsedTime: number) {
        this.pam.position.x += this.pam.momentum.x * elapsedTime;
        this.pam.position.y += this.pam.momentum.y * elapsedTime;
    }
}

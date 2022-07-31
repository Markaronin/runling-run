import { serve } from "https://deno.land/std@0.150.0/http/mod.ts";
import { Game } from "./game.ts";

const game = new Game();

function reqHandler(req: Request) {
    if (req.headers.get("upgrade") != "websocket") {
        return new Response(null, { status: 501 });
    }
    const { socket: ws, response } = Deno.upgradeWebSocket(req);
    ws.onopen = () => {
        game.addPlayer(ws);
    };
    return response;
}
serve(reqHandler, { port: 8000 });

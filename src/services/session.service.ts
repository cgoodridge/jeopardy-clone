import { socket } from "./socket";
import type { SessionResponse } from "../pages/game_board/types/session.types";

export function createGame(
    playerName: string
): Promise<SessionResponse> {
    return new Promise((resolve, reject) => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.timeout(10000).emit(
            "session:create",
            { playerName },
            (error: Error | null, response: SessionResponse) => {
                if (error) {
                    reject(new Error("The server did not respond."));
                    return;
                }

                resolve(response);
            }
        );
    });
}

export function joinGame(
    roomCode: string,
    playerName: string
): Promise<SessionResponse> {
    return new Promise((resolve, reject) => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.timeout(10000).emit(
            "session:join",
            { roomCode, playerName },
            (error: Error | null, response: SessionResponse) => {
                if (error) {
                    reject(new Error("The server did not repond."));
                    return;
                }

                resolve(response);
            }
        );
    });
}
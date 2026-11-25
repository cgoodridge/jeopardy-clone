import { useEffect, useState } from "react";

import { socket } from "../services/socket";
import type { GameSession } from "../pages/game_board/types/session.types";

export function useGameSession() {
    const [session, setSession] = useState<GameSession | null>(null);

    useEffect(() => {
        const handleSessionUpdated = (updatedSession: GameSession) => {
            setSession(updatedSession);
        }

        socket.on("session:updated", handleSessionUpdated);

        return () => {
            socket.off("session:updated", handleSessionUpdated);
        }
    }, []);

    return {
        session,
        setSession,
    };
}
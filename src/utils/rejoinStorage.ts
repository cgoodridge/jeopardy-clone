interface RejoinCredentials {
    roomCode: string;
    playerId: string;
    rejoinToken: string;
}

export function saveRejoinCredentials(
    credentials: RejoinCredentials
): void {
    sessionStorage.setItem(`quiz_night:rejoin:${credentials.roomCode}`, JSON.stringify(credentials));
}

export function getRejoinCredentials(
    roomCode: string
): RejoinCredentials | null {
    const stored = sessionStorage.getItem(
        `quiz_night:rejoin:${roomCode}`
    );

    if (!stored) return null;

    try {
        return JSON.parse(stored) as RejoinCredentials;
    } catch {
        return null;
    }
}

export function clearRejoinCredentials(roomCode: string): void {
    sessionStorage.removeItem(`quiz_night:rejoin:${roomCode}`);
}
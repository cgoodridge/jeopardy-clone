export type GameStatus =
  | "waiting"
  | "in-progress"
  | "completed";

export interface Player {
  playerId: string;
  playerName: string;
  score: number;
  isConnected: boolean;
}

export interface GameSession {
  roomCode: string;
  hostPlayerId: string | null;
  players: Player[];
  status: GameStatus;
  currentRound: number;
}

export interface SessionResponse {
  success: boolean;
  message?: string;
  roomCode?: string;
  playerId?: string;
  rejoinToken?: string;
  session?: GameSession;
}
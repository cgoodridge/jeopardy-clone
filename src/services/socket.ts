import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SERVER_URL;

export const socket = io(SOCKET_URL, {
   autoConnect: false,
   reconnection: true,
   reconnectionAttempts: Infinity,
   reconnectionDelay: 1000,
   reconnectionDelayMax: 5000
});
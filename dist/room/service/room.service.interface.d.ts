export interface RoomService {
    initialize(): void;
    disconnect(): void;
    sendMessage(message: string): void;
    sendIsTypingMessage(): void;
    subscribeOnNewMessageArrive(func: (newMessage: string) => void): void;
    subscribeOnPing(func: () => void): void;
    subscribeOnOtherIsTyping(func: () => void): void;
    subscribeOnChannelIsOpened(func: () => void): void;
    subscribeOnDisconnect(func: () => void): void;
}

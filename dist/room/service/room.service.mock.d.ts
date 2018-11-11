import { RoomService } from "./room.service.interface";
export declare class RoomServiceMock implements RoomService {
    sendMessageHasBeenCalled: boolean;
    sendMessage_messageParam: string;
    notifyPingHasBeenCalled: boolean;
    sendIsTypingMessageHasBeenCalled: boolean;
    disconnectHasBeenCalled: boolean;
    subscribeOnChannelIsOpenedHasBeenCalled: boolean;
    subscribeOnPingHasBeenCalled: boolean;
    subscribeOnOtherIsTypingHasBeenCalled: boolean;
    subscribeOnNewMessageArriveHasBeenCalled: boolean;
    subscribeOnDisconnectHasBeenCalled: boolean;
    initializeHasBeenCalled: boolean;
    onNewMessageArriveObserver: (newMessage: string) => void;
    onPingObserver: () => void;
    onOtherIsTypingObserver: () => void;
    onChannelIsOpenedObserver: () => void;
    onDisconnectObserver: () => void;
    subscribeOnNewMessageArrive(func: (newMessage: string) => void): void;
    subscribeOnPing(func: () => void): void;
    subscribeOnChannelIsOpened(func: () => void): void;
    subscribeOnDisconnect(func: () => void): void;
    sendMessage(message: string): void;
    messageHasArrived(newMessage: string): void;
    pingHasArrived(): void;
    channelIsOpened(): void;
    notifyPing(): void;
    sendIsTypingMessage(): void;
    subscribeOnOtherIsTyping(func: () => void): void;
    otherIsTyping(): void;
    disconnect(): void;
    initialize(): void;
}
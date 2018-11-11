import { RoomService } from "./room.service.interface";

export class RoomServiceMock implements RoomService{

  sendMessageHasBeenCalled = false;
  sendMessage_messageParam = '';
  notifyPingHasBeenCalled = false;
  sendIsTypingMessageHasBeenCalled = false;
  disconnectHasBeenCalled = true;
  subscribeOnChannelIsOpenedHasBeenCalled = false;
  subscribeOnPingHasBeenCalled = false;
  subscribeOnOtherIsTypingHasBeenCalled = false;
  subscribeOnNewMessageArriveHasBeenCalled = false;
  subscribeOnDisconnectHasBeenCalled = false;
  initializeHasBeenCalled = false;

  onNewMessageArriveObserver: (newMessage: string) => void;
  onPingObserver: () => void;
  onOtherIsTypingObserver: () => void;
  onChannelIsOpenedObserver: () => void;
  onDisconnectObserver: () => void;

  subscribeOnNewMessageArrive(func: (newMessage: string) => void): void {
    this.subscribeOnNewMessageArriveHasBeenCalled = true;
    this.onNewMessageArriveObserver = func;
  }

  subscribeOnPing(func: () => void): void {
    this.subscribeOnPingHasBeenCalled = true;    
    this.onPingObserver = func;
  }

  subscribeOnChannelIsOpened(func: () => void): void {
    this.subscribeOnChannelIsOpenedHasBeenCalled = true;
    this.onChannelIsOpenedObserver = func;
  }

  subscribeOnDisconnect(func: () => void): void {
    this.subscribeOnDisconnectHasBeenCalled = true;
    this.onDisconnectObserver = func;
  }

  sendMessage(message: string): void {
    this.sendMessageHasBeenCalled = true;
    this.sendMessage_messageParam = message;
  }

  messageHasArrived(newMessage: string): void {
    this.onNewMessageArriveObserver(newMessage);
  }

  pingHasArrived(): void {
    this.onPingObserver();
  }

  channelIsOpened(): void {
    this.onChannelIsOpenedObserver();
  }

  notifyPing(): void {
    this.notifyPingHasBeenCalled = true;
  }

  sendIsTypingMessage(): void {
    this.sendIsTypingMessageHasBeenCalled = true;
  }

  subscribeOnOtherIsTyping(func: () => void): void {
    this.subscribeOnOtherIsTypingHasBeenCalled = true;
    this.onOtherIsTypingObserver = func;
  }

  otherIsTyping(): void {
    this.onOtherIsTypingObserver();
  }

  disconnect(): void {
    this.disconnectHasBeenCalled = true;
    this.onDisconnectObserver();
  }

  initialize(): void {
    this.initializeHasBeenCalled = true;
  }
}
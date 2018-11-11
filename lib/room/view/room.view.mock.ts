import { RoomView } from "./room.view.interface";

export class RoomViewMock implements RoomView{

  addMessageYouAreInHasBeenCalled = false;
  getMessageHasBeenCalled = false;
  getMessage_returnValue = '';
  cleanInputHasBeenCalled = false;
  addMessageFromYouHasBeenCalled = false;
  addMessageFromYou_messageParam = '';
  addNewMessageHasBeenCalled = false;
  addNewMessage_messageParam = '';
  showPingHasBeenCalled = false;
  showIsTypingHasBeenCalled = false;
  disableSendActionHasBeenCalled = false;
  showWarningMessagePartnerDisconnectedHasBeenCalled = false;
  showGoHomeActionHasBeenCalled = false;
  hideLeaveTheRoomActionHasBeenCalled = false;

  addMessageYouAreIn(): void {
    this.addMessageYouAreInHasBeenCalled = true;
  }

  getMessage(): string {
    this.getMessageHasBeenCalled = true;

    return this.getMessage_returnValue;
  }

  cleanInput(): void {
    this.cleanInputHasBeenCalled = true;
  }

  addMessageFromYou(message: string): void {
    this.addMessageFromYouHasBeenCalled = true;
    this.addMessageFromYou_messageParam = message;
  }

  addNewMessage(message: string): void {
    this.addNewMessageHasBeenCalled = true;
    this.addNewMessage_messageParam = message;
  }

  showPing() {
    this.showPingHasBeenCalled = true;
  }

  showIsTyping(): void {
    this.showIsTypingHasBeenCalled = true;
  }

  disableSendAction(): void {
    this.disableSendActionHasBeenCalled = true;
  }
  
  showWarningMessagePartnerDisconnected(): void {
    this.showWarningMessagePartnerDisconnectedHasBeenCalled = true;
  }

  showGoHomeAction(): void {
    this.showGoHomeActionHasBeenCalled = true;
  }

  hideLeaveTheRoomAction(): void {
    this.hideLeaveTheRoomActionHasBeenCalled = true;
  }

  onGoHome(): void {  }
  onIsTyping(): void {  }
  onSendMessage(): void {  }
  onLeaveTheRoom(): void {  }
}
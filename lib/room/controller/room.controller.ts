import { RoomService } from "../service/room.service.interface";
import { RoomRouter } from "../router/room.router.interface";
import { RoomView } from "../view/room.view.interface";

export class RoomController {
  private view: RoomView;
  private service: RoomService;
  private router: RoomRouter;
  private isDisconnected = false;

  constructor(service: RoomService, router: RoomRouter) {
    this.service = service;
    this.router = router;
  }

  init(view: RoomView) {
    this.view = view;
    this.view.addMessageYouAreIn();

    this.afterSetViewSubscribeServiceEvents();
  }

  private afterSetViewSubscribeServiceEvents() {

    this.service.subscribeOnNewMessageArrive((newMessage: string) => {
      this.newMessageArrived(newMessage);
    });

    this.service.subscribeOnPing(() => {
      this.pingArrived();
    });

    this.service.subscribeOnOtherIsTyping(() => {
      this.otherIsTyping();
    });

    this.service.subscribeOnDisconnect(() => {
      this.disconnected();
    });
  }

  sendMessage(): void {
    const messageToSend = this.view.getMessage();

    if (messageToSend){
      this.view.cleanInput();

      this.view.addMessageFromYou(messageToSend);
      this.service.sendMessage(messageToSend);  
    }

  }

  private newMessageArrived(newMessage: string): void {
    this.view.addNewMessage(newMessage);  
  }

  private pingArrived(): void {
    this.view.showPing();
  }

  private otherIsTyping(): void {
    this.view.showIsTyping();
  }

  private disconnected(): void {
    this.isDisconnected = true;
    
    this.view.showWarningMessagePartnerDisconnected();
    this.view.disableSendAction();
    this.view.hideLeaveTheRoomAction();
    this.view.showGoHomeAction();
    
    this.service.initialize();
  }

  goHome(): void {
    this.router.redirectToMain();
  }

  isTyping(): void {
    this.service.sendIsTypingMessage();  
  }

  leaveTheRoom(): void {
    try {
      this.service.disconnect();
    }finally{
      this.router.redirectToMain();
    }
  }
}


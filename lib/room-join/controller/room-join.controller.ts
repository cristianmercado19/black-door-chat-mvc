import { RoomJoinView } from "../view/room-join.view.interface";
import { RoomJoinService } from "../service/room-join.service.interface";
import { RoomJoinRouter } from "../router/room-join.router.interface";

export class RoomJoinController {
  private view: RoomJoinView;
  private service: RoomJoinService;
  private router: RoomJoinRouter;

  constructor(service: RoomJoinService, router: RoomJoinRouter){
    this.service = service;
    this.router = router;
    this.subscribeOnChannelIsOpen();
  }

  init(view: RoomJoinView): void {
    this.view = view;
  }

  private subscribeOnChannelIsOpen(): void {
    this.service.subscribeOnChannelIsOpened(() => {
      this.channelIsOpened();
    })
  }

  private channelIsOpened(): void {
    this.router.redirectToChatRoom();
  }

  async firstKeyHasBeenEntered(): Promise<void> {

    try {
      this.view.hideErrorMessages();
      this.view.hideWarningMessages();
  
      this.view.hideFirstKey();
  
      this.view.showCreatingSecondKey();
  
      const firstKey = this.view.getFirstKey();
  
      const secondKey = await this.service.createAnAnswer(firstKey);
  
      this.view.setSecondKey(secondKey);
      this.view.showInstructions();
    
    } catch (error) {
    
      this.view.showErrorMessageAnswerHasNotBeenCreated();
      this.view.showFirstKey();
    
    } finally {
    
      this.view.hideCreatingSecondKey();
    }

  }

}


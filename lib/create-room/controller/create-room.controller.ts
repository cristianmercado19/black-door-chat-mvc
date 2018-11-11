import { CreateRoomService } from "../service/create-room.service.interface";
import { CreateRoomView } from "../view/create-room.view.interface";
import { CreateRoomRouter } from "../router/create-room.router.interface";

export class CreateRoomController {
  private view: CreateRoomView;
  private service: CreateRoomService;
  private router: CreateRoomRouter;
  private firstKey: string = '';
  private secondKey: string = '';

  constructor(service: CreateRoomService, router: CreateRoomRouter) {
    this.service = service;
    this.router = router;
  }

  async init(view: CreateRoomView): Promise<void> {
    this.view = view;
    this.view.controller = this;

    try {
      this.view.showCreatingRoom();

      this.firstKey = await this.service.creatNewOffer();

      this.view.showFirstKey(this.firstKey);

    } catch (error) {
      this.view.showErrorMessageFirstKeyCanNotBeCreated();
    } finally {
      this.view.hideCreatingRoom();
    }

  }

  shareFirstKey(): void {
    this.view.shareKeyByEmail(this.firstKey);
  }

  firstKeyHasBeenShared(): void {
    this.view.hideFirstKey();
    this.view.showSecondKey();
  }

  async secondKeyIsEntered(): Promise<void> {
    this.view.hideErrorMessages();
    this.view.hideWarningMessages();

    this.secondKey = this.view.getSecondKey();

    const isSecondValid = this.validateAndShowMessage();

    if (isSecondValid) {
      this.view.showOpeningRoom();

      try {
        await this.service.setupAnswer(this.secondKey);

        this.router.redirectToChatRoom();
      } catch (error) {
        this.view.showErrorMessageInvalidSecondKeyForThisRoom()
      } finally {
        this.view.hideOpeningRoom();
      }
  
    }
  }

  validateAndShowMessage(): boolean {

    if (!this.secondKey) {
      this.view.showWarningMessageSecondKeyShouldNotBeEmpty();
      return false;
    }

    return true;
  }
}
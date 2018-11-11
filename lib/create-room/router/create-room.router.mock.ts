import { CreateRoomRouter } from '../router/create-room.router.interface';

export class CreateRoomRouterMock implements CreateRoomRouter {
  redirectToChatRoomHasBeenCalled = false;

  redirectToChatRoom(): void {
    this.redirectToChatRoomHasBeenCalled = true;
  }
}
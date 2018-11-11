import { RoomJoinRouter } from "./room-join.router.interface";

export class RoomJoinRouterMock implements RoomJoinRouter {
  redirectToChatRoomHasBeenCalled = false;

  redirectToChatRoom(): void {
    this.redirectToChatRoomHasBeenCalled = true;
  }
}
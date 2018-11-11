import { RoomRouter } from "./room.router.interface";

export class RoomRouterMock implements RoomRouter {
  redirectToMainHasBeenCalled = false;
  
  redirectToMain(): void {
    this.redirectToMainHasBeenCalled = true;
  }
}
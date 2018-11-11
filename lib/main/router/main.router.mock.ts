import { MainRouter } from "./main.router.interface";

export class MainRouterMock implements MainRouter {
  redirectToCreateNewRoomHasBeenCalled = false;
  redirectToJoinAnExistingRoomHasBeenCalled = false;

  redirectToCreateNewRoom(): void {
    this.redirectToCreateNewRoomHasBeenCalled = true;
  }
  redirectToJoinAnExistingRoom() {
    this.redirectToJoinAnExistingRoomHasBeenCalled = true;
  }
}
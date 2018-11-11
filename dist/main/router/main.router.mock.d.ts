import { MainRouter } from "./main.router.interface";
export declare class MainRouterMock implements MainRouter {
    redirectToCreateNewRoomHasBeenCalled: boolean;
    redirectToJoinAnExistingRoomHasBeenCalled: boolean;
    redirectToCreateNewRoom(): void;
    redirectToJoinAnExistingRoom(): void;
}

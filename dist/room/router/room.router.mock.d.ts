import { RoomRouter } from "./room.router.interface";
export declare class RoomRouterMock implements RoomRouter {
    redirectToMainHasBeenCalled: boolean;
    redirectToMain(): void;
}

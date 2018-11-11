import { RoomJoinRouter } from "./room-join.router.interface";
export declare class RoomJoinRouterMock implements RoomJoinRouter {
    redirectToChatRoomHasBeenCalled: boolean;
    redirectToChatRoom(): void;
}

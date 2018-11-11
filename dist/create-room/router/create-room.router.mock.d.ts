import { CreateRoomRouter } from '../router/create-room.router.interface';
export declare class CreateRoomRouterMock implements CreateRoomRouter {
    redirectToChatRoomHasBeenCalled: boolean;
    redirectToChatRoom(): void;
}

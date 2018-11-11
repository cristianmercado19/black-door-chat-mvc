import { RoomService } from "../service/room.service.interface";
import { RoomRouter } from "../router/room.router.interface";
import { RoomView } from "../view/room.view.interface";
export declare class RoomController {
    private view;
    private service;
    private router;
    private isDisconnected;
    constructor(service: RoomService, router: RoomRouter);
    init(view: RoomView): void;
    private afterSetViewSubscribeServiceEvents;
    sendMessage(): void;
    private newMessageArrived;
    private pingArrived;
    private otherIsTyping;
    private disconnected;
    goHome(): void;
    isTyping(): void;
    leaveTheRoom(): void;
}

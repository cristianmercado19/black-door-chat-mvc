import { CreateRoomService } from "../service/create-room.service.interface";
import { CreateRoomView } from "../view/create-room.view.interface";
import { CreateRoomRouter } from "../router/create-room.router.interface";
export declare class CreateRoomController {
    private view;
    private service;
    private router;
    private firstKey;
    private secondKey;
    constructor(service: CreateRoomService, router: CreateRoomRouter);
    init(view: CreateRoomView): Promise<void>;
    shareFirstKey(): void;
    firstKeyHasBeenShared(): void;
    secondKeyIsEntered(): Promise<void>;
    validateAndShowMessage(): boolean;
}

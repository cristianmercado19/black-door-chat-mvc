import { RoomJoinView } from "../view/room-join.view.interface";
import { RoomJoinService } from "../service/room-join.service.interface";
import { RoomJoinRouter } from "../router/room-join.router.interface";
export declare class RoomJoinController {
    private view;
    private service;
    private router;
    constructor(service: RoomJoinService, router: RoomJoinRouter);
    init(view: RoomJoinView): void;
    private subscribeOnChannelIsOpen;
    private channelIsOpened;
    firstKeyHasBeenEntered(): Promise<void>;
}

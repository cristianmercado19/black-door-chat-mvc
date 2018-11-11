import { RoomJoinService } from "./room-join.service.interface";
export declare class RoomJoinServiceMock implements RoomJoinService {
    subscribeOnChannelIsOpenedHasBeenCalled: boolean;
    createAnAnswerHasBeenCalled: boolean;
    createAnAnswer_remoteOfferParam: string;
    secondKeyToReturn: string;
    createAnAnswerWillThrowAnException: boolean;
    onChannelIsOpenObserver: () => void;
    createAnAnswer(remoteOffer: string): Promise<string>;
    subscribeOnChannelIsOpened(func: () => void): void;
    notifyChannelIsOpen(): void;
}

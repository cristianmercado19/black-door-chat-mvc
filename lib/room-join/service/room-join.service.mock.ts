import { RoomJoinService } from "./room-join.service.interface";
import { PromiseHelper } from "../../utils/utils";

export class RoomJoinServiceMock implements RoomJoinService {
  subscribeOnChannelIsOpenedHasBeenCalled = false;
  createAnAnswerHasBeenCalled = false;
  createAnAnswer_remoteOfferParam = '';
  secondKeyToReturn = '';
  createAnAnswerWillThrowAnException = false;

  onChannelIsOpenObserver: () => void;

  createAnAnswer(remoteOffer: string): Promise<string> {

    if (this.createAnAnswerWillThrowAnException){
      throw 'createAnAnswer-generic-error'
    }

    this.createAnAnswerHasBeenCalled = true;
    this.createAnAnswer_remoteOfferParam = remoteOffer;

    return PromiseHelper.promiseResult<string>(this.secondKeyToReturn);
  }

  subscribeOnChannelIsOpened(func: () => void): void {
    this.subscribeOnChannelIsOpenedHasBeenCalled = true;
    this.onChannelIsOpenObserver = func;
  }

  notifyChannelIsOpen(): void {
    this.onChannelIsOpenObserver();
  }
}
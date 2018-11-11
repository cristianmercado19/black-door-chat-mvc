import { PromiseHelper } from '../../utils/utils';
import { CreateRoomService } from './create-room.service.interface';

export class CreateRoomServiceMock implements CreateRoomService {
  creatNewOfferHasBeenCalled = false;
  offerToReturn = 'abc';
  setupAnswerHasBeenCalled = false;
  setupAnswer_answerParam = '';
  creatNewOfferWillThrowAnException = false;
  setupAnswerWillThrowAnException = false;
  
  creatNewOffer(): Promise<string> {
    this.creatNewOfferHasBeenCalled = true;

    if (this.creatNewOfferWillThrowAnException) {
      throw "creatNewOffer-generic-error";
    }

    return PromiseHelper.promiseResult<string>(this.offerToReturn);
  }
  
  setupAnswer(answer: string): Promise<void> {
    this.setupAnswerHasBeenCalled = true;

    if (this.setupAnswerWillThrowAnException){
      throw "setupAnswer-generic-error";
    }

    this.setupAnswer_answerParam = answer;
    return PromiseHelper.doNothing();
  }
}
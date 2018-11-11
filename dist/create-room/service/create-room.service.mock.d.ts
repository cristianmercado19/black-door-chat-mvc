import { CreateRoomService } from './create-room.service.interface';
export declare class CreateRoomServiceMock implements CreateRoomService {
    creatNewOfferHasBeenCalled: boolean;
    offerToReturn: string;
    setupAnswerHasBeenCalled: boolean;
    setupAnswer_answerParam: string;
    creatNewOfferWillThrowAnException: boolean;
    setupAnswerWillThrowAnException: boolean;
    creatNewOffer(): Promise<string>;
    setupAnswer(answer: string): Promise<void>;
}

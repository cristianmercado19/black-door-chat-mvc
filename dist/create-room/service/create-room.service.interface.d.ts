export interface CreateRoomService {
    setupAnswer(answer: string): Promise<void>;
    creatNewOffer(): Promise<string>;
}

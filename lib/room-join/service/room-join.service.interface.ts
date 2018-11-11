export interface RoomJoinService {
  createAnAnswer(remoteOffer: string): Promise<string>;
  subscribeOnChannelIsOpened(func: () => void): void;
}
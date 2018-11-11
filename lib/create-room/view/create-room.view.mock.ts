import { CreateRoomController } from '../controller/create-room.controller';
import { CreateRoomView } from './create-room.view.interface';

export class CreateRoomViewMock implements CreateRoomView {
  controller: CreateRoomController;
  showCreatingRoomHasBeenCalled = false;
  showFirstKeyHasBeenCalled = false;
  showFirstKey_firstKeyParam = '';
  hideCreatingRoomHasBeenCalled = false;
  shareKeyByEmailHasBeenCalled = false;
  hideFirstKeyHasBeenCalled = false;
  showSecondKeyHasBeenCalled = false;
  secondKeyToReturn: string;
  showOpeningRoomHasBeenCalled = false;
  getSecondKeyHasBeenCalled= false;
  showErrorMessageFirstKeyCanNotBeCreatedHasBeenCalled = false;
  showWarningMessageSecondKeyShouldNotBeEmptyHasBeenCalled = false;
  showErrorMessageInvalidSecondKeyForThisRoomHasBeenCalled = false;
  hideOpeningRoomHasBeenCalled = false;
  hideWarningMessagesHasBeenCalled = false;
  hideErrorMessagesHasBeenCalled = false;

  showCreatingRoom(): void {
    this.showCreatingRoomHasBeenCalled = true;
  }

  hideCreatingRoom(): void {
    this.hideCreatingRoomHasBeenCalled = true;
  }

  showFirstKey(firstKey: string): void {
    this.showFirstKey_firstKeyParam = firstKey;
    this.showFirstKeyHasBeenCalled = true;
  }

  shareKeyByEmail(firstKey: string) {
    this.shareKeyByEmailHasBeenCalled = true;
  }

  showSecondKey(): void {
    this.showSecondKeyHasBeenCalled = true;
  }

  hideFirstKey(): void {
    this.hideFirstKeyHasBeenCalled = true;
  }

  getSecondKey(): string {
    this.getSecondKeyHasBeenCalled = true;
    return this.secondKeyToReturn;
  }

  showOpeningRoom(): void {
    this.showOpeningRoomHasBeenCalled = true;
  }

  showErrorMessageFirstKeyCanNotBeCreated(): void {
    this.showErrorMessageFirstKeyCanNotBeCreatedHasBeenCalled  = true;
  }

  showWarningMessageSecondKeyShouldNotBeEmpty(): void {
    this.showWarningMessageSecondKeyShouldNotBeEmptyHasBeenCalled = true;
  }

  showErrorMessageInvalidSecondKeyForThisRoom(): void {
    this.showErrorMessageInvalidSecondKeyForThisRoomHasBeenCalled = true;
  }

  hideOpeningRoom(): void {
    this.hideOpeningRoomHasBeenCalled = true;
  }

  hideWarningMessages(): void {
    this.hideWarningMessagesHasBeenCalled = true;
  }
  hideErrorMessages(): void {
    this.hideErrorMessagesHasBeenCalled = true;
  }

  onSecondKeyIsEntered(): void { }
  onFirstKeyHasBeenShared(): void { }
  onSharePrimaryKey(): void { }
}
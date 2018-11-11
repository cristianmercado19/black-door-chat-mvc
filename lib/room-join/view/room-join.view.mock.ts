import { RoomJoinView } from "./room-join.view.interface";

export class RoomJoinViewMock implements RoomJoinView {
  
  hideErrorMessagesHasBeenCalled = false;
  hideWarningMessagesHasBeenCalled = false;
  hideFirstKeyHasBeenCalled = false;
  firstKeyToReturn = '';
  showCreatingSecondKeyHasBeenCalled = false;
  getFirstKeyHasBeenCalled = false;
  setSecondKeyHasBeenCalled = false;
  setSecondKey_keyParam = '';
  hideCreatingSecondKeyHasBeenCalled = false;
  showInstructionsHasBeenCalled = false;
  showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled = false;
  showFirstKeyHasBeenCalled = false;

  hideErrorMessages(): void {
    this.hideErrorMessagesHasBeenCalled = true;
  }

  hideWarningMessages(): void {
    this.hideWarningMessagesHasBeenCalled = true;
  }

  hideFirstKey(): void {
    this.hideFirstKeyHasBeenCalled = true;
  }

  showCreatingSecondKey(): void {
    this.showCreatingSecondKeyHasBeenCalled = true;
  }

  getFirstKey(): string {
    this.getFirstKeyHasBeenCalled = true;

    return this.firstKeyToReturn;
  }

  setSecondKey(key: string): void {
    this.setSecondKeyHasBeenCalled = true;
    this.setSecondKey_keyParam = key;
  }

  hideCreatingSecondKey(): void {
    this.hideCreatingSecondKeyHasBeenCalled = true;
  }

  showInstructions(): void {
    this.showInstructionsHasBeenCalled = true;
  }

  showFirstKey(): void {
    this.showFirstKeyHasBeenCalled = true;
  }

  showErrorMessageAnswerHasNotBeenCreated(): void {
    this.showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled = true;
  }

  onFirstKeyHasBeenEntered(): void { }
}
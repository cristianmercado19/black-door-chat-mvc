import { RoomJoinView } from "./room-join.view.interface";
export declare class RoomJoinViewMock implements RoomJoinView {
    hideErrorMessagesHasBeenCalled: boolean;
    hideWarningMessagesHasBeenCalled: boolean;
    hideFirstKeyHasBeenCalled: boolean;
    firstKeyToReturn: string;
    showCreatingSecondKeyHasBeenCalled: boolean;
    getFirstKeyHasBeenCalled: boolean;
    setSecondKeyHasBeenCalled: boolean;
    setSecondKey_keyParam: string;
    hideCreatingSecondKeyHasBeenCalled: boolean;
    showInstructionsHasBeenCalled: boolean;
    showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled: boolean;
    showFirstKeyHasBeenCalled: boolean;
    hideErrorMessages(): void;
    hideWarningMessages(): void;
    hideFirstKey(): void;
    showCreatingSecondKey(): void;
    getFirstKey(): string;
    setSecondKey(key: string): void;
    hideCreatingSecondKey(): void;
    showInstructions(): void;
    showFirstKey(): void;
    showErrorMessageAnswerHasNotBeenCreated(): void;
    onFirstKeyHasBeenEntered(): void;
}

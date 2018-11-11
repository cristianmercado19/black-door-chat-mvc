export interface RoomJoinView {
    showFirstKey(): void;
    showErrorMessageAnswerHasNotBeenCreated(): void;
    getFirstKey(): string;
    hideErrorMessages(): void;
    hideWarningMessages(): void;
    hideFirstKey(): void;
    showCreatingSecondKey(): void;
    hideCreatingSecondKey(): void;
    showInstructions(): void;
    setSecondKey(key: string): void;
    onFirstKeyHasBeenEntered(): void;
}

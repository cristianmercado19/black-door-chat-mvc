import { CreateRoomController } from "../controller/create-room.controller";
export interface CreateRoomView {
    hideWarningMessages(): void;
    hideErrorMessages(): void;
    hideOpeningRoom(): void;
    showErrorMessageInvalidSecondKeyForThisRoom(): void;
    showWarningMessageSecondKeyShouldNotBeEmpty(): void;
    showErrorMessageFirstKeyCanNotBeCreated(): void;
    getSecondKey(): string;
    showOpeningRoom(): void;
    showSecondKey(): void;
    hideFirstKey(): void;
    shareKeyByEmail(firstKey: string): void;
    showCreatingRoom(): void;
    hideCreatingRoom(): void;
    showFirstKey(firstKey: string): void;
    controller: CreateRoomController;
    onSharePrimaryKey(): void;
    onFirstKeyHasBeenShared(): void;
    onSecondKeyIsEntered(): void;
}

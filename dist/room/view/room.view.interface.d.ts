export interface RoomView {
    showGoHomeAction(): void;
    hideLeaveTheRoomAction(): void;
    showPing(): void;
    addMessageYouAreIn(): void;
    getMessage(): string;
    cleanInput(): void;
    addMessageFromYou(message: string): void;
    addNewMessage(message: string): void;
    showIsTyping(): void;
    disableSendAction(): void;
    showWarningMessagePartnerDisconnected(): void;
    onGoHome(): void;
    onSendMessage(): void;
    onIsTyping(): void;
    onLeaveTheRoom(): void;
}

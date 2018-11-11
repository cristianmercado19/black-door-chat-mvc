"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomViewMock = /** @class */ (function () {
    function RoomViewMock() {
        this.addMessageYouAreInHasBeenCalled = false;
        this.getMessageHasBeenCalled = false;
        this.getMessage_returnValue = '';
        this.cleanInputHasBeenCalled = false;
        this.addMessageFromYouHasBeenCalled = false;
        this.addMessageFromYou_messageParam = '';
        this.addNewMessageHasBeenCalled = false;
        this.addNewMessage_messageParam = '';
        this.showPingHasBeenCalled = false;
        this.showIsTypingHasBeenCalled = false;
        this.disableSendActionHasBeenCalled = false;
        this.showWarningMessagePartnerDisconnectedHasBeenCalled = false;
        this.showGoHomeActionHasBeenCalled = false;
        this.hideLeaveTheRoomActionHasBeenCalled = false;
    }
    RoomViewMock.prototype.addMessageYouAreIn = function () {
        this.addMessageYouAreInHasBeenCalled = true;
    };
    RoomViewMock.prototype.getMessage = function () {
        this.getMessageHasBeenCalled = true;
        return this.getMessage_returnValue;
    };
    RoomViewMock.prototype.cleanInput = function () {
        this.cleanInputHasBeenCalled = true;
    };
    RoomViewMock.prototype.addMessageFromYou = function (message) {
        this.addMessageFromYouHasBeenCalled = true;
        this.addMessageFromYou_messageParam = message;
    };
    RoomViewMock.prototype.addNewMessage = function (message) {
        this.addNewMessageHasBeenCalled = true;
        this.addNewMessage_messageParam = message;
    };
    RoomViewMock.prototype.showPing = function () {
        this.showPingHasBeenCalled = true;
    };
    RoomViewMock.prototype.showIsTyping = function () {
        this.showIsTypingHasBeenCalled = true;
    };
    RoomViewMock.prototype.disableSendAction = function () {
        this.disableSendActionHasBeenCalled = true;
    };
    RoomViewMock.prototype.showWarningMessagePartnerDisconnected = function () {
        this.showWarningMessagePartnerDisconnectedHasBeenCalled = true;
    };
    RoomViewMock.prototype.showGoHomeAction = function () {
        this.showGoHomeActionHasBeenCalled = true;
    };
    RoomViewMock.prototype.hideLeaveTheRoomAction = function () {
        this.hideLeaveTheRoomActionHasBeenCalled = true;
    };
    RoomViewMock.prototype.onGoHome = function () { };
    RoomViewMock.prototype.onIsTyping = function () { };
    RoomViewMock.prototype.onSendMessage = function () { };
    RoomViewMock.prototype.onLeaveTheRoom = function () { };
    return RoomViewMock;
}());
exports.RoomViewMock = RoomViewMock;

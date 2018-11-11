"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomServiceMock = /** @class */ (function () {
    function RoomServiceMock() {
        this.sendMessageHasBeenCalled = false;
        this.sendMessage_messageParam = '';
        this.notifyPingHasBeenCalled = false;
        this.sendIsTypingMessageHasBeenCalled = false;
        this.disconnectHasBeenCalled = true;
        this.subscribeOnChannelIsOpenedHasBeenCalled = false;
        this.subscribeOnPingHasBeenCalled = false;
        this.subscribeOnOtherIsTypingHasBeenCalled = false;
        this.subscribeOnNewMessageArriveHasBeenCalled = false;
        this.subscribeOnDisconnectHasBeenCalled = false;
        this.initializeHasBeenCalled = false;
    }
    RoomServiceMock.prototype.subscribeOnNewMessageArrive = function (func) {
        this.subscribeOnNewMessageArriveHasBeenCalled = true;
        this.onNewMessageArriveObserver = func;
    };
    RoomServiceMock.prototype.subscribeOnPing = function (func) {
        this.subscribeOnPingHasBeenCalled = true;
        this.onPingObserver = func;
    };
    RoomServiceMock.prototype.subscribeOnChannelIsOpened = function (func) {
        this.subscribeOnChannelIsOpenedHasBeenCalled = true;
        this.onChannelIsOpenedObserver = func;
    };
    RoomServiceMock.prototype.subscribeOnDisconnect = function (func) {
        this.subscribeOnDisconnectHasBeenCalled = true;
        this.onDisconnectObserver = func;
    };
    RoomServiceMock.prototype.sendMessage = function (message) {
        this.sendMessageHasBeenCalled = true;
        this.sendMessage_messageParam = message;
    };
    RoomServiceMock.prototype.messageHasArrived = function (newMessage) {
        this.onNewMessageArriveObserver(newMessage);
    };
    RoomServiceMock.prototype.pingHasArrived = function () {
        this.onPingObserver();
    };
    RoomServiceMock.prototype.channelIsOpened = function () {
        this.onChannelIsOpenedObserver();
    };
    RoomServiceMock.prototype.notifyPing = function () {
        this.notifyPingHasBeenCalled = true;
    };
    RoomServiceMock.prototype.sendIsTypingMessage = function () {
        this.sendIsTypingMessageHasBeenCalled = true;
    };
    RoomServiceMock.prototype.subscribeOnOtherIsTyping = function (func) {
        this.subscribeOnOtherIsTypingHasBeenCalled = true;
        this.onOtherIsTypingObserver = func;
    };
    RoomServiceMock.prototype.otherIsTyping = function () {
        this.onOtherIsTypingObserver();
    };
    RoomServiceMock.prototype.disconnect = function () {
        this.disconnectHasBeenCalled = true;
        this.onDisconnectObserver();
    };
    RoomServiceMock.prototype.initialize = function () {
        this.initializeHasBeenCalled = true;
    };
    return RoomServiceMock;
}());
exports.RoomServiceMock = RoomServiceMock;

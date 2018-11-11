"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomController = /** @class */ (function () {
    function RoomController(service, router) {
        this.isDisconnected = false;
        this.service = service;
        this.router = router;
    }
    RoomController.prototype.init = function (view) {
        this.view = view;
        this.view.addMessageYouAreIn();
        this.afterSetViewSubscribeServiceEvents();
    };
    RoomController.prototype.afterSetViewSubscribeServiceEvents = function () {
        var _this = this;
        this.service.subscribeOnNewMessageArrive(function (newMessage) {
            _this.newMessageArrived(newMessage);
        });
        this.service.subscribeOnPing(function () {
            _this.pingArrived();
        });
        this.service.subscribeOnOtherIsTyping(function () {
            _this.otherIsTyping();
        });
        this.service.subscribeOnDisconnect(function () {
            _this.disconnected();
        });
    };
    RoomController.prototype.sendMessage = function () {
        var messageToSend = this.view.getMessage();
        if (messageToSend) {
            this.view.cleanInput();
            this.view.addMessageFromYou(messageToSend);
            this.service.sendMessage(messageToSend);
        }
    };
    RoomController.prototype.newMessageArrived = function (newMessage) {
        this.view.addNewMessage(newMessage);
    };
    RoomController.prototype.pingArrived = function () {
        this.view.showPing();
    };
    RoomController.prototype.otherIsTyping = function () {
        this.view.showIsTyping();
    };
    RoomController.prototype.disconnected = function () {
        this.isDisconnected = true;
        this.view.showWarningMessagePartnerDisconnected();
        this.view.disableSendAction();
        this.view.hideLeaveTheRoomAction();
        this.view.showGoHomeAction();
        this.service.initialize();
    };
    RoomController.prototype.goHome = function () {
        this.router.redirectToMain();
    };
    RoomController.prototype.isTyping = function () {
        this.service.sendIsTypingMessage();
    };
    RoomController.prototype.leaveTheRoom = function () {
        try {
            this.service.disconnect();
        }
        finally {
            this.router.redirectToMain();
        }
    };
    return RoomController;
}());
exports.RoomController = RoomController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
var RoomJoinServiceMock = /** @class */ (function () {
    function RoomJoinServiceMock() {
        this.subscribeOnChannelIsOpenedHasBeenCalled = false;
        this.createAnAnswerHasBeenCalled = false;
        this.createAnAnswer_remoteOfferParam = '';
        this.secondKeyToReturn = '';
        this.createAnAnswerWillThrowAnException = false;
    }
    RoomJoinServiceMock.prototype.createAnAnswer = function (remoteOffer) {
        if (this.createAnAnswerWillThrowAnException) {
            throw 'createAnAnswer-generic-error';
        }
        this.createAnAnswerHasBeenCalled = true;
        this.createAnAnswer_remoteOfferParam = remoteOffer;
        return utils_1.PromiseHelper.promiseResult(this.secondKeyToReturn);
    };
    RoomJoinServiceMock.prototype.subscribeOnChannelIsOpened = function (func) {
        this.subscribeOnChannelIsOpenedHasBeenCalled = true;
        this.onChannelIsOpenObserver = func;
    };
    RoomJoinServiceMock.prototype.notifyChannelIsOpen = function () {
        this.onChannelIsOpenObserver();
    };
    return RoomJoinServiceMock;
}());
exports.RoomJoinServiceMock = RoomJoinServiceMock;

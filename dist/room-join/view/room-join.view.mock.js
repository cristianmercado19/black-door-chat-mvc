"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomJoinViewMock = /** @class */ (function () {
    function RoomJoinViewMock() {
        this.hideErrorMessagesHasBeenCalled = false;
        this.hideWarningMessagesHasBeenCalled = false;
        this.hideFirstKeyHasBeenCalled = false;
        this.firstKeyToReturn = '';
        this.showCreatingSecondKeyHasBeenCalled = false;
        this.getFirstKeyHasBeenCalled = false;
        this.setSecondKeyHasBeenCalled = false;
        this.setSecondKey_keyParam = '';
        this.hideCreatingSecondKeyHasBeenCalled = false;
        this.showInstructionsHasBeenCalled = false;
        this.showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled = false;
        this.showFirstKeyHasBeenCalled = false;
    }
    RoomJoinViewMock.prototype.hideErrorMessages = function () {
        this.hideErrorMessagesHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.hideWarningMessages = function () {
        this.hideWarningMessagesHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.hideFirstKey = function () {
        this.hideFirstKeyHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.showCreatingSecondKey = function () {
        this.showCreatingSecondKeyHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.getFirstKey = function () {
        this.getFirstKeyHasBeenCalled = true;
        return this.firstKeyToReturn;
    };
    RoomJoinViewMock.prototype.setSecondKey = function (key) {
        this.setSecondKeyHasBeenCalled = true;
        this.setSecondKey_keyParam = key;
    };
    RoomJoinViewMock.prototype.hideCreatingSecondKey = function () {
        this.hideCreatingSecondKeyHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.showInstructions = function () {
        this.showInstructionsHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.showFirstKey = function () {
        this.showFirstKeyHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.showErrorMessageAnswerHasNotBeenCreated = function () {
        this.showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled = true;
    };
    RoomJoinViewMock.prototype.onFirstKeyHasBeenEntered = function () { };
    return RoomJoinViewMock;
}());
exports.RoomJoinViewMock = RoomJoinViewMock;

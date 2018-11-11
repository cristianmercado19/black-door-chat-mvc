"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateRoomViewMock = /** @class */ (function () {
    function CreateRoomViewMock() {
        this.showCreatingRoomHasBeenCalled = false;
        this.showFirstKeyHasBeenCalled = false;
        this.showFirstKey_firstKeyParam = '';
        this.hideCreatingRoomHasBeenCalled = false;
        this.shareKeyByEmailHasBeenCalled = false;
        this.hideFirstKeyHasBeenCalled = false;
        this.showSecondKeyHasBeenCalled = false;
        this.showOpeningRoomHasBeenCalled = false;
        this.getSecondKeyHasBeenCalled = false;
        this.showErrorMessageFirstKeyCanNotBeCreatedHasBeenCalled = false;
        this.showWarningMessageSecondKeyShouldNotBeEmptyHasBeenCalled = false;
        this.showErrorMessageInvalidSecondKeyForThisRoomHasBeenCalled = false;
        this.hideOpeningRoomHasBeenCalled = false;
        this.hideWarningMessagesHasBeenCalled = false;
        this.hideErrorMessagesHasBeenCalled = false;
    }
    CreateRoomViewMock.prototype.showCreatingRoom = function () {
        this.showCreatingRoomHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.hideCreatingRoom = function () {
        this.hideCreatingRoomHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.showFirstKey = function (firstKey) {
        this.showFirstKey_firstKeyParam = firstKey;
        this.showFirstKeyHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.shareKeyByEmail = function (firstKey) {
        this.shareKeyByEmailHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.showSecondKey = function () {
        this.showSecondKeyHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.hideFirstKey = function () {
        this.hideFirstKeyHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.getSecondKey = function () {
        this.getSecondKeyHasBeenCalled = true;
        return this.secondKeyToReturn;
    };
    CreateRoomViewMock.prototype.showOpeningRoom = function () {
        this.showOpeningRoomHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.showErrorMessageFirstKeyCanNotBeCreated = function () {
        this.showErrorMessageFirstKeyCanNotBeCreatedHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.showWarningMessageSecondKeyShouldNotBeEmpty = function () {
        this.showWarningMessageSecondKeyShouldNotBeEmptyHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.showErrorMessageInvalidSecondKeyForThisRoom = function () {
        this.showErrorMessageInvalidSecondKeyForThisRoomHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.hideOpeningRoom = function () {
        this.hideOpeningRoomHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.hideWarningMessages = function () {
        this.hideWarningMessagesHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.hideErrorMessages = function () {
        this.hideErrorMessagesHasBeenCalled = true;
    };
    CreateRoomViewMock.prototype.onSecondKeyIsEntered = function () { };
    CreateRoomViewMock.prototype.onFirstKeyHasBeenShared = function () { };
    CreateRoomViewMock.prototype.onSharePrimaryKey = function () { };
    return CreateRoomViewMock;
}());
exports.CreateRoomViewMock = CreateRoomViewMock;

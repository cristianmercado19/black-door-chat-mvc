"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainRouterMock = /** @class */ (function () {
    function MainRouterMock() {
        this.redirectToCreateNewRoomHasBeenCalled = false;
        this.redirectToJoinAnExistingRoomHasBeenCalled = false;
    }
    MainRouterMock.prototype.redirectToCreateNewRoom = function () {
        this.redirectToCreateNewRoomHasBeenCalled = true;
    };
    MainRouterMock.prototype.redirectToJoinAnExistingRoom = function () {
        this.redirectToJoinAnExistingRoomHasBeenCalled = true;
    };
    return MainRouterMock;
}());
exports.MainRouterMock = MainRouterMock;

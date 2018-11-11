"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomRouterMock = /** @class */ (function () {
    function RoomRouterMock() {
        this.redirectToMainHasBeenCalled = false;
    }
    RoomRouterMock.prototype.redirectToMain = function () {
        this.redirectToMainHasBeenCalled = true;
    };
    return RoomRouterMock;
}());
exports.RoomRouterMock = RoomRouterMock;

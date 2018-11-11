"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomJoinRouterMock = /** @class */ (function () {
    function RoomJoinRouterMock() {
        this.redirectToChatRoomHasBeenCalled = false;
    }
    RoomJoinRouterMock.prototype.redirectToChatRoom = function () {
        this.redirectToChatRoomHasBeenCalled = true;
    };
    return RoomJoinRouterMock;
}());
exports.RoomJoinRouterMock = RoomJoinRouterMock;

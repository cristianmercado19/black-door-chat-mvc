"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateRoomRouterMock = /** @class */ (function () {
    function CreateRoomRouterMock() {
        this.redirectToChatRoomHasBeenCalled = false;
    }
    CreateRoomRouterMock.prototype.redirectToChatRoom = function () {
        this.redirectToChatRoomHasBeenCalled = true;
    };
    return CreateRoomRouterMock;
}());
exports.CreateRoomRouterMock = CreateRoomRouterMock;

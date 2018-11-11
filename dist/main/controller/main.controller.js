"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = /** @class */ (function () {
    function MainController(mainRouter) {
        this.router = mainRouter;
    }
    MainController.prototype.createNewRoom = function () {
        this.router.redirectToCreateNewRoom();
    };
    MainController.prototype.joinAnExistingRoom = function () {
        this.router.redirectToJoinAnExistingRoom();
    };
    return MainController;
}());
exports.MainController = MainController;

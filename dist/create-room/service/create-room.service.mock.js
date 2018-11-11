"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
var CreateRoomServiceMock = /** @class */ (function () {
    function CreateRoomServiceMock() {
        this.creatNewOfferHasBeenCalled = false;
        this.offerToReturn = 'abc';
        this.setupAnswerHasBeenCalled = false;
        this.setupAnswer_answerParam = '';
        this.creatNewOfferWillThrowAnException = false;
        this.setupAnswerWillThrowAnException = false;
    }
    CreateRoomServiceMock.prototype.creatNewOffer = function () {
        this.creatNewOfferHasBeenCalled = true;
        if (this.creatNewOfferWillThrowAnException) {
            throw "creatNewOffer-generic-error";
        }
        return utils_1.PromiseHelper.promiseResult(this.offerToReturn);
    };
    CreateRoomServiceMock.prototype.setupAnswer = function (answer) {
        this.setupAnswerHasBeenCalled = true;
        if (this.setupAnswerWillThrowAnException) {
            throw "setupAnswer-generic-error";
        }
        this.setupAnswer_answerParam = answer;
        return utils_1.PromiseHelper.doNothing();
    };
    return CreateRoomServiceMock;
}());
exports.CreateRoomServiceMock = CreateRoomServiceMock;

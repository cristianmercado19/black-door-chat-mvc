"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromiseHelper = /** @class */ (function () {
    function PromiseHelper() {
    }
    PromiseHelper.doNothing = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    PromiseHelper.promiseResult = function (value) {
        return new Promise(function (resolve, reject) {
            resolve(value);
        });
    };
    return PromiseHelper;
}());
exports.PromiseHelper = PromiseHelper;
var TestNamingHelper = /** @class */ (function () {
    function TestNamingHelper() {
    }
    TestNamingHelper.scenarioName = function (description) {
        return "\r\n\r\n" + ("# " + description);
    };
    TestNamingHelper.artifactName = function (artifact) {
        var name = "> " + artifact;
        var rule = '_'.repeat(name.length);
        var final = "\r\n" + name + "\r\n" + rule;
        return final;
    };
    return TestNamingHelper;
}());
exports.TestNamingHelper = TestNamingHelper;

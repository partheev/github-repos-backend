"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    var _a, _b;
    if (err.message) {
        res.status(400).send({
            error: (_a = err.stack) === null || _a === void 0 ? void 0 : _a.toString(),
            message: err.message,
        });
    }
    else {
        res.status(500).send({
            error: (_b = err.stack) === null || _b === void 0 ? void 0 : _b.toString(),
            message: 'Something went wrong',
        });
    }
};
exports.errorHandler = errorHandler;

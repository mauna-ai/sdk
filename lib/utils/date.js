"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
function now() {
    var date = new Date();
    var timestamp = date.getTime();
    var offset = date.getTimezoneOffset();
    return (timestamp - offset);
}
exports.now = now;
//# sourceMappingURL=date.js.map
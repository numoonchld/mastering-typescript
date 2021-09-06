"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
{ }
;
var Analytics = /** @class */ (function () {
    function Analytics(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Analytics.prototype.report = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Analytics;
}());
exports.Analytics = Analytics;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var Analytics = /** @class */ (function () {
    function Analytics(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Analytics.HTMLWins = function (team) {
        return new Analytics(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HTMLReport());
    };
    Analytics.prototype.report = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Analytics;
}());
exports.Analytics = Analytics;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCSV = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (line) {
            return [
                (0, utils_1.dateStringToDate)(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5],
                line[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;

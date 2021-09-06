"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Analytics_1 = require("./Analytics");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
// LOAD CSV FILE
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// LOAD MATCH DATA FROM CSV FILE
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// LOAD ANALYTICS
var analytics = new Analytics_1.Analytics(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
// SHOW REPORT
analytics.report(matchReader.matches);

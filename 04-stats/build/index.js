"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Analytics_1 = require("./Analytics");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
// LOAD CSV FILE
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
/* FLEXIBLE IMPLEMENTATION ----------------------------------- */
// LOAD MATCH DATA FROM CSV FILE - FLEXIBLE
var matchReader1 = new MatchReader_1.MatchReader(csvFileReader);
matchReader1.load();
// LOAD ANALYTICS
var consoleAnalytics = new Analytics_1.Analytics(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
var HTMLAnalytics = new Analytics_1.Analytics(new WinsAnalysis_1.WinsAnalysis('Man United'), new HTMLReport_1.HTMLReport());
// SHOW REPORT
consoleAnalytics.report(matchReader1.matches);
HTMLAnalytics.report(matchReader1.matches);
/* STATIC IMPLEMENTATION ------------------------------------ */
// LOAD MATCH DATA FROM CSV FILE - STATIC
var matchReader2 = MatchReader_1.MatchReader.fromCSV('football.csv');
matchReader2.load();
// GENERATE REPORT FOR WINS
var analytics = Analytics_1.Analytics.HTMLWins('Man United');
analytics.report(matchReader2.matches);

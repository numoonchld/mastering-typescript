import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Analytics } from './Analytics';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
// LOAD CSV FILE
const csvFileReader = new CsvFileReader('football.csv');

// LOAD MATCH DATA FROM CSV FILE
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// LOAD ANALYTICS
const consoleAnalytics = new Analytics(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

const HTMLAnalytics = new Analytics(
  new WinsAnalysis('Man United'),
  new HTMLReport()
);

// SHOW REPORT
consoleAnalytics.report(matchReader.matches);
HTMLAnalytics.report(matchReader.matches);

import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Analytics } from './Analytics';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

// LOAD CSV FILE
const csvFileReader = new CsvFileReader('football.csv');

/* FLEXIBLE IMPLEMENTATION ----------------------------------- */

// LOAD MATCH DATA FROM CSV FILE - FLEXIBLE
const matchReader1 = new MatchReader(csvFileReader);
matchReader1.load();

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
consoleAnalytics.report(matchReader1.matches);
HTMLAnalytics.report(matchReader1.matches);

/* STATIC IMPLEMENTATION ------------------------------------ */

// LOAD MATCH DATA FROM CSV FILE - STATIC
const matchReader2 = MatchReader.fromCSV('football.csv');
matchReader2.load();

// GENERATE REPORT FOR WINS
const analytics = Analytics.HTMLWins('Man United');
analytics.report(matchReader2.matches);

import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { Analytics } from './Analytics';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

// LOAD CSV FILE
const csvFileReader = new CsvFileReader('football.csv');

// LOAD MATCH DATA FROM CSV FILE
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// LOAD ANALYTICS
const analytics = new Analytics(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

// SHOW REPORT
analytics.report(matchReader.matches);

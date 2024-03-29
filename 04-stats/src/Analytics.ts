import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Analytics {
  static HTMLWins(team: string): Analytics {
    return new Analytics(new WinsAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  report(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

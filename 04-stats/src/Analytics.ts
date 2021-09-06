import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string {};
}

export interface OutputTarget {
  print(report:string): void
}

export class Analytics {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    


  }

  report(matches: MatchData[]):void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}


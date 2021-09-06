import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((line: string[]): MatchData => {
      return [
        dateStringToDate(line[0]),
        line[1],
        line[2],
        parseInt(line[3]),
        parseInt(line[4]),
        line[5] as MatchResult,
        line[6],
      ];
    });
  }
}

import fs from 'fs';
import { MatchResult } from './MatchResult';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapLine(line: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((line: string): string[] => line.split(','))
      .map(this.mapLine);
  }
}

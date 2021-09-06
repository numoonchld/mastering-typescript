import { OutputTarget } from '../Analytics';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

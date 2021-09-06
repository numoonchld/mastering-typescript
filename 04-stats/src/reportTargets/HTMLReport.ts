import { OutputTarget } from '../Analytics';
import fs from 'fs';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1> Analysis Output </h1>
      <div>${report}</div>
    </div>
    `;

    fs.writeFileSync('reports.html', html);
  }
}

import fs from 'fs';

/* LOAD ALL MATCHES */
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((line: string): string[] => line.split(','));

console.log(matches);

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

/* COUNT MAN-U WINS */
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

/* REPORT */
console.log(`Man United won ${manUnitedWins} games!`);

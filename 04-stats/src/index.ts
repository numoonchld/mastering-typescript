import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

/* LOAD ALL MATCHES */
const reader = new MatchReader('football.csv');
reader.read();

/* COUNT MAN-U WINS */
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

/* REPORT */
console.log(`Man United won ${manUnitedWins} games!`);

/* 
Your local bar just fired up a vintage "Street Brawler II" arcade machine, and every day between 8 PM and 9 PM, streams live players on their YouToo channel.

You're interested in finding out how many total minutes there were when two human players were facing each other.

Given an array of arrays of time segments as [start minute, end minute] that represent a period when there was a human player as either Player 1 or Player 2, return the total number of minutes when both sides were occupied by humans.

Recall that this stream happens between 8 - 9 PM, so only the minute is given. In other words, consider each integer MM to represent the time 8:MM:00 PM.

Technically, the individual period data format is:

PlayerActive: [startMinute: integer, endMinute: integer]

And the expected solution function signature is:

solution(PlayerOneIsHuman: Array[PlayerActive], PlayerTwoIsHuman: Array[PlayerActive]) -> integer

Examples:

Suppose there was only a single Player One and a single Player Two who joined while Player One was playing:

solution([[15, 20]], [[18, 30]])

Player One played from 8:15:00 PM to 8:20:00 PM (a total of 5 minutes)
Player Two played from 8:18:00 PM to 8:30:00 PM (a total of 12 minutes)

They faced each other from 8:18 PM to 8:20 PM. Return 2 for the 2 minutes that these two humans were playing against each other.

In a more realistic scenario, there are multiple players who come and go during this hour. Consider:

solution([[2, 10], [15, 22], [30, 32], [40, 55], [57, 59]],
         [[5, 8], [11, 13], [20, 30], [35, 45]])
The overlapping times are:
8:05 - 8:08 (3 minutes)
8:20 - 8:22 (2 minutes)
8:40 - 8:45 (5 minutes)

That represents 10 total minutes of 2-human-player action. Return 10.
*/
function solution(p1: number[][], p2: number[][]): number {
  let totalOverlap = 0;

  for (const segment1 of p1) {
    for (const segment2 of p2) {
      const [start1, end1] = segment1;
      const [start2, end2] = segment2;

      const overlapStart = Math.max(start1, start2);
      const overlapEnd = Math.min(end1, end2);

      if (overlapStart < overlapEnd) {
        totalOverlap += overlapEnd - overlapStart;
      }
    }
  }

  return totalOverlap;
}

console.log(
  solution(
    [
      [5, 25],
      [30, 55],
    ],
    [
      [10, 15],
      [42, 43],
      [44, 45],
    ]
  )
); // 7
/* 
console.log(
  solution(
    [
      [28, 30],
      [40, 42],
      [50, 52],
    ],
    [[5, 55]]
  )
); // 6

console.log(
  solution(
    [
      [2, 10],
      [15, 22],
      [30, 32],
      [40, 55],
      [57, 59],
    ],
    [
      [5, 8],
      [11, 13],
      [20, 30],
      [35, 45],
    ]
  )
); // 3 2 5 === 10
 */

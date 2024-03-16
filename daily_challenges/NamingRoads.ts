function solution(roads: number[][]) {
  const visitedRoads: number[] = [];

  return roads.every((road) =>
    road.every(
      (value, index) =>
        index > 1 ||
        (visitedRoads[(value = value * 5e4 + road[2])] =
          !visitedRoads[value + 1] && !visitedRoads[value - 1])
    )
  );
}

console.log(
  solution([
    [2, 3, 1],
    [3, 0, 0],
    [2, 0, 2]
  ])
); // false

console.log(
  solution([
    [0, 1, 0],
    [4, 1, 2],
    [4, 3, 4],
    [2, 3, 1],
    [2, 0, 3]
  ])
); // true

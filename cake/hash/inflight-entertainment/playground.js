/**
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
**/
// i: int arr, int o: boolean
const canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  // check inputs
  if (!movieLengths || flightLength === undefined) return false;
  // difference tracker
  const diffTracker = new Set();
  // loop
  for (let movie of movieLengths) {
    // get diff
    const diff = flightLength - movie;
    // true find diff in tracker
    if (diffTracker.has(diff)) return true;
    // add diff to tracker
    diffTracker.add(movie);
  }
  // false
  return false;
};
// O(n) O(n)

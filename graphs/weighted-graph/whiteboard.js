/**
 * Find the shortest path from A to E
              A
      (2)/         \(4)
       /  (2)        \
    C   ------  D     B
  (4)\         / \(3) |    
      \   (1)/     \  |(3)
        F    ------   E
              (1)
**/

/**
 * Pick the smallest
 * Vertex    Shortest Dist From A
 *    A       0
 *    B       Infinity
 *    C       Infinity
 *    D       Infinity
 *    E       Infinity
 *    F       Infinity
 **/

//  Visited: []

/**
 * Previous: {
 *  A: null,
 *  B: null,
 *  C: null,
 *  D: null,
 *  E: null,
 *  F: null
 * } 
 **/

 /**
 * Find the shortest path from A to E
              A
      (2)/         \(4)
       /  (2)        \
    C   ------  D     B
  (4)\         / \(3) |    
      \   (1)/     \  |(3)
        F    ------   E
              (1)
**/

//  Shortest dist A to E
// Look at A
// A to A is 0
shortestDist = {A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
visited = [A]

// Go by alphabet
// Look at A to B
// We know A to B is 4 and that's smaller than infinity
shortestDist = {A: 0, B: 4, C: Infinity, D: Infinity, E: Infinity, F: Infinity };
// update previous as where did we just come from for B is A
previous = { B: A };

// Look at A to C
shortestDist = {A: 0, B: 4, C: 2, D: Infinity, E: Infinity, F: Infinity };
previous = { B: A, C: A };

// Look at smallest known dist from A
// B (4)  C (2)
// Start with C cuz it is smaller
// Already did A and C
visited = [A, C]
// Look at C to D
// Calc A to D through C
// C to D = 2
// how to get to C, look at previous = { A: null, B: A, C: A, D: null, E: null, F: null };
// A to C is 2 from shortestDist
// A to D is 2 + 2 = 4
// compare with shortestDist for the smaller value Min: (4, Infinity) 
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: Infinity, F: Infinity };
previous = { B: A, C: A, D: C };

// Look at C to F
// C to F is 4
// A to C is 2
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: Infinity, F: 6 };
previous = { B: A, C: A, D: C, F: C };

// Look at shortestDist thats not on visited
visited = [A, C]
shortestDist = {
  A: 0,  // visited
  B: 4,  // <--
  C: 2,  // visited
  D: 4,  // <--
  E: Infinity,
  F: 6  // <--
};
// B and C is the smallest, start with alpha B

// Look at B to E
// B to E is 3
// A to B is 4
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: 7, F: 6 };
previous = { B: A, C: A, D: C, E: B, F: C };
visited = [A, C, B];
// we have one path from A to E which is 7

// Look at shortestDist thats not on visited
visited = [A, C, B];
shortestDist = {
  A: 0,  // visited
  B: 4,  // visited
  C: 2,  // visited
  D: 4,  // <--
  E: 7,  // <--
  F: 6   // <--
};

// Look at D
// D to E and D to F
// going alpha with D to E
// D to E is 3
// A to C to D is 4
// A to C to D to E is 7
// shortestDist to E is already 7
// ignore

// Look at D to F
// D to F is 1
// A to C to D is 4
// A to F is 5
// shortestDist = {A: 0, B: 4, C: 2, D: 4, E: 7, F: 6 };
// Min of (5, 6)
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 };
// previous for F now is D
previous = { B: A, C: A, D: C, E: B, F: D };
visited = [A, C, B, D];

// Look at shortestDist
shortestDist = {
  A: 0,  // visited
  B: 4,  // visited
  C: 2,  // visited
  D: 4,  // visited
  E: 7,  // <--
  F: 5   // <--
};

// Look at F
// F to E is left
// F to E is 1
// A to C to D to F is 5
// A to E is 6
// Min of (6, 7)
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: 6, F: 5 };
// update previous to E from F
previous = { B: A, C: A, D: C, E: F, F: D };

// No where left to go but E
// shortest path
previous = { B: A, C: A, D: C, E: F, F: D };
// E < F < D < C < A
shortestDist = {A: 0, B: 4, C: 2, D: 4, E: 6, F: 5 };
// shortestDist = 6
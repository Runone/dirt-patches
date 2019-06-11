## Roomba Cleaner
Application that navigates an imaginary roomba hoover through an equally imaginary room. Written in Javascript and Node.js.

## Input
Input for this program can be modified in `input.txt` file in `src` directory.

Example: 

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW 
```
- The first line holds the dimensions of the room (X = number of columns and Y = number of rows)
- The second line holds the starting hoover position
- The rest of the lines until the final line hold the positions of dirt patches
- The final line contains the directions (N = North, E = East, S = South, W = West) for the Roomba

## Output
Output for example above should match
```
1 3
1
```
- The first line holds the final position of the Roomba
- The last line holds the number of dirt patches cleaned

## Instructions on how to run
- `git clone https://github.com/Runone/dirt-patches`
- `cd dirt-patches/src`
- run `node index.js` in command line
- Terminal prints out final coordinates and number of dirt patches cleaned
```
1 3
1
```

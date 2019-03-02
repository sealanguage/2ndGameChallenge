var i = i;
var j = j;
var k = k;

var space = " ";
var vbar = "|";
var plus = "+";
var dash = "-";
var spaceBar = "^" + "|";
var dashPlus = "-" + "+";

var x = 5;
var y = 3;

// this is a hard coded tictactoe board in a multidimensional array
var board = [["X", vbar, "X", vbar, "X"], 
            [dash, plus, dash, plus, dash], 
            ["X", vbar, "X", vbar, "X"], 
            [dash, plus, dash, plus, dash], 
            ["X", vbar, "X", vbar, "X"]];

// this array of single letters is printed to the console using the for loop below  
// NOW NEED TO LOAD ONE ARRAY WITH DASHPLUS CODE DYNAMICALLY AND BE ABLE TO CHANGE NUMBER OF ITERATIONS DYNAMICALLY
var board2 = [["z"], 
            ["y"], 
            ["x"], 
            ["w"], 
            ["v"]];
            
var aRow = [spaceBar];
var bRow = [dashPlus];


// board drawn as a 2d array, first [] is rows, second [] is columns
// var drawBoard = [x][y];

// for horizontal row, make spaceBar x times plus one extra space


function drawBoard() {
    
    var x = 3;
        for (i = 0; i < 6; i++) {
        
        board.push([i]);
        return;
    }

}


console.log(board);

// this for loop prints the array board2 to the console 
console.log("for loop making the board:")
for (var i in board2) 
{
  console.log(board2[i].join(""));
}


// var result = '';
// var i = 0;
// do {
//   i += 1;
//   result += i + ' ';
// } while (i < 5);
// document.getElementById('example').innerHTML = result;


// for (var i in a) 
// {
//   console.log(a[i].join(""));
// }


console.log("x and y = ", x, y);
console.log("spaceBar =", spaceBar);
// console.log("dashPlus =", dashPlus);
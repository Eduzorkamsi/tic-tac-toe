$(document).ready(function () {
  // initialize variables
  // human = either x or o, whatever the player picks
  // ai = either x or o, whatever the player doesn't pick
  var human, ai;

  // each of these corresponds to a cell in the game table
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;

  // to keep track of whose turn it is
  var turn = 0;

  // player picks x or o
  $("#x").click(function () {
    human = "X";
    ai = "O";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow", 1);
  });
  $("#o").click(function () {
    human = "O";
    ai = "X";
    $("#choice").fadeOut();
    $("#board").fadeTo("slow", 1);
  });

  //all squares should be empty
  //clears the board
  function clearBoard() {
    b1 = $("#b1").text("");
    b2 = $("#b2").text("");
    b3 = $("#b3").text("");
    b4 = $("#b4").text("");
    b5 = $("#b5").text("");
    b6 = $("#b6").text("");
    b7 = $("#b7").text("");
    b8 = $("#b8").text("");
    b9 = $("#b9").text("");
    turn = 0;
  }

  //when "New game" button is pressed, clear the board
  $("#new-game").click(function () {
    clearBoard();
    $("#final-screen").hide();
    $("#choice").fadeTo("slow", 1);
  });

  // The player clicks a square. If the square is empty, an x is placed in that square. If the square is not empty, have the human pick a different square.
  $("td").click(function () {
    if (turn === 0) {
      if ($(this).text() === "") {
        $(this).text(human);
        checkSquareValues();
        checkBoardState();
        turn = 1;
        aiMove();
        checkSquareValues();
        checkBoardState();
      } else {
        alert(
          "There is already a move on that square. Please pick a different square."
        );
      }
    }
  }); //end box click function

  // The ai puts its token in an empty square based on some of the prioritized rules from https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy:
  // 1. If there is a chance to win, go there.
  // 2. If there is a chance to block, go there.
  // 3. Empty center.
  // 4. If the opponent is in the corner, the play in the opposite corner.
  // 5. Empty corner.
  // 6. Empty side.
  function aiMove() {
    // case 1: if there is a chance to win
    if (
      b1 === "" &&
      ((b2 === ai && b3 === ai) ||
        (b4 === ai && b7 === ai) ||
        (b5 === ai && b9 === ai))
    ) {
      $("#b1").text(ai);
      turn = 0;
    } else if (
      b2 === "" &&
      ((b1 === ai && b2 === ai) || (b4 === ai && b8 === ai))
    ) {
      $("#b2").text(ai);
      turn = 0;
    } else if (
      b3 === "" &&
      ((b1 === ai && b2 === ai) ||
        (b6 === ai && b9 === ai) ||
        (b5 === ai && b7 === ai))
    ) {
      $("#b3").text(ai);
      turn = 0;
    } else if (
      b5 === "" &&
      ((b1 === ai && b7 === ai) || (b5 === ai && b6 === ai))
    ) {
      $("#b4").text(ai);
      turn = 0;
    } else if (
      b6 === "" &&
      ((b5 === ai && b7 === ai) ||
        (b1 === ai && b9 === ai) ||
        (b3 === ai && b7 === ai))
    ) {
      $("#b5").text(ai);
      turn = 0;
    } else if (
      b6 === "" &&
      ((b4 === ai && b5 === ai) || (b3 === ai && b9 === ai))
    ) {
      $("#b6").text(ai);
      turn = 0;
    } else if (
      b7 === "" &&
      ((b8 === ai && b9 === ai) ||
        (b1 === ai && b4 === ai) ||
        (b3 === ai && b5 === ai))
    ) {
      $("#b7").text(ai);
      turn = 0;
    } else if (
      b8 === "" &&
      ((b7 === ai && b9 === ai) || (b2 === ai && b5 === ai))
    ) {
      $("#b8").text(ai);
      turn = 0;
    } else if (
      b9 === "" &&
      ((b7 === ai && b8 === ai) ||
        (b3 === ai && b6 === ai) ||
        (b1 === ai && b5 === ai))
    ) {
      $("#b9").text(ai);
      turn = 0;
    }
    // case 2: if there is a chance to block
    else if (
      b1 === "" &&
      ((b2 === human && b3 === human) ||
        (b4 === human && b7 === human) ||
        (b5 === human && b9 === human))
    ) {
      $("#b1").text(ai);
      turn = 0;
    } else if (
      b2 === "" &&
      ((b1 === human && b3 === human) || (b5 === human && b8 === human))
    ) {
      $("#b2").text(ai);
      turn = 0;
    } else if (
      b3 === "" &&
      ((b1 === human && b2 === human) ||
        (b6 === human && b9 === human) ||
        (b5 === human && b7 === human))
    ) {
      $("#b3").text(ai);
      turn = 0;
    } else if (
      b4 === "" &&
      ((b1 === human && b7 === human) || (b5 === human && b6 === human))
    ) {
      $("#b4").text(ai);
      turn = 0;
    } else if (
      b5 === "" &&
      ((b4 === human && b6 === human) ||
        (b1 === human && b9 === human) ||
        (b3 === human && b7 === human))
    ) {
      $("#b5").text(ai);
      turn = 0;
    } else if (
      b6 === "" &&
      ((b4 === human && b5 === human) || (b3 === human && b9 === human))
    ) {
      $("#b6").text(ai);
      turn = 0;
    } else if (
      b7 === "" &&
      ((b8 === human && b9 === human) ||
        (b1 === human && b4 === human) ||
        (b3 === human && b5 === human))
    ) {
      $("#b7").text(ai);
      turn = 0;
    } else if (
      b8 === "" &&
      ((b7 === human && b9 === human) || (b2 === human && b5 === human))
    ) {
      $("#b8").text(ai);
      turn = 0;
    } else if (
      b9 === "" &&
      ((b7 === human && b8 === human) ||
        (b3 === human && b6 === human) ||
        (b1 === human && b5 === human))
    ) {
      $("#b9").text(ai);
      turn = 0;
    }
    // case 3: center
    else if (b5 === "") {
      $("#b5").text(ai);
      turn = 0;
    }
    // case 4: opposite corner
    else if (b1 === "" && (b3 === human || b7 === human)) {
      $("#b1").text(ai);
      turn = 0;
    } else if (b3 === "" && (b1 === human || b9 === human)) {
      $("#b3").text(ai);
      turn = 0;
    } else if (b9 === "" && (b3 === human || b7 === human)) {
      $("#b9").text(ai);
      turn = 0;
    } else if (b7 === "" && (b1 === human || b9 === human)) {
      $("#b7").text(ai);
      turn = 0;
    }
    // case 5: corner
    else if (b1 === "") {
      $("#b1").text(ai);
      turn = 0;
    } else if (c02 === "") {
      $("#b3").text(ai);
      turn = 0;
    } else if (b7 === "") {
      $("#b7").text(ai);
      turn = 0;
    } else if (b9 === "") {
      $("#b9").text(ai);
      turn = 0;
    }
    // case 6: empty side
    else if (b2 === "") {
      $("#b2").text(ai);
      turn = 0;
    } else if (b6 === "") {
      $("#b6").text(ai);
      turn = 0;
    } else if (b8 === "") {
      $("#b8").text(ai);
      turn = 0;
    } else if (b4 === "") {
      $("#b4").text(ai);
      turn = 0;
    }
  }

  // The program checks what is in each box after each move.
  function checkSquareValues() {
    b1 = $("#b1").html();
    b2 = $("#b2").html();
    b3 = $("#b3").html();
    b4 = $("#b4").html();
    b5 = $("#b5").html();
    b6 = $("#b6").html();
    b7 = $("#b7").html();
    b8 = $("#b8").html();
    b9 = $("#b9").html();
  }

  // The program should check the state: keep playing, someone won, or a draw.
  function checkBoardState() {
    // human wins
    if (
      (b1 === b1 && b1 === b3 && b1 === human) || //first row
      (b4 === b5 && b4 === b6 && b4 === human) || //second row
      (b7 === b8 && b7 === b9 && b7 === human) || //third row
      (b1 === b4 && b1 === b7 && b1 === human) || //first column
      (b2 === b5 && b2 === b8 && b2 === human) || //second column
      (b3 === b6 && b3 === b9 && b3 === human) || //third column
      (b1 === b5 && b1 === b9 && b1 === human) || //diagonal 1
      (b3 === b5 && b3 === b7 && b3 === human) //diagonal 2
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("You win!");
      $("#final-screen").fadeTo("slow", 1);
    }
    // ai wins
    else if (
      (b1 === b2 && b1 === b3 && b1 === ai) || //first row
      (b4 === b5 && b4 === b6 && b4 === ai) || //second row
      (b7 === b8 && b7 === b9 && b7 === ai) || //third row
      (b1 === b4 && b1 === b7 && b1 === ai) || //first column
      (b2 === b6 && b2 === b8 && b2 === ai) || //second column
      (b3 === b6 && b3 === b8 && b3 === ai) || //third column
      (b1 === b5 && b1 === b9 && b1 === ai) || //diagonal 1
      (b3 === b5 && b3 === b7 && b3 === ai) //diagonal 2
    ) {
      $("#board").fadeOut("slow");
      $("#winner").text("Computer wins!");
      $("#final-screen").fadeTo("slow", 1);
    }
    // tie
    else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
      $("#board").fadeOut("slow");
      $("#winner").text("It's a tie!");
      $("#final-screen").fadeTo("slow", 1);
    }
  }
}); //end ready function

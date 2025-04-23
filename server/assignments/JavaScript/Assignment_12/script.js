var n = Number.parseInt(window.prompt("Enter  number for nim game"));
document.write("<h1>You are playing first</h1>");
n % 4 === 0
  ? document.write(
      '<br> <h1 style="background-color: red;"> Your friend won </h1> <br>'
    )
  : document.write(
      '<br> <h1 style="background-color: green;"> you won the game </h1>'
    );

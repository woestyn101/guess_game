var randNumber = Math.floor(Math.random() * 5) + 1;
      var theAnswer = document.getElementById("theNumber");
      var numGuess = 0;

      document.getElementById("myButton").onclick = function () {
        var theInput = document.getElementById("userInput").value;
        if (theInput == randNumber) {
          //alert("your are correct");
          theAnswer.innerHTML =
            " Your are correct, The number was: " + randNumber;
        } else if (theInput > randNumber) {
          //alert("your are wrong!, the number was: " + randNumber);
          theAnswer.innerHTML = "Guess lower";
        } else {
          theAnswer.innerHTML = " Guess higher";
        }

        // alert("hello");
        // alert(randNumber);
        // alert(theInput);
      };

      // document.getElementById("theNumber").innerHTML = randNumber;

    
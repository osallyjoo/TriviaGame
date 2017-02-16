var numCorrect = 0;
var numWrong = 0;
var unanswered = 0;
var totalQuestions = 6;
var answers = ["c", "c", "c", "c", "c", "c"];

function onSubmit() {


    q1 = document.forms["quiz"]["q1"].value;
    q2 = document.forms["quiz"]["q2"].value;
    q3 = document.forms["quiz"]["q3"].value;
    q4 = document.forms["quiz"]["q4"].value;
    q5 = document.forms["quiz"]["q5"].value;
    q6 = document.forms["quiz"]["q6"].value;

    for (var i = 1; i <= totalQuestions; i++) {
        if (("q" + i) != answers[i - 1] && ("q" + i) != "") {
            numWrong++;
            console.log('numWrong', numWrong);
        }
    }

    for (var i = 1; i <= totalQuestions; i++) {
        if (("q" + i) == answers[i - 1]) {
            numCorrect++;
            console.log('numCorrect', numCorrect);
        }
    }

    for (var i = 1; i <= totalQuestions; i++) {
        if (("q" + i) == "") {
            unanswered++;
            console.log('unanswered', unanswered);
        }
    }
    printResult();

    return false;

}

function printResult() {
    var resultCorrect = document.getElementById("correct");
    resultCorrect.innerHTML=(numCorrect);

    var resultWrong = document.getElementById("incorrect");
    resultWrong.innerHTML=(numWrong);

    var resultUnanswered = document.getElementById("unanswered");
    //var unanswer = totalQuestions - numWrong - numCorrect;
    resultUnanswered.innerHTML=(unanswered);

}

$(document).ready(function() {
    $("form").hide();
    $("#results").hide();
    var counter = 20;
    $("#start").click(function() {
        $("form").show();
        $("#start").toggle();

        setInterval(function() {
            counter--;
            if (counter >=0) {
                span =document.getElementById("count");
                span.innerHTML = counter;
            }
            if (counter === 0) {
                $("form").hide();
                $("#results").show();
                clearInterval(counter);
                onSubmit();
                //printResult();
            }
        }, 1000)
    });

    $("#done").click(function(){
        $("form").hide();
        $("#results").show();
        clearInterval(counter);
        onSubmit();
        //printResult();
    });
});

    // $("#done").click(function() {
    //     $("form").hide();
    //     $("#result").show();
    // });



// Start button
    //Time ticks down
    //Question is shown

// Click answer - tells u if correct or incorrect
    // If wrong, displays "nope!", and "Correct answer was: " + image.
        // No user input, automatically moves onto the next question & Time remaining resets
    // If time remaining reaches 0, displays "Out of Time!" and "correct answer was: " + image
        // Then moves to next question
    //

//At the end of the game: Shows: A) Timer is no longer ticking down, b) "All done, here's how you did!"- Coorect Answers:, Incorrect Answers: and Unanswered: C) Start over?
//When you click Start over, resets the game (not reloads the page)... goes to question one again

// Moves onto the next question when: a) time hits zero or b) user clicks an answer choice
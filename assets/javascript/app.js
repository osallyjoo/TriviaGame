var answers = ["C", "C", "C", "C", "C", "C"];
var totalQuestions = answers.length;


function getCheckedValue(radioName) {
    var radios = document.getElementByName(radioName);
    for (var y=0; y<radios.length; y++)
        if (radios[y].checked)
            return radios[y].value;
}

function getScore() {
    var score = 0;
    for (var i = 0; i < totalQuestions; i++)
        if (getCheckedValue("question"+i) === answers[i])
            score +=1;
        return score;
}

function returnScore() {
    alert("Your score is "+ getScore() + "/" + totalQuestions);
}


$(document).ready(function() {
    $("form").hide();
    $("#result").hide();

    $("#start").click(function() {
        $("form").show();
        $("#start").toggle();
        var counter = 20;
        setInterval(function() {
            counter--;
            if (counter >=0) {
                span =document.getElementById("count");
                span.innerHTML = counter;
            }
            if (counter === 0) {
                $("form").hide();
                $("#result").show();
                clearInterval(counter);
            }
        }, 1000)
    });

    $("#done").click(function() {
        $("form").hide();
        $("#result").show();
    });


});



// var game = {
//     correct: null,
//     incorrect: null,
//     unanswered: null,
//     totalQuestions: questions.length,
//     totalSeconds: 20,


//     timer: function() {
//         document.getElementById("timer").innerHTML = "Time Remaining: " + totalSeconds;
//         if (totalSeconds <=0) {
//             setTimeout()
//         } else {
//             totalSeconds = totalSeconds - 1;
//             setTimeout(timer, 1000);
//         }
//     }

//     // this function passes another function,
//     // Allows to trigger a certain action after a given moment
//     // setTimeout(loadNextQuestion, 1000 * 20);


//     setTimeout(timer, 1000 * 20);

//     start: function() {

//     },

//     timeUp: function() {

//     }

//     }
// setTimeout(tenSeconds, 1000 * 10);
// clearTimeout();
// clearInterval();
// }

// function loadQuestion(questionIndex) {
//     var q = questions[questionIndex];
//     question
// }

// function loadNextQuestion() {
//     var selectedOption = document.querySelector("input[type=radio]:checked");
//     if(!selectedOption) {
//         alert("Please select your answer!");
//         return;
//     }
//     var answer = selectedOption.value;
//     if(questions[currentQuestion].answer === answer) {
//         correct++;
//     }
//     if (currentQuestion === totalQuestions){
//         // display score
//     }
// }




// function tenSeconds() {
//     $("#time-left").append("<h2>About 10 seconds left!</h2>");
// }


// $(function(){
//     $("#s_timer").countdowntimer({
//         seconds : 25‚
//                 size : "lg"
//     });
// });



// // Keeps user on the page without having to reload
// $("#quiz-form").on("submit", function(event) {
//     event.preventDefault();
// }

// // Check the answer
//     var $answer = $("quiz-answer");
//     var answer = $answer.val();// find that first element and look at the value
//     console.log(answer);

// //display message to user to see if they got it
//     if (answer === "") {
//         $("#result").text("Correct!")
//     } else {

//     }


// // Start button
//     //Time ticks down
//     //Question is shown

// // Click answer - tells u if correct or incorrect
//     // If wrong, displays "nope!", and "Correct answer was: " + image.
//         // No user input, automatically moves onto the next question & Time remaining resets
//     // If time remaining reaches 0, displays "Out of Time!" and "correct answer was: " + image
//         // Then moves to next question
//     //

// // At the end of the game: Shows: A) Timer is no longer ticking down, b) "All done, here's how you did!"- Coorect Answers:, Incorrect Answers: and Unanswered: C) Start over?
//     // When you click Start over, resets the game (not reloads the page)... goes to question one again


// // Moves onto the next question when: a) time hits zero or b) user clicks an answer choice
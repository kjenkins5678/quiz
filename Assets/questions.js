var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    }
    ///etc.
    ];

$(document).ready(function() {

    $("#start-btn").on("click", function() {

        // remove instructions
        $("h1").remove();
        $(".lead").remove();

        // add question
        var addQuestion = $("<h3>");
        addQuestion.text(questions[0].title);
        $("#main-display").append(addQuestion);

        // add buttons
        


       });

});

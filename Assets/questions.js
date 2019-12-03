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
        $("#start-btn").remove();

        // add question
        var addQuestion = $("<h3>");
        addQuestion.text(questions[0].title);
        $("#main-display").append(addQuestion);

        // add buttons
        for (i = 0; i < questions[0].choices.length; i++){
            var rowID = "row_" + i;
            console.log(rowID);
            
            var addBtn = $("<a>");
            addBtn.addClass("btn btn-primary mt-2");
            addBtn.text(questions[0].choices[i]);
            $(".buttons").append(addBtn);
        };



       });

});

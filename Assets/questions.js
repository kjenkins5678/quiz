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

            // Add row to vertically stack buttons
            var addDiv = $("<div>");
            addDiv.addClass("row");
            addDiv.attr("id",rowID);
            $(".buttons").append(addDiv);

            // Add button
            var addBtn = $("<a>");
            addBtn.addClass("btn btn-primary mt-2");
            addBtn.text((i+1) + ". " + questions[0].choices[i]);
            $("#"+rowID).append(addBtn);
        };



       });

});

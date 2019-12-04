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
        addQuestion.addClass("question")
        addQuestion.text(questions[0].title);
        $("#main-display").append(addQuestion);

        // add buttons
        for (i = 0; i < questions[0].choices.length; i++){
            var rowID = "row_" + i;

            // Add row to vertically stack buttons
            var addDiv = $("<div>");
            addDiv.addClass("row");
            addDiv.attr("id",rowID);
            $(".buttons").append(addDiv);

            // Add button
            var addBtn = $("<a>");
            addBtn.addClass("btn btn-primary mt-2 ansBtn");
            addBtn.text((i+1) + ". " + questions[0].choices[i]);
            addBtn.attr("data-anum", i)
            $("#"+rowID).append(addBtn);
        };

        $(".ansBtn").on("click", function() {
            var userSelect = $(this).attr("data-anum");
            var rightAnswer = questions[0].choices.indexOf(questions[0].answer);

            // Add new question
            var newQuestion = $(".question").text(questions[1].title);
            $("#main-display").append(newQuestion);

            // Remove old buttons
            $(".row").remove();
            $(".ansBtn").remove();

            // Add new buttons
            for (i = 0; i < questions[1].choices.length; i++){
                var rowID = "row_" + i;
    
                // Add row to vertically stack buttons
                var addDiv = $("<div>");
                addDiv.addClass("row");
                addDiv.attr("id",rowID);
                $(".buttons").append(addDiv);
    
                // Add button
                var addBtn = $("<a>");
                addBtn.addClass("btn btn-primary mt-2 ansBtn");
                addBtn.text((i+1) + ". " + questions[1].choices[i]);
                addBtn.attr("data-anum", i)
                $("#"+rowID).append(addBtn);
            };
            
            var checkDiv = $("<div>");
            checkDiv.addClass("response");
            $(".jumbotron").append(checkDiv);
            
            var addLine = $("<hr>");
            addLine.addClass("my-4");
            $(".response").append(addLine);

            var responseText = $("<p>");
            responseText.addClass("response-text");

            if (userSelect == rightAnswer) {
                responseText.text("Correct!");
                $(".response").append(responseText);
            }
            else{
                responseText.text("Incorrect!");
                $(".response").append(responseText);
            }

            // console.log(questions[0].answer);
            // console.log(questions[0].choices.indexOf(questions[0].answer));
            
        });
    });

});

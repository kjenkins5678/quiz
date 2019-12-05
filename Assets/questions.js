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
    },
    {
        title: "This is a test question",
        choices: ["ab", "bc", "cd", "de"],
        answer: "ab"
    }
    ///etc.
    ];

$(document).ready(function() {


    // First Question

    $("#start-btn").on("click", function() {
        var numOfQuestions = questions.length;

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

        numOfQuestions = numOfQuestions - 1

        // Next Questions

            $(".ansBtn").on("click", function() {
                var counter = 1;
                var userSelect = $(this).attr("data-anum");
                var rightAnswer = questions[counter - 1].choices.indexOf(questions[counter - 1].answer);
    
                console.log(numOfQuestions);
    
                // Add new question
                var newQuestion = $(".question").text(questions[counter].title);
                $("#main-display").append(newQuestion);
    
                // Remove old buttons
                $(".row").remove();
                $(".ansBtn").remove();
    
                // Add new buttons
                for (i = 0; i < questions[counter].choices.length; i++){
                    var rowID = "row_" + i;
        
                    // Add row to vertically stack buttons
                    var addDiv = $("<div>");
                    addDiv.addClass("row");
                    addDiv.attr("id",rowID);
                    $(".buttons").append(addDiv);
        
                    // Add button
                    var addBtn = $("<a>");
                    addBtn.addClass("btn btn-primary mt-2 ansBtn");
                    addBtn.text((i+1) + ". " + questions[counter].choices[i]);
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

                counter++
                numOfQuestions = numOfQuestions - 1;

                console.log("the counter is equal to " + counter);
                console.log("the number of questions is equal to " + numOfQuestions);
    
            });

    });

});

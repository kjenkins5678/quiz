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
    var counter = 0;
    var answerCorrect = true;

    function GetQuestion(counter, answerCorrect) {
        if (counter == 0){
            $("h1").remove();
            $(".lead").remove();
            $("#start-btn").remove();

            var addQuestion = $("<h3>");
            addQuestion.addClass("question")
            addQuestion.text(questions[counter].title);
            $("#main-display").append(addQuestion);
    
            // add buttons
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
    
            }


        }
        else{
            alert("counter is greater than 0");
            $(".question").remove();
            $("row").remove();
            $(".ansBtn").remove();

            var addQuestion = $("<h3>");
            addQuestion.addClass("question")
            addQuestion.text(questions[counter].title);
            $("#main-display").append(addQuestion);
    
            // add buttons
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
            }

                //Add response div and text

            var checkDiv = $("<div>");
            checkDiv.addClass("response");
            $(".jumbotron").append(checkDiv);
            
            var addLine = $("<hr>");
            addLine.addClass("my-4");
            $(".response").append(addLine);

            var responseText = $("<p>");
            responseText.addClass("response-text");

            if (answerCorrect == true) {
                responseText.text("Correct!");
                $(".response").append(responseText);
            }
            else{
                responseText.text("Incorrect!");
                $(".response").append(responseText);
            }

        }

        };

    $("#start-btn").on("click", function() {
        console.log("before function: " + counter + " " + answerCorrect);

        GetQuestion(counter, answerCorrect);

        $(".ansBtn").on("click", function(){
            var userSelect = $(this).attr("data-anum");
            var rightAnswer = questions[counter].choices.indexOf(questions[counter].answer);
            console.log("user selection: " + userSelect + " rightAnswer: " + rightAnswer);
            if (userSelect == rightAnswer){
                answerCorrect = true;
            }
            else {
                answerCorrect = false;
            }

            console.log("after function: " + counter + " " + answerCorrect);

        });

        counter++;

    });

});

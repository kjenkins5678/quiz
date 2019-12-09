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

var counter = 0;

$(document).ready(function() {
    var counter = 0;
    var answerCorrect = "";

    function Reset() {
        $(".question").remove();
        $(".row").remove();
        $(".ansBtn").remove();
    };

    function NextQuestion(counter) {
        Reset();

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
    };

    function CheckAnswer(counter, userSelect){
        var rightAnswer = questions[counter].choices.indexOf(questions[counter].answer);

        if (userSelect == rightAnswer){
            answerCorrect = true;
        }
        else {
            answerCorrect = false;
        }
        console.log(answerCorrect);
    };

    $("#start-btn").on("click", function() {
        $("h1").remove();
        $(".lead").remove();
        $("#start-btn").remove();

        NextQuestion(counter);
    });

    $(".jumbotron").on("click", ".ansBtn", function(){
        var userSelect = $(this).attr("data-anum");
        CheckAnswer(counter, userSelect);
        counter++;
        if (counter < questions.length) {
            NextQuestion(counter);
        } else {
            console.log("no more questions");
            Reset();
            $("#main-display").append($("<h3>").text("All Done!"));
            $("#main-display").append($("<p>").text("Your score is: "));
            $("#main-display").append($("<p>").text("Enter Your Initials:"));
        };
    });

});

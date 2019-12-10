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
    var answerCorrect = "";
    // 15 seconds per question
    var timeLeft = 15 * questions.length;
    var countdown = "";
    var timerInterval;

    console.log("countdown value at beginning: " + countdown);


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

    function AllDonePage(){
        Reset();
        $("#main-display").append($("<h3>").text("All Done!"));
        $("#main-display").append($("<p>").text("Your score is: "));
        $("#main-display").append($("<p>").text("Enter Your Initials:"));
    };

    function Timer(timeLeft, countdown) {

        console.log("countdown value at beginning of timer function: " + countdown);
        timerInterval = setInterval(function() {
        
            timeLeft--;
            $("#time").text(" Time: " + timeLeft);
            
            if(timeLeft === 0) {
                clearInterval(timerInterval);
                AllDonePage();
            }

        }, 1000);        
      };

    $("#start-btn").on("click", function() {
        countdown = true;
        Timer(timeLeft, countdown);

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
            countdown = false;
            clearInterval(timerInterval); //timerInterval may be local function
            console.log("countdown value at end of questions: " + countdown);
            console.log("no more questions");
            AllDonePage();
        };
    });

});

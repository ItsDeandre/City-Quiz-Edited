$(".submit-button").click(function() {
    //Store user input in a variable
    let mAnswer = $(".m-answer").val();
    let seasonAnswer = $(".season-answer").val();
    let mSection = "";  
   
    if (mAnswer < 10) {
        mSection = "Let's get more M's";
        
    } else if (mAnswer < 15) {
        mSection = "You have some M's"; 
    }
      
     else if (mAnswer >= 25 && seasonAnswer==="summer") {
            mSection = "You're rich! Come to Los Vagas in the "+ seasonAnswer ;
    }
     else if (mAnswer >= 25 && seasonAnswer==="winter") {
            mSection = "You're rich! Go buy a 5 star hotel in the "+ seasonAnswer ;
    }
    else if (mAnswer >= 25 && seasonAnswer==="fall") {
            mSection = "You're rich! Go buy an entire park in the "+ seasonAnswer ;
    }   
    else {
        mSection = "You dont have plenty M's";
    }

    let message = "<p> " + mSection + " and your favorite season is " + seasonAnswer + ".</p>";

    let counterValueText = $(".counter").text();
    let counterValue = parseInt(counterValueText);
    let incrementedCounterValue = counterValue + 1;
    $(".counter").text(incrementedCounterValue);

    //Displays the output using .append()
    $(".results").append(message);
});
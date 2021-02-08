function doIt(e)
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef; 
    var num4Ref, num5Ref, num6Ref; 
    var type;
    // Variables declarations.
    var num1, num2, num3, answer; 
    var num4, num5, num6;
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    

    num4Ref = document.getElementById("num4");
    num5Ref = document.getElementById("num5");
    num6Ref = document.getElementById("num6");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    num4 = Number(num4Ref.value);
    num5 = Number(num5Ref.value);
    num6 = Number(num6Ref.value);
    
    // Perform addition operation then assignment operation
    if(e.id === "doIt"){
        answer = num1 + num2 + num3;
        answerRef = document.getElementById("answer");
        type = document.getElementById("status");
    }else if(e.id === "doIt2"){
        answer = num4 - num5 - num6;
        answerRef = document.getElementById("answer2");
        type = document.getElementById("status2");
    }
    
    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    //check even or odd
    var type;
    if(answer%2 == 0){
        type.innerText = " (even)"
        type.className = "even";
    }else{
        type.innerText = " (odd)"
        type.className = "odd";
        
    }
}
    
    

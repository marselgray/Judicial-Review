
//questions in a array

var Questions= [
    // store answer with questions for easier retrieval
    {question: 'In District of Columbia v. Heller, the Supreme Court ruled that an individual has the right to protect oneself, that such freedoms granted in the Second Amendment include freedom to protect one’s own life and that the DC’s ban on handguns was unconstitutional.', answer: true },
    {question: 'The Power of Judicial Review is actually not mentioned in Article 3 of the US Constitution. In Marbury v. Madison the Supreme Court declared that the power of “judicial review” to be a power of the Supreme Court.', answer: true },
    {question: 'In Roe v. Wade, the Supreme Court ruled on the matter of medical privacy citing that a person’s medical records were subject to protection under the 4th Amendment and that the State has no claim to citizen\'s personal medical record or treatment.', answer: true },
    {question: 'In both Obergefell v. Hodges and Loving v. Virginia, the Supreme Court ruled that states must honor citizens\' civil rights protected by the 14th Amendment’s “equal protection under the Law” clause. ', answer: true },
    {question: 'In United States v. Wong Kim Ark, the decision came down to one word (jurisdiction\in the 14th Amendment) citing that because he had been born in land under jurisdiction of the United States he was allowed citizenship of the US. ', answer: true },
    {question: 'In New York Times Co. v. Sullivan, the Supreme Court declared that a media company can be held for libel if it 1) publishes false defamatory statements knowing that 2) such statements would cause harm and that 3) the burden of proof rested on the individual harmed.', answer: true },
    {question: 'In National Federation of Independent Business v. Sebelius, the Supreme Court ruled that because Congress had exercised the "Commerce Clause" of Article 1 in crafting the individual mandate to purchase health insurance, it was in fact constitutional.', answer: true },
    {question: 'Citizens United v. Federal Election Commission dealt with the topic of political financing. The Supreme Court ruled that because political spending is a type of free speech protected under the First Amendment, businesses should not be limited to how much they want to spend on political financing', answer: true }, 
    {question: 'In Texas v. White, the Supreme Court ruled that Texas (and the rest of the Confederacy) never actually left the Union during the Civil War and instead were under military rule. Because a state cannot unilaterally secede from the United States such actions are considered legally "null" and that for a state to actually secede from the "indestructible Union, composed of indestructible States" it must have the consent of all other states.', answer: true }, 
    {question: 'In Miranda v. Arizona, the Supreme Court ruled that the Fifth Amendment right against self-incrimination requires law enforcement officials to advise a suspect interrogated in custody of his or her rights to remain silent and to obtain an attorney.', answer: true },
];

var count = 0;
var points = 0; 
var category;
var question;

//displays answer buttons only after clicking start button
function showButtons(){
    document.getElementById('answerT').style.display="";
    document.getElementById('answerF').style.display="";
}

// question rendered 
function catAndQuest() {
    start.style.display = 'none';
    showButtons();

    document.getElementById('points').innerHTML= 'Points: ' + (points);
    document.getElementById('count').innerHTML= 'Question ' + (++count) + ' \/ 10';
    
    currentCategory = Questions.map(function(question) {
        return question.category;
    });

    var questionList= Questions.filter( function (question){
        return question.category === category;
    });

    question = questionList[Math.floor(Math.random() * questionList.length)];
    document.getElementById('quest').innerHTML= question.question;
}

// delete used question out of the copy array
function deleteUsed (){
    if(Questions.length > 1) {
        Questions.splice(Questions.indexOf(question),1);
    } else {
        document.getElementById('answerT').style.display="none";
        document.getElementById('answerF').style.display="none";
        document.getElementById('questions').style.display="none";
        document.getElementById('looser').style.display="";
        document.getElementById('reset').style.display="";
    }
}

//user answered question
function answer(value){
    deleteUsed();
    if(value === question.answer) {
        points++;
        if(points==10){
            document.getElementById('answerT').style.display="none";
            document.getElementById('answerF').style.display="none";
            document.getElementById('questions').style.display="none";
            document.getElementById('winner').style.display="";
            document.getElementById('reset').style.display="";
        }
    }   
    catAndQuest();
}

//restart the game
function restart(){
    document.location.href="";
}


//five minute timer begins on load

window.onload = function () {
    var fiveminutes = 60 * 5,
        display = document.querySelector('#time');
    BeginTime (fiveminutes, display);
}


function BeginTime (duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};














	
	

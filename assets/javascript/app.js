var questionArray = [];
var answerArray = [];
var userAnswer = [];
var timer;
var count = 10;
var correct = wrong = 0;
// Function to create question objects
function Question(question, a, b, c, d, answer) {
    var form = new Object();
    form.question = question;
    form.a = a;
    form.b = b;
    form.c = c;
    form.d = d;
    form.answer = answer;
    answerArray.push(form.answer);
    questionArray.push(form);
}

// Q1
Question(
    'Where was the first battle of the American Revolution?',
    'Concord, Massachusetts',
    'Lexington, Massachusetts',
    'Boston, Massachusetts',
    'White Plains, New York',
    'Lexington, Massachusetts'
)

// Q2
Question(
    'In George Washington\'s famous crossing of the Delaware River, which town did he attack?',
    'Trenton, New Jersey',
    'Philadelphia, Pennsylvania',
    'Newark, New Jersey',
    'Dover, Delaware',
    'Trenton, New Jersey'
)

// Q3
Question(
    'Where was the worst American defeat of the war?',
    'Springfield, New Jersey',
    'New London, Connecticut',
    'Augusta, Georgia',
    'Charleston, South Carolina',
    'Charleston, South Carolina'
)

// Q4
Question(
    'Which battle caused the British to abandon plans to conquer the Carolinas?',
    'Fishing Creek, South Carolina',
    'Cowpens, South Carolina',
    'Guilford Courthouse, North Carolina',
    'Savannah, Georgia',
    'Guilford Courthouse, North Carolina',
)

function populateQuestion(question) {
    $('.question').empty();
    if(questionArray.length === 0){
        $('#timer').text('Game is done!');
        for(var j = 0; j < answerArray.length; j++){
            if(answerArray[j] === userAnswer[j]){
                console.log('Correct: '+answerArray[j]+' and '+userAnswer[j]);
                correct++;
            }
            else{
                console.log('Wrong: '+answerArray[j]+' and '+userAnswer[j]);
                wrong++;
            }
        }
        $('.question').html(
            '<p>Correct Answers: '+correct+'</p>'+
            '<p>Incorrect Answers: '+wrong+'</p>'
        )
    }
    else{
        $('.question').html(
            '<h4>' + question.question + '</h4>' +
            '<p class="choice" data-answer="' + question.a + '">' + question.a + '</p>' +
            '<p class="choice" data-answer="' + question.b + '">' + question.b + '</p>' +
            '<p class="choice" data-answer="' + question.c + '">' + question.c + '</p>' +
            '<p class="choice" data-answer="' + question.d + '">' + question.d + '</p>'
        )
        $('.choice').on('click', function(){
            userAnswer.push($(this).data('answer'));
            stopTimer();
            count = 10;
            questionArray.shift();
            populateQuestion(questionArray[0]);
        });
        startTimer();
    }
}
function startTimer() {
    timer = setInterval(function(){
        $('#timer').text('Time Remaining: '+count);
        if(count === 0){
            stopTimer();
            count = 10;
            userAnswer.push("");
            questionArray.shift();
            $('#timer').text('Times up! Next question!');
            setTimeout(populateQuestion(questionArray[0]), 3000);
        }
        count--;
    }, 1000);
}
function stopTimer(){
    clearInterval(timer);
}

$('.start').on('click', startTimer);
$('.stop').on('click', stopTimer);
$('.clear').on('click', function(){
    count = 10;
});
populateQuestion(questionArray[0]);
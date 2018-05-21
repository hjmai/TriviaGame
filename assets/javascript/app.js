var questionArray = [];
var displayArray = [];
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
    displayArray.push(form);
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

// Q5
Question(
    'Who led the Bostonians at the Boston Tea Party?',
    'Samuel Adams',
    'Willam Prescott',
    'Paul Revere',
    'Benjamin Franklin',
    'Samuel Adams'
)

Question(
    'What European countries did the American Colonies receive crucial aid from?',
    'Germany and Russia',
    'Italy and Greece',
    'Sweden and Norway',
    'Spain and France',
    'Spain and France'
)

Question(
    'What were the Townshend Acts?',
    'Tax\'s on sugar',
    'Dutie\'s on glass, lead, paint, paper, and tea',
    'Laws against murder',
    'Laws against freedom of religion',
    'Dutie\'s on glass, lead, paint, paper, and tea'
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
            '<h2>Correct Answers: '+correct+
            '<h2>Incorrect Answers: '+wrong
        )
        for(var i = 0; i < displayArray.length; i++){
            var questionDiv = $('<div class="questionDisplay col-md-12">');
            var yourAnswer = $('<div class="your-answer col-md-6">');
            var correctAnswer = $('<div class="correct-answer col-md-6">');
            questionDiv.html('<h2>'+displayArray[i].question+'</h2>');
            yourAnswer.html('<p style="font-weight: bold">Your Answer</p><p>'+userAnswer[i]+'</p>');
            correctAnswer.html('<p style="font-weight: bold">Correct Answer</p><p>'+answerArray[i]+'</p>');
            $('.display').append(questionDiv);
            $('.display').append(yourAnswer);
            $('.display').append(correctAnswer);
        }
    }
    else{
        $('.question').html(
            '<h4>' + question.question + '</h4>' +
            '<button type="button" class=" btn btn-info choice" data-answer="' + question.a + '">' + question.a + '</button> ' +
            '<button type="button" class=" btn btn-info choice" data-answer="' + question.b + '">' + question.b + '</button> ' +
            '<button type="button" class=" btn btn-info choice" data-answer="' + question.c + '">' + question.c + '</button> ' +
            '<button type="button" class=" btn btn-info choice" data-answer="' + question.d + '">' + question.d + '</button> '
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
populateQuestion(questionArray[0]);

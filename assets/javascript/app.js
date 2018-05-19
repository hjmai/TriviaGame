var questionArray = [];
// Function to create question objects
function Question(question, a, b, c, d, answer){
    var form = new Object();
    form.question = question;
    form.a = a;
    form.b = b;
    form.c = c;
    form.d = d;
    form.answer = answer;
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

function populateQuestion(question){
    $('.question').empty();
    $('.question').html(
        '<h4>'+question.question+'</h4>'+
        '<p data-answerA="'+question.a+'">'+question.a+'</p>'+
        '<p data-answerB="'+question.b+'">'+question.b+'</p>'+
        '<p data-answerC="'+question.c+'">'+question.c+'</p>'+
        '<p data-answerD="'+question.d+'">'+question.d+'</p>'
    )
}

for(var i = 0; i < questionArray.length; i++){
    var counter = 10;
    var timer = setInterval(function(){
        $('#timer').text('Time remaining: '+counter);
        if (counter === 0) {
            $('#timer').text('Times up!');
            clearInterval(timer);
        }
        counter--;
    }, 1000);
}
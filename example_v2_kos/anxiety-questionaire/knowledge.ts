

var answers = {
    answers: [
        {
            id: "1",
            score: 2
        },
        {
            id: "2",
            score: 3
        },
        {
            id: "3",
            score: 4
        },
        {
            id: "4",
            score: 3
        },
        {
            id: "5",
            score: 2
        },
        {
            id: "6",
            score: 4
        },
        {
            id: "7",
            score: 4
        },
        {
            id: "8",
            score: 2
        },
        {
            id: "9",
            score: 2
        },
        {
            id: "10",
            score: 3
        }
    ]
}

function question()
{
    return JSON.stringify(json)
}

function score(answers)
{
    if(answers.answers.length != 10)
        throw 302

    var answersList = answers.answers
    var rawScore = 0

    answersList.forEach(function(element)
    {
        //odd numbered question
        if(parseInt(element.id) % 2)
            rawScore += (element.score - 1)
        //even numbered question
        else
            rawScore += (5 - element.score)
    })

    return rawScore * 2.5;
}

function interpret(score)
{
    var interpretation = "";
    if(score <= 25)
        interpretation = "worst imaginable"
    else if(score <= 38)
        interpretation = "poor"
    else if(score <= 52)
        interpretation = "Ok/fair"
    else if(score <= 72)
        interpretation = "good"
    else
        interpretation = "excellent"
    
    return {
        interpretation: interpretation
    }
    
}

console.log(question())

console.log(score(answers))

console.log(interpret(88))
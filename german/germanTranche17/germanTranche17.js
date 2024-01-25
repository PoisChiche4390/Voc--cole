var german1 = "früher ≠ heute"
var french1 = "autrefois ≠ aujourd'hui"

var german2 = "das Handy, die Handys"
var french2 = "le portable, les portables"

var german3 = "die Fernseh Serie, die Fernseh Serien"
var french3 = "la série télé, les séries télés"

var german4 = "die Mode"
var french4 = "la mode"

var german5 = "die Medien"
var french5 = "les médias"

var german6 = "der Beruf, die Berufe"
var french6 = "le métier, les métiers"

var german7 = "berühmt werden, er wird berühmt, er wurde berühmt, er ist berühmt geworden"
var french7 = "devenir célèbre (4 formes)"

var german8 = "das Gefühl, die Gefuhle"
var french8 = "le sentiment, les sentiments"

var german9 = "verliebt"
var french9 = "amoureux-euse"

var german10 = "die Erinnerung, die Erinnergungen"
var french10 = "le souvenir, les souvenirs"

var german11 = "sich erinnern, er erinnert sich, er hat sich erinnert"
var french11 = "se rappeler, se souvenir de (3 formes)"

var german12 = "die Kindheit"
var french12 = "l'enfance"

var german13 = "In meiner Kindheit war das ganz anders."
var french13 = "Dans mon enfance, tout cela était différent."

var german14 = "der Kindergarten"
var french14 = "le jardin d'enfant"

var german15 = "sich verändern, er verändert sich, er hat sich verändert"
var french15 = "changer (3 formes)"

var german16 = "Sie hat sich total verändert: neue Frisur, andere Kleidung..."
var french16 = "Elle a totalement changé: nouvelle coiffure, autres habits..."

var german17 = "wählen, er wählt, er hat gewählt"
var french17 = "voter pour (3 formes)"

var german18 = "Früher durften Frauen nicht wählen."
var french18 = "Autrefois, les femmes n'avaient pas le droit de vote."

var german19 = "das Programm, die Programme"
var french19 = "le programme, les programmes"

var german20 = "Im Fernsehen gibt es jetzt zu viele Programme."
var french20 = "Maintenant il y a trop de programmes à la télé."

var german21 = "verpassen, er verpasst, er hat verpasst"
var french21 = "manquer, rater (3 formes)"

var german22 = "Ich habe keine Folge verpasst."
var french22 = "Je n'ai raté aucun épisode."

var german23 = "anstrengend"
var french23 = "fatigant"

var german24 = "Früher wollte ich Boxer werden, aber das ist mir jetzt zu anstrengend."
var french24 = "Autrefois, je voulais être boxeur, mais maintenant je pense que c'est trop fatigant."

window.addEventListener("load", () => {
    questionTranche17.style.display = "none"
    document.getElementById("results").style.display = "none"
    console.log("caca")
})

const duolingoSoundGoodAnswer = new Audio()
duolingoSoundGoodAnswer.src = "/Sounds/DuolingoSoundGoodAnswer.mp3"

const duolingoSoundBadAnswer = new Audio()
duolingoSoundBadAnswer.src = "/Sounds/DuolingoSoundBadAnswer.mp3"

var score = 0

var goodAnswers = 0

var badAnswers = 0

var randomWord = 0

var answer = ""

var wordcheck = 0

var keypressEvent = 1

var modeDefi = 1

function defiBtn() {
    if (modeDefi < 1.5) {
        modeDefi = 2
    } else if (modeDefi > 1.5) {
        modeDefi = 1
    }
}

document.addEventListener("keypress", function(event) {
    if (score <= 10) {
        if (event.key === "Enter" && keypressEvent == 1) {
        confirmBtn()
        } else if(event.key === "Enter" && keypressEvent == 2) {
        continueGoodAnswer()
        continueBadAnswer()
        }
}})

const wordQuestions = document.getElementById("wordQuestions");

wordQuestions.addEventListener('mouseover', () => {
    if (modeDefi > 1.5) {
    }
})

function startBtn() {
    document.getElementById("firstTranche17PageMenu").style.display = "none"
    document.getElementById("questionTranche17").style.display = "flex"
    document.getElementById("helpOver").style.display = "none"
    document.getElementById("goodAnswer").style.display = "none"
    document.getElementById("badAnswer").style.display = "none"
    document.getElementById("submitBtn").style.display = "grid"
    document.getElementById("wordQuestions").style.display = "flex"
    document.getElementById("wordQuestions").style.marginTop = "10vh"


    randomWord = Math.floor((Math.random() * 24) + 1); 
    if (randomWord === 1) {
        document.getElementById("wordQuestions").innerHTML = french1
        wordcheck = 1
    } else if (randomWord === 2) {
        document.getElementById("wordQuestions").innerHTML = french2
        wordcheck = 2
    } else if (randomWord === 3) {
        document.getElementById("wordQuestions").innerHTML = french3
        wordcheck = 3
    } else if (randomWord === 4) {
        document.getElementById("wordQuestions").innerHTML = french4
        wordcheck = 4
    } else if (randomWord === 5) {
        document.getElementById("wordQuestions").innerHTML = french5
        wordcheck = 5
    } else if (randomWord === 6) {
        document.getElementById("wordQuestions").innerHTML = french6
        wordcheck = 6
    } else if (randomWord === 7) {
        document.getElementById("wordQuestions").innerHTML = french7
        wordcheck = 7
    } else if (randomWord === 8) {
        document.getElementById("wordQuestions").innerHTML = french8
        wordcheck = 8
    } else if (randomWord === 9) {
        document.getElementById("wordQuestions").innerHTML = french9
        wordcheck = 9
    } else if (randomWord === 10) {
        document.getElementById("wordQuestions").innerHTML = french10
        wordcheck = 10
    } else if (randomWord === 11) {
        document.getElementById("wordQuestions").innerHTML = french11
        wordcheck = 11
    } else if (randomWord === 12) {
        document.getElementById("wordQuestions").innerHTML = french12
        wordcheck = 12
    } else if (randomWord === 13) {
        document.getElementById("wordQuestions").innerHTML = french13
        wordcheck = 13
    } else if (randomWord === 14) {
        document.getElementById("wordQuestions").innerHTML = french14
        wordcheck = 14
    } else if (randomWord === 15) {
        document.getElementById("wordQuestions").innerHTML = french15
        wordcheck = 15
    } else if (randomWord === 16) {
        document.getElementById("wordQuestions").innerHTML = french16
        wordcheck = 16
    } else if (randomWord === 17) {
        document.getElementById("wordQuestions").innerHTML = french17
        wordcheck = 17
    } else if (randomWord === 18) {
        document.getElementById("wordQuestions").innerHTML = french18
        wordcheck = 18
    } else if (randomWord === 19) {
        document.getElementById("wordQuestions").innerHTML = french19
        wordcheck = 19
    } else if (randomWord === 20) {
        document.getElementById("wordQuestions").innerHTML = french20
        wordcheck = 20
    } else if (randomWord === 21) {
        document.getElementById("wordQuestions").innerHTML = french21
        wordcheck = 21
    } else if (randomWord === 22) {
        document.getElementById("wordQuestions").innerHTML = french22
        wordcheck = 22
    } else if (randomWord === 23) {
        document.getElementById("wordQuestions").innerHTML = french23
        wordcheck = 23
    } else if(randomWord === 24) {
        document.getElementById("wordQuestions").innerHTML = french24
        wordcheck = 24
    }
}

function continueGoodAnswer() {
    if (score < 10) {
        document.getElementById("questionAndValidation").style.display = "grid"
        document.getElementById("goodAnswer").style.display = "none"
        keypressEvent = 1
        randomWord = Math.floor((Math.random() * 24) + 1); 
        if (randomWord === 1) {
            document.getElementById("wordQuestions").innerHTML = french1
            wordcheck = 1
        } else if (randomWord === 2) {
            document.getElementById("wordQuestions").innerHTML = french2
            wordcheck = 2
        } else if (randomWord === 3) {
            document.getElementById("wordQuestions").innerHTML = french3
            wordcheck = 3
        } else if (randomWord === 4) {
            document.getElementById("wordQuestions").innerHTML = french4
            wordcheck = 4
        } else if (randomWord === 5) {
            document.getElementById("wordQuestions").innerHTML = french5
            wordcheck = 5
        } else if (randomWord === 6) {
            document.getElementById("wordQuestions").innerHTML = french6
            wordcheck = 6
        } else if (randomWord === 7) {
            document.getElementById("wordQuestions").innerHTML = french7
            wordcheck = 7
        } else if (randomWord === 8) {
            document.getElementById("wordQuestions").innerHTML = french8
            wordcheck = 8
        } else if (randomWord === 9) {
            document.getElementById("wordQuestions").innerHTML = french9
            wordcheck = 9
        } else if (randomWord === 10) {
            document.getElementById("wordQuestions").innerHTML = french10
            wordcheck = 10
        } else if (randomWord === 11) {
            document.getElementById("wordQuestions").innerHTML = french11
            wordcheck = 11
        } else if (randomWord === 12) {
            document.getElementById("wordQuestions").innerHTML = french12
            wordcheck = 12
        } else if (randomWord === 13) {
            document.getElementById("wordQuestions").innerHTML = french13
            wordcheck = 13
        } else if (randomWord === 14) {
            document.getElementById("wordQuestions").innerHTML = french14
            wordcheck = 14
        } else if (randomWord === 15) {
            document.getElementById("wordQuestions").innerHTML = french15
            wordcheck = 15
        } else if (randomWord === 16) {
            document.getElementById("wordQuestions").innerHTML = french16
            wordcheck = 16
        } else if (randomWord === 17) {
            document.getElementById("wordQuestions").innerHTML = french17
            wordcheck = 17
        } else if (randomWord === 18) {
            document.getElementById("wordQuestions").innerHTML = french18
            wordcheck = 18
        } else if (randomWord === 19) {
            document.getElementById("wordQuestions").innerHTML = french19
            wordcheck = 19
        } else if (randomWord === 20) {
            document.getElementById("wordQuestions").innerHTML = french20
            wordcheck = 20
        } else if (randomWord === 21) {
            document.getElementById("wordQuestions").innerHTML = french21
            wordcheck = 21
        } else if (randomWord === 22) {
            document.getElementById("wordQuestions").innerHTML = french22
            wordcheck = 22
        } else if (randomWord === 23) {
            document.getElementById("wordQuestions").innerHTML = french23
            wordcheck = 23
        } else if(randomWord === 24) {
            document.getElementById("wordQuestions").innerHTML = french24
            wordcheck = 24
        }
    } else {
        document.getElementById("questionTranche17").style.display = "none"
        document.getElementById("results").style.display = "grid"
        document.getElementById("scoreGoodAnswers").innerHTML = "Bonne(s) réponse(s) : " + goodAnswers
        document.getElementById("scoreBadAnswers").innerHTML = "Mauvaise(s) réponse(s) : " + badAnswers
    }
}

function continueBadAnswer() {
    if (score < 10) {
        document.getElementById("questionAndValidation").style.display = "grid"
        document.getElementById("badAnswer").style.display = "none"
        keypressEvent = 1
        randomWord = Math.floor((Math.random() * 24) + 1); 
        if (randomWord === 1) {
        document.getElementById("wordQuestions").innerHTML = french1
        wordcheck = 1
        } else if (randomWord === 2) {
        document.getElementById("wordQuestions").innerHTML = french2
        wordcheck = 2
        } else if (randomWord === 3) {
        document.getElementById("wordQuestions").innerHTML = french3
        wordcheck = 3
        } else if (randomWord === 4) {
        document.getElementById("wordQuestions").innerHTML = french4
        wordcheck = 4
        } else if (randomWord === 5) {
        document.getElementById("wordQuestions").innerHTML = french5
        wordcheck = 5
        } else if (randomWord === 6) {
        document.getElementById("wordQuestions").innerHTML = french6
        wordcheck = 6
        } else if (randomWord === 7) {
        document.getElementById("wordQuestions").innerHTML = french7
        wordcheck = 7
        } else if (randomWord === 8) {
        document.getElementById("wordQuestions").innerHTML = french8
        wordcheck = 8
        } else if (randomWord === 9) {
        document.getElementById("wordQuestions").innerHTML = french9
        wordcheck = 9
        } else if (randomWord === 10) {
        document.getElementById("wordQuestions").innerHTML = french10
        wordcheck = 10
        } else if (randomWord === 11) {
        document.getElementById("wordQuestions").innerHTML = french11
        wordcheck = 11
        } else if (randomWord === 12) {
        document.getElementById("wordQuestions").innerHTML = french12
        wordcheck = 12
        } else if (randomWord === 13) {
        document.getElementById("wordQuestions").innerHTML = french13
        wordcheck = 13
        } else if (randomWord === 14) {
        document.getElementById("wordQuestions").innerHTML = french14
        wordcheck = 14
        } else if (randomWord === 15) {
        document.getElementById("wordQuestions").innerHTML = french15
        wordcheck = 15
        } else if (randomWord === 16) {
        document.getElementById("wordQuestions").innerHTML = french16
        wordcheck = 16
        } else if (randomWord === 17) {
        document.getElementById("wordQuestions").innerHTML = french17
        wordcheck = 17
        } else if (randomWord === 18) {
        document.getElementById("wordQuestions").innerHTML = french18
        wordcheck = 18
        } else if (randomWord === 19) {
        document.getElementById("wordQuestions").innerHTML = french19
        wordcheck = 19
        } else if (randomWord === 20) {
        document.getElementById("wordQuestions").innerHTML = french20
        wordcheck = 20
        } else if (randomWord === 21) {
        document.getElementById("wordQuestions").innerHTML = french21
        wordcheck = 21
        } else if (randomWord === 22) {
        document.getElementById("wordQuestions").innerHTML = french22
        wordcheck = 22
        } else if (randomWord === 23) {
        document.getElementById("wordQuestions").innerHTML = french23
        wordcheck = 23
        } else if(randomWord === 24) {
        document.getElementById("wordQuestions").innerHTML = french24
        wordcheck = 24
        }
    } else {
        document.getElementById("questionTranche17").style.display = "none"
        document.getElementById("results").style.display = "grid"
        document.getElementById("scoreGoodAnswers").innerHTML = "Bonne(s) réponse(s) : " + goodAnswers
        document.getElementById("scoreBadAnswers").innerHTML = "Mauvaise(s) réponse(s) : " + badAnswers
    }
}

function confirmBtn() {
    answer = document.getElementById("questions").value;
    if (answer == eval(`german${randomWord}`) || answer == "caca") {
            duolingoSoundGoodAnswer.play();
            score = score + 1
            goodAnswers = goodAnswers + 1
            document.getElementById("questionAndValidation").style.display = "none"
            document.getElementById("goodAnswer").style.display = "grid"
            document.getElementById("questions").value = "";
            keypressEvent = 2
    } else {
            duolingoSoundBadAnswer.play();
            score = score + 1
            badAnswers = badAnswers + 1
            document.getElementById("correctAnswer").innerHTML = "&#10060 La bonne réponse était : " + eval(`german${randomWord}`)
            document.getElementById("questionAndValidation").style.display = "none"
            document.getElementById("badAnswer").style.display = "grid"
            document.getElementById("questions").value = "";
            keypressEvent = 2
    }
}
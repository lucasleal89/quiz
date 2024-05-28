function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function checkAnswer(inputId, correctAnswer, feedbackId, nextTab) {
    var answer = inputId.startsWith('opcao') ? correctAnswer : document.getElementById(inputId).value;
    var feedback = document.getElementById(feedbackId);

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "Resposta correta!";
        feedback.className = "feedback correct";
        feedback.style.display = "block";
        setTimeout(function() {
            feedback.style.display = "none";
            openTab({ currentTarget: document.querySelector(`.tablinks[onclick="openTab(event, '${nextTab}')"]`) }, nextTab);
        }, 1000);
    } else {
        feedback.textContent = "Resposta errada! Tente novamente.";
        feedback.className = "feedback";
        feedback.style.display = "block";
    }
}

function checkAnswerOption(button, correctAnswer, feedbackId, nextTab) {
    var answer = button.textContent;
    var feedback = document.getElementById(feedbackId);

    if (answer === correctAnswer) {
        feedback.textContent = "Você venceu!";
        feedback.className = "feedback correct";
        feedback.style.display = "block";
        setTimeout(function() {
            feedback.style.display = "none";
            if (nextTab === 'winMessage') {
                document.getElementById('winMessage').style.display = 'block';
            } else {
                openTab({ currentTarget: document.querySelector(`.tablinks[onclick="openTab(event, '${nextTab}')"]`) }, nextTab);
            }
        }, 1000);
    } else {
        feedback.textContent = "Resposta errada! Tente novamente.";
        feedback.className = "feedback";
        feedback.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablinks').click();
});

// Mảng chứa 100 câu hỏi về Kiến thức cơ bản Công nghệ số Cộng đồng
// const questions = [...]; // Đã được chuyển sang file questions.js

const flowers = document.querySelectorAll('.flower');
const quizModal = document.getElementById('quiz-modal');
const questionText = document.getElementById('question-text');
const answerOptionsDiv = document.getElementById('answer-options');
const feedbackDiv = document.getElementById('feedback');
const closeButton = document.querySelector('.close-button');
const exitGameButton = document.getElementById('exit-game-button');

// --- Biến và phần tử cho Bộ đếm thời gian câu hỏi ---
const timerDisplay = document.getElementById('timer-display');
const timerContainer = document.getElementById('timer-container');
let timerInterval = null;
const TIME_LIMIT = 15;
let timeRemaining = TIME_LIMIT;
let autoCloseTimer = null;
const AUTO_CLOSE_DELAY = 3000; // 3000ms = 3 giây
// -------------------------------------------------

// --- Biến và phần tử cho tính năng hấp dẫn ---
const scoreDisplay = document.getElementById('score-display');
const progressDisplay = document.getElementById('progress-display');

let score = 0;
let questionsAnswered = 0;
let correctAnswers = 0;

// Lấy tham chiếu đến các âm thanh hiệu ứng
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const timeoutSound = document.getElementById('timeout-sound');

// --- Biến mới để quản lý câu hỏi chưa hỏi ---
let availableQuestions = [];
const originalTotalQuestions = questions.length;

// ---------------------------------------------

let currentQuestion = null;

const gameContainer = document.querySelector('.game-container');
const footerContainer = document.querySelector('.footer-container');

// --- Biến và hằng số cho timeout không hoạt động ở màn hình chọn hoa ---
let idleFlowerTimer = null;
const IDLE_FLOWER_TIME_LIMIT = 30000; // 30 giây
const IDLE_FLOWER_WARNING_TIME = 5000; // 5 giây
let idleFlowerWarningInterval = null;

// Thêm tham chiếu đến phần tử hiển thị cảnh báo
const idleFlowerWarningText = document.getElementById('idle-flower-warning');

// --- Elements for Introduction Screen ---
const introScreen = document.getElementById('intro-screen');
const startGameButton = document.getElementById('start-game-button');
// --- End Elements for Introduction Screen ---

// --- Element for Play Again Button ---
const playAgainButton = document.getElementById('play-again-button');
// --- End Element for Play Again Button ---

// --- Biến điều khiển âm thanh ---
let isSoundEnabled = false;
// ------------------------------

// Hàm bắt đầu bộ đếm không hoạt động ở màn hình chọn hoa
function startIdleFlowerTimer() {
    // Clear any existing timers
    clearTimeout(idleFlowerTimer);
    clearInterval(idleFlowerWarningInterval);

    const delayBeforeWarning = IDLE_FLOWER_TIME_LIMIT - IDLE_FLOWER_WARNING_TIME;

    idleFlowerTimer = setTimeout(handleIdleFlowerTimeout, delayBeforeWarning);

    idleFlowerWarningText.classList.add('hidden');
    idleFlowerWarningText.style.color = '';
}

// Hàm xử lý khi hết thời gian không hoạt động ở màn hình chọn hoa
function handleIdleFlowerTimeout() {
    let countdown = IDLE_FLOWER_WARNING_TIME / 1000;

    idleFlowerWarningText.textContent = `Bạn không chọn hoa, trò chơi sẽ thoát sau ${countdown} giây...`;
    idleFlowerWarningText.classList.remove('hidden');
    idleFlowerWarningText.style.color = 'red';


    idleFlowerWarningInterval = setInterval(() => {
        countdown--;

        if (countdown > 0) {
            idleFlowerWarningText.textContent = `Bạn không chọn hoa, trò chơi sẽ thoát sau ${countdown} giây...`;
        } else {
            clearInterval(idleFlowerWarningInterval);
            alert("Bạn không chọn hoa, trò chơi đã thoát do không hoạt động.");
            exitGame(false); // Call exitGame without showing the summary alert again
        }
    }, 1000);
}


// Hàm thoát game (Thêm tham số để kiểm soát hiển thị alert tổng kết)
function exitGame(showAlertSummary = true) {
     // Dừng tất cả các timer đang chạy
     clearInterval(timerInterval);
     clearTimeout(autoCloseTimer);
     clearTimeout(idleFlowerTimer);
     clearInterval(idleFlowerWarningInterval);


    backgroundMusic.pause();

    // Ẩn các phần tử game và cảnh báo
    gameContainer.style.display = 'none';
    footerContainer.style.display = 'none';
    quizModal.style.display = 'none';
    idleFlowerWarningText.classList.add('hidden');
    idleFlowerWarningText.style.color = '';

    dimBackground(false); // Bỏ làm mờ nền

    // Hiển thị alert tổng kết chỉ khi showAlertSummary là true
    if (showAlertSummary) {
        alert(`Cảm ơn bạn đã tham gia trò chơi!\nĐiểm cuối cùng của bạn: ${score}\nBạn đã trả lời đúng ${correctAnswers} trên tổng số ${questionsAnswered} câu.`);
    }

    // Show the "Play Again" button and hide others
    playAgainButton.classList.remove('hidden');
    exitGameButton.classList.add('hidden');
    musicToggleButton.classList.add('hidden');

    // Optional: đóng cửa sổ hoặc chuyển hướng
    // window.close();
    // window.location.href = "about:blank";
}


// Hàm hiển thị modal với câu hỏi
function showModal(question) {
     // Khi modal câu hỏi hiện ra, dừng các timer
     clearTimeout(idleFlowerTimer);
     clearInterval(idleFlowerWarningInterval);
     clearInterval(timerInterval);
     clearTimeout(autoCloseTimer);


    currentQuestion = question;
    questionText.textContent = question.question;
    answerOptionsDiv.innerHTML = '';
    feedbackDiv.textContent = '';
    feedbackDiv.className = '';
    exitGameButton.classList.add('hidden'); // Hide buttons when modal is open
    musicToggleButton.classList.add('hidden');
    playAgainButton.classList.add('hidden');


    timeRemaining = TIME_LIMIT;
    timerDisplay.textContent = timeRemaining;
    timerDisplay.className = 'timer-blue';
    timerContainer.style.display = 'block';
    enableAnswerButtons();

    startTimer();

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-button');
        button.addEventListener('click', () => handleAnswer(button, option, question.answer));
        answerOptionsDiv.appendChild(button);
    });

    quizModal.style.display = 'flex';
    dimBackground(true);
}

// Hàm bắt đầu bộ đếm thời gian câu hỏi
function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeRemaining--;

        timerDisplay.textContent = timeRemaining;

        if (timeRemaining <= 5) {
            timerDisplay.className = 'timer-red';
        } else {
            timerDisplay.className = 'timer-blue';
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

// Hàm xử lý khi hết thời gian trả lời câu hỏi
function handleTimeout() {
    feedbackDiv.textContent = "Hết thời gian trả lời! -5 điểm";
    feedbackDiv.className = 'feedback-timeout';
    disableAnswerButtons();
    timerContainer.style.display = 'none';
    highlightAnswerButtons(currentQuestion.answer, null);

    score -= 5;
    if (score < 0) score = 0;
    questionsAnswered++;
    updateGameStatsDisplay();

    if (isSoundEnabled) {
        timeoutSound.play().catch(error => console.log("Lỗi phát âm thanh hết giờ:", error));
    }

    startAutoCloseTimer();
}


// Hàm xử lý khi người dùng trả lời
function handleAnswer(clickedButton, selectedOption, correctAnswer) {
    clearInterval(timerInterval);

    disableAnswerButtons();

    questionsAnswered++;

    if (selectedOption === correctAnswer) {
        feedbackDiv.textContent = "Bạn giỏi lắm, đúng rồi!";
        feedbackDiv.className = 'feedback-correct';
        clickedButton.classList.add('correct-answer');
        score += 10;
        correctAnswers++;
        if (isSoundEnabled) {
            correctSound.play().catch(error => console.log("Lỗi phát âm thanh đúng:", error));
        }

    } else {
        feedbackDiv.textContent = "Sai rồi, Bạn cần tìm hiểu lại nhé!";
        feedbackDiv.className = 'feedback-wrong';
        clickedButton.classList.add('wrong-answer');
        highlightAnswerButtons(correctAnswer, selectedOption);
        if (isSoundEnabled) {
            wrongSound.play().catch(error => console.log("Lỗi phát âm thanh sai:", error));
        }
    }

    updateGameStatsDisplay();
    timerContainer.style.display = 'none';

    startAutoCloseTimer();
}

// Hàm cập nhật hiển thị điểm và tiến độ
function updateGameStatsDisplay() {
    progressDisplay.textContent = `Tiến độ: ${questionsAnswered}/${originalTotalQuestions}, Đúng: ${correctAnswers}`;
    scoreDisplay.textContent = `Điểm của bạn: ${score}`;
}


// Hàm tô màu đáp án đúng và sai
function highlightAnswerButtons(correctAnswer, selectedAnswer) {
    const answerButtons = answerOptionsDiv.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct-answer');
        } else if (button.textContent === selectedAnswer) {
             button.classList.add('wrong-answer');
        }
    });
}


// Hàm vô hiệu hóa tất cả các nút đáp án
function disableAnswerButtons() {
    const answerButtons = answerOptionsDiv.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

// Hàm kích hoạt lại tất cả các nút đáp án và xóa class selected, màu sắc
function enableAnswerButtons() {
     const answerButtons = answerOptionsDiv.querySelectorAll('.answer-button');
     answerButtons.forEach(button => {
         button.disabled = false;
         button.classList.remove('selected', 'correct-answer', 'wrong-answer');
     });
}


// Hàm chọn câu hỏi ngẫu nhiên và hiển thị modal
function showRandomQuestion() {
     // Dừng idle timer when a flower is clicked
     clearTimeout(idleFlowerTimer);
     clearInterval(idleFlowerWarningInterval);
     idleFlowerWarningText.classList.add('hidden');
     idleFlowerWarningText.style.color = '';

     // Dừng any existing question timer or auto-close timer
     clearInterval(timerInterval);
     clearTimeout(autoCloseTimer);


    if (availableQuestions.length === 0) {
        alert("Bạn đã hoàn thành tất cả các câu hỏi!");
        exitGame(true);
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];

    availableQuestions.splice(randomIndex, 1);

    showModal(randomQuestion);
}

// Thêm bộ lắng nghe sự kiện cho mỗi bông hoa
flowers.forEach(flower => {
    flower.addEventListener('click', showRandomQuestion);
});

// Thêm bộ lắng nghe sự kiện cho nút đóng modal (nút X)
closeButton.addEventListener('click', () => {
    // Stop timers when modal is closed
    clearInterval(timerInterval);
    clearTimeout(autoCloseTimer);

    quizModal.style.display = 'none';
    dimBackground(false);
    // Show main buttons and restart idle timer after closing modal manually
    exitGameButton.classList.remove('hidden');
    musicToggleButton.classList.remove('hidden');
    playAgainButton.classList.add('hidden'); // Ensure play again button is hidden
    startIdleFlowerTimer();
});


// Đóng modal khi nhấp ra ngoài modal
window.addEventListener('click', (event) => {
    if (event.target === quizModal) {
         // Stop timers when modal is closed by clicking outside
        clearInterval(timerInterval);
        clearTimeout(autoCloseTimer);

        quizModal.style.display = 'none';
        dimBackground(false);
        // Show main buttons and restart idle timer after closing modal by clicking outside
        exitGameButton.classList.remove('hidden');
        musicToggleButton.classList.remove('hidden');
        playAgainButton.classList.add('hidden'); // Ensure play again button is hidden
        startIdleFlowerTimer();
    }
});

// Hàm bắt đầu đếm ngược để tự động đóng modal
function startAutoCloseTimer() {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = setTimeout(() => {
        quizModal.style.display = 'none';
        dimBackground(false);
         // Show main buttons and restart idle timer after modal closes automatically
        exitGameButton.classList.remove('hidden');
        musicToggleButton.classList.remove('hidden');
        playAgainButton.classList.add('hidden'); // Ensure play again button is hidden
        startIdleFlowerTimer();

    }, AUTO_CLOSE_DELAY);
}


// --- Đoạn code điều khiển nhạc ---
const backgroundMusic = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle-button');

backgroundMusic.pause();
musicToggleButton.textContent = "Bật nhạc";
isSoundEnabled = false; // Khởi tạo trạng thái âm thanh

musicToggleButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log("Autoplay nhạc bị chặn:", error);
        });
        if (!backgroundMusic.paused) {
            musicToggleButton.textContent = "Tắt nhạc";
            isSoundEnabled = true; // Bật âm thanh hiệu ứng
        }
    } else {
        backgroundMusic.pause();
        musicToggleButton.textContent = "Bật nhạc";
        isSoundEnabled = false; // Tắt âm thanh hiệu ứng
        // Dừng tất cả hiệu ứng âm thanh
        correctSound.pause();
        wrongSound.pause();
        timeoutSound.pause();
    }
});

document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
         backgroundMusic.play().catch(error => {
            console.log("Autoplay nhạc bị chặn sau tương tác:", error);
        });
         if (!backgroundMusic.paused) {
             musicToggleButton.textContent = "Tắt nhạc";
             isSoundEnabled = true; // Cập nhật trạng thái âm thanh
         }
    }
}, { once: true });

// Thêm bộ lắng nghe sự kiện cho nút "Thoát trò chơi" cố định
exitGameButton.addEventListener('click', () => {
    exitGame(true); // Call exitGame with show summary true
});


// Hàm làm mờ nền (các phần tử không phải modal)
function dimBackground(isDimming) {
    const elementsToDim = document.querySelectorAll('.game-container, .footer-container');
    elementsToDim.forEach(element => {
        if (isDimming) {
            element.classList.add('dimmed');
        } else {
            element.classList.remove('dimmed');
        }
    });
     // Prevent fixed buttons from being dimmed if they are visible
     if (!musicToggleButton.classList.contains('hidden')) {
        musicToggleButton.classList.remove('dimmed');
     }
      if (!exitGameButton.classList.contains('hidden')) {
         exitGameButton.classList.remove('dimmed');
     }
      if (!playAgainButton.classList.contains('hidden')) {
         playAgainButton.classList.remove('dimmed');
      }
}

// --- Function to Reset Game State ---
function resetGame() {
    score = 0;
    questionsAnswered = 0;
    correctAnswers = 0;
    availableQuestions = [...questions]; // Reset questions

    updateGameStatsDisplay(); // Update display

    // Corrected: Show intro screen and hide game elements and related buttons
    introScreen.style.display = 'flex'; // Show the introduction screen
    gameContainer.style.display = 'none'; // Hide the game container
    footerContainer.style.display = 'none'; // Hide the footer container
    playAgainButton.classList.add('hidden'); // Hide the play again button
    exitGameButton.classList.add('hidden'); // Hide the exit button
    musicToggleButton.classList.add('hidden'); // Hide the music button
    idleFlowerWarningText.classList.add('hidden'); // Hide any idle warning
    idleFlowerWarningText.style.color = '';


    // No need to start idle timer here, it will start when "Bắt đầu trò chơi" is clicked again.
    // clearTimeout(idleFlowerTimer); // Ensure idle timer is stopped
    // clearInterval(idleFlowerWarningInterval); // Ensure idle warning is stopped

}

// --- Khởi tạo khi tải trang ---
window.addEventListener('load', () => {
    availableQuestions = [...questions];
    updateGameStatsDisplay(); // Show initial 0/0 score

    // Initially show introduction screen and hide all game elements and buttons
    introScreen.style.display = 'flex'; // Ensure intro screen is initially visible
    gameContainer.style.display = 'none';
    footerContainer.style.display = 'none';
    exitGameButton.classList.add('hidden');
    musicToggleButton.classList.add('hidden');
    playAgainButton.classList.add('hidden'); // Ensure hidden on load
});


// --- Event listener for the Start Game Button ---
startGameButton.addEventListener('click', () => {
    introScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    footerContainer.style.display = 'block';
    exitGameButton.classList.remove('hidden');
    musicToggleButton.classList.remove('hidden');
    playAgainButton.classList.add('hidden');
    updateGameStatsDisplay(); // Update display to show 0/150
    startIdleFlowerTimer(); // Start idle timer when game starts
});

// --- Event listener for the Play Again Button ---
playAgainButton.addEventListener('click', () => {
    resetGame(); // Call the reset game function
});

// --- Event listener on document to reset idle timer (only in game view) ---
document.addEventListener('click', () => {
    // Only reset timer if quiz modal, intro screen, AND play again button are NOT displayed
    if (quizModal.style.display === 'none' && introScreen.style.display === 'none' && playAgainButton.classList.contains('hidden')) {
        startIdleFlowerTimer();
        idleFlowerWarningText.classList.add('hidden');
        idleFlowerWarningText.style.color = '';
    }
});
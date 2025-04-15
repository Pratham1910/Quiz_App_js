

# 🧠 Simple JavaScript Quiz App

This is a basic multiple-choice quiz app built using **vanilla JavaScript**, HTML, and CSS. The quiz presents users with one question at a time, allows them to select an answer, and provides immediate feedback. At the end, it displays the final score.

## 🧩 Features

- Dynamic question and answer rendering
- Score calculation
- Immediate feedback with color indication (correct/incorrect)
- Reset and replay functionality
- Fully client-side with no dependencies

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## 🚀 How It Works

- The quiz consists of an array of question objects.
- Each object contains:
  - A `question` string
  - An array of `answers`, where each answer has:
    - `text`: the display text
    - `correct`: a boolean indicating whether it's the right answer

### Sample Question Structure

```javascript
{
  question: "Which is the largest Animal in the world?",
  answers: [
    { text: "Shark", correct: false },
    { text: "Blue Whale", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Elephant", correct: false }
  ]
}
```

## 🧠 Logic Flow

1. **Start Quiz**: Initializes the quiz and displays the first question.
2. **Show Question**: Renders the current question and possible answers.
3. **Select Answer**: Highlights correct/incorrect choices and updates score.
4. **Next**: Proceeds to the next question or shows final score.
5. **Play Again**: Resets the quiz to the beginning.

## 🧪 Example Console Logs

The app uses console logs to help trace the process:
- Logs the current question and its answers.
- Logs user selections and correctness.

## ✅ How to Run

1. Save the script in an `index.html` file with an associated `<script>` tag.
2. Ensure your HTML contains the following structure:
```html
<div id="quiz">
  <div id="question"></div>
  <div id="ansBtns"></div>
  <button id="next">Next</button>
</div>
```
3. Open in your browser to play the quiz.

## 📦 Future Improvements

- Add a progress bar
- Store scores in localStorage
- Add timer for each question
- Style using modern CSS frameworks



function calculateScore() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  const correctAnswers = {
      q1: 'B',
      q2: 'C',
      q3: 'B',
      q4: 'A',
      q5: 'C'
  };
  
  let score = 0;
  const formData = new FormData(form);
  formData.forEach((value, key) => {
      if (value === correctAnswers[key]) {
          score++;
      }
  });
  
  resultDiv.innerHTML = `Your score is ${score} out of 5`;
}

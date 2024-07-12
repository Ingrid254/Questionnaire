function calculateScore() {
    console.log("Calculating score...");

    const form = document.getElementById('quiz-form');
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
        console.log(`Question: ${key}, Selected Answer: ${value}`);
        if (value === correctAnswers[key]) {
            score++;
        }
    });
    
    const result = `Your score is ${score} out of 5`;
    console.log(result);
    
    // Open a new window and write the result
    const resultWindow = window.open('', '_blank', 'width=400,height=200');
    resultWindow.document.write(`
        <html>
        <head>
            <title>Quiz Result</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                .result-container {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="result-container">
                <h1>Quiz Result</h1>
                <p>${result}</p>
            </div>
        </body>
        </html>
    `);
    
    // Ensure content is written before closing the document
    resultWindow.document.close();
}

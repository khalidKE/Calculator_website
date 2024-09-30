
        let display = document.getElementById('display');
        let currentInput = '';
        let operatorPressed = false;

        function appendNumber(number) {
            if (display.innerText === '0' || operatorPressed) {
                display.innerText = number;
                operatorPressed = false;
            } else {
                display.innerText += number;
            }
            currentInput += number;
        }

        function clearDisplay() {
            display.innerText = '0';
            currentInput = '';
        }

        function calculateResult() {
            try {
                display.innerText = eval(currentInput);
                currentInput = display.innerText;
            } catch (error) {
                display.innerText = 'Error';
                currentInput = '';
            }
        }
    
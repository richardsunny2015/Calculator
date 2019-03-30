/* eslint-disable radix */
/* eslint-disable complexity */
const buttons = document.querySelector('.buttons')
const output = document.querySelector('.output')
let num = 0
let operation = 0

buttons.addEventListener('click', evt => {
    if (evt.target.tagName === 'BUTTON') {
        const value = evt.target.innerText
        const charCode = value.charCodeAt(0)
        if (!isNaN(value)) {
            if (output.innerText === '0') {
                output.innerText = value
            } else {
                output.innerText += value
            }
        } else if (charCode === 8592) {
            output.innerText = output.innerText.slice(0, output.innerText.length - 1) || '0'
        } else if (charCode === 67) {
            output.innerText = '0'
            operation = 0
            num = 0
        } else if (charCode === 247 || charCode === 120 || charCode === 45 || charCode === 43) {
            const currentNum = parseInt(output.innerText)
            if (!num) {
                num = currentNum
            } else {
                num = calculate(num, currentNum, operation)
            }
            operation = charCode
            output.innerText = 0
        } else {
            const currentNum = parseInt(output.innerText)
            if (operation > 0) {
                output.innerText = calculate(num, currentNum, operation)
                operation = num = 0
            }
        }
    }
})


function calculate(fst, snd, calc) {
    switch (calc) {
        case 247:
            return fst / snd
        case 120:
            return fst * snd
        case 45:
            return fst - snd
        default:
            return fst + snd
    }
}

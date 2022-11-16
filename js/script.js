// dom

const convertBtn = document.querySelector('.btn__convert')
const resetBtn = document.querySelector('.btn__reset')
const revertBtn = document.querySelector('.btn__revert')
const tempInput = document.querySelector('.temp__input')
const tempOutput = document.querySelector('.content')
const fahrBtn = document.querySelector('#fahr')
const celBtn = document.querySelector('#c')

// variables
let fahr
let cel

if(fahrBtn.classList.contains('no-display')){
    fahr = 0
    cel = 1
}else if (celBtn.classList.contains('no-display')){
    cel = 0
    fahr = 1
}

let fahrenheit
let celsius
// functions
const revert = () => {
	if (fahrBtn.classList.contains('no-display')) {
		fahrBtn.classList.remove('no-display')
		celBtn.classList.add('no-display')
        tempOutput.textContent = ''
		fahr = 1
	} else if (celBtn.classList.contains('no-display')) {
		celBtn.classList.remove('no-display')
		fahrBtn.classList.add('no-display')
        tempOutput.textContent = ''
		cel = 1
	}
}
const convert = () => {
	if (fahrBtn.classList.contains('no-display')) {
        celsius = (tempInput.value -32) / 1.8
        tempOutput.textContent = `${celsius.toFixed(2)}`
        cel = 1
	} else if (celBtn.classList.contains('no-display')){
        fahrenheit = tempInput.value * 1.8 + 32
		tempOutput.textContent = `${fahrenheit}`
		fahr = 1
    }}
const reset = () => {
    tempInput.value = ''
    tempOutput.textContent = ''
}


// listeners
revertBtn.addEventListener('click', revert)
convertBtn.addEventListener('click', convert)
resetBtn.addEventListener('click', reset)

// const inputs = document.querySelectorAll('input');
// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('change', changeContent);
// }

// function changeContent() {
//     const par = document.querySelectorAll(".message");
//     for (let i = 0; i < par.length; i++) {
//         par[i].style.display = "block";
//     }
// }

const regexes = [
    /^(?=^[A-Z])(?=.*\W$|.*[0-9]$)[!-~]{5,12}$/,
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)[!-~]{12,13}$/,
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)[!-~]{14,}/,
    /(?=.*[A-Z]|[a-z])(?=^(?:(?!\W|[0-9]|_).)*$).*$/,
    /^(?=^[0-9])(?=^.[0-9])(?=^..[0-9])(?=^...[0-9])(?=^....[a-zA-Z])(?=^.....[a-zA-Z])[!-~]{6}$/
]
const allIsGood = true;
const signUpForm = document.querySelector('form');
signUpForm.addEventListener('submit', submission);
function submission() {
    const theForm = document.querySelector('form');
    const theFormData = theForm.elements;
    let values = "";
    values += theFormData.namedItem('User ID').name + ": " + regexes[0].test(theForm.elements.namedItem('User ID')) + "\n";
    if (theForm.elements.namedItem('Password') != theForm.elements.namedItem('Repeat Password')) {
        values += theForm.elements.namedItem('Password').name + ": " + "false" + "\n";
    }
    for (let i = 0; i < theFormData.length-1; i++) {
        if (!regexes[i].test(theFormData[i])) {
            makeWrong(theFormData[i]);
            allIsGood = false;
        }
        else {
            makeright(theFormData[i]);
        }
        values += theForm.elements[i].name + ": " + theForm.elements[i].value + "\n";
    }
    if (allIsGood) {
        alert(values);
    }
}

function makeWrong(formElement) {

}

function makeright(formElement) {

}
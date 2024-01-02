console.log('Script loaded');


const subject = document.getElementById('subject');
const subjectError = document.querySelector('.subject-error');
const subjectPreview =document.querySelector('.subject-preview');
const form = document.querySelector('form');
const submitButton = document.querySelector('button');
const inputs = document.querySelectorAll('.input');
const email = document.querySelector('#sender');
const emailError = document.querySelector(".email-error");
const name = document.querySelector('#name');
const nameError = document.querySelector('.input-error');
const mailContent = document.querySelector('#message');
const mailContentError = document.querySelector('.message-error');
const errorIcon = `<img class="error-icon" src="../../static/icons/circle-exclamation-solid.svg" alt="h" width=16 height=16>`;
const successIcon = `<img class="success-icon" src="../../static/icons/circle-check-solid.svg" alt="h" width=16 height=16>`;
const sendButton = document.querySelector('.send-button');
const sendIcon = document.querySelector('.send-icon');

// while hovering on the button the send icon moves diagonally
sendButton.addEventListener('mouseover', ()=>{
    sendIcon.classList.add('moving-animation');
})

sendButton.addEventListener('mouseout', ()=>{
    sendIcon.classList.remove('moving-animation');
})
// feature detection let the code only run if the form element exists on the page
// used the same script file on the sent.php file
if(form){
    // get form data values with the input eventlisteners
    subject.addEventListener('input',() => {
        // console.log(emailSubject.value);
        if(subject < 0){
            subjectPreview.innerHTML = "Nieuwe Bericht";
        }else{
            subjectPreview.innerHTML = `Onderwerp: ${subject.value}`;
        }

        if(subject.validity.valid){
            subjectError.innerHTML = `${successIcon}`;
            subjectError.classList.remove('error');
        }else{
            showSubjectError()
        }
    });

    name.addEventListener('input', ()=>{
        const nameValue = name.value;
        console.log(nameValue);
        if(name.validity.valid){
            nameError.innerHTML =  `${successIcon}`;
            nameError.classList.remove('error');
        }else{
            showNameError()
        }
    })

    email.addEventListener('input' , ()=>{
        if(email.validity.valid){
            emailError.innerHTML = `${successIcon}`;
            emailError.classList.remove('error');
        }else{
            showEmailError()
        }
    });

    mailContent.addEventListener('input' ,()=>{
        if(mailContent.validity.valid){
            mailContentError.innerHTML = `${successIcon}`;
            mailContentError.classList.remove('error');
        }else{
            showEmailContentError()
        }
    })

// Show error if the user do not fill the form with the correct data
    form.addEventListener('submit', (e)=>{
        if(!subject.validity.valid){
            showSubjectError()
            e.preventDefault()
        }
        if(!name.validity.valid){
            showNameError();
            e.preventDefault();
        }
        if(!email.validity.valid){
            showEmailError()
            e.preventDefault();
        }
        if(!mailContent.validity.valid){
            showEmailContentError();
            e.preventDefault();
        }
    })

    function showSubjectError(){
        if(subject.validity.valueMissing){
            subjectError.innerHTML = `${errorIcon} Voer een onderwerp in!`;
            subjectError.classList.add('error');
        }else if(subject.validity.tooShort){
            subjectError.innerHTML = `${errorIcon} Het onderwerp moet minimaal ${subject.minLength} tekens bevatten!`;
            subjectError.classList.add('error');
        }
    }
    function showNameError() {
        if(name.validity.valueMissing) {
            nameError.innerHTML = ` ${errorIcon} Voer uw naam in!`;
            nameError.classList.add('error');
        }else if(name.validity.tooShort) {
            nameError.innerHTML = `${errorIcon} Uw naam moet minimaal ${name.minLength} tekens bevatten!`;
            nameError.classList.add('error');
        }
    }
    function showEmailError(){
        if(email.validity.valueMissing) {
            emailError.innerHTML = ` ${errorIcon} Voer uw email in!`;
            emailError.classList.add('error');
        }else if(email.validity.typeMismatch){
            emailError.innerHTML = ` ${errorIcon} Voer een geldig email adres in!`;
            emailError.classList.add('error');
        }
    }
    function showEmailContentError(){
        if(mailContent.validity.valueMissing){
            mailContentError.innerHTML = `${errorIcon} Je moet nog een bericht schrijven!`
            mailContentError.classList.add('error');
        }
    }

    submitButton.addEventListener('click',()=>{
        submitEmail()
    });

// send the form with ajax to php
    function submitEmail(){
        let fd = new FormData(form);
        fetch('sent.php', {
            method: "post",
            body: fd,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error =>{
                console.log(error)
            })
    }
// add class while user is typing
    inputs.forEach((input) => {
        input.addEventListener('keyup', ()=>{
            if(input.value !== "" ){
                input.classList.add('typing');
            }else {
                input.classList.remove('typing');
            }
        })
    })
}



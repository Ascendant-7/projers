const form = document.querySelector("#signup-form");
const passLabel = document.querySelector("#password-label");
const confirmLabel = document.querySelector("#confirm-label");
const emailLabel = document.querySelector("#email-label");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirm-password");
const email = document.querySelector("#email");
const passwordMismatchError = document.querySelector("#password-mismatch-error");
const emailAlreadyExistsError = document.querySelector("#email-already-exists-error");

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const givenEmail = params.get('email');
    if (givenEmail) email.value = givenEmail;
});

form.addEventListener('submit', (e) => {
        e.preventDefault();
    if (password.value !== confirmation.value) {
        passwordMismatchError.classList.remove('hidden');
        passLabel.classList.add('text-red-500');
        confirmLabel.classList.add('text-red-500');
        password.classList.add('border-red-500');
        confirmation.classList.add('border-red-500');
        return;
    }
    accountList = JSON.parse(localStorage.getItem('accounts')) || [];
    const newEmail = form.email.value.toLowerCase();
    const emailExists = accountList.some(account => account.email.toLowerCase() === newEmail);
    if (emailExists) {
        emailAlreadyExistsError.classList.remove('hidden');
        emailLabel.classList.add('text-red-500');
        email.classList.add('border-red-500');
        return;
    }
    const data = {
        uid: accountList.length+1,
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        password: form.password.value
    };
    accountList.push(data);
    localStorage.setItem('accounts', JSON.stringify(accountList));
    window.location.href = '/login.html';
});

function isMatched() {
    if (confirmation.value === password.value) {
        passwordMismatchError.classList.add('hidden');
        passLabel.classList.remove('text-red-500');
        confirmLabel.classList.remove('text-red-500');
        password.classList.remove('border-red-500');
        confirmation.classList.remove('border-red-500');
    }
}
password.addEventListener('input', isMatched);
confirmation.addEventListener('input', isMatched);

email.addEventListener('input', () => {
    emailAlreadyExistsError.classList.add('hidden');
    emailLabel.classList.remove('text-red-500');
    email.classList.remove('border-red-500');
});
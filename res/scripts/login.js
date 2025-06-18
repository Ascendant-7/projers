const form = document.querySelector("#login-form");
const emailLabel = document.querySelector("#email-label");
const passLabel = document.querySelector("#password-label");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const error = document.querySelector("#incorrect-email-pass-error");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = email.value.toLowerCase();
    const accountList = JSON.parse(localStorage.getItem('accounts')) || [];
    const accountExists = accountList.some(
        account => account.email.toLowerCase() === loginEmail &&
        account.password === password.value
    );
    if (!accountExists) {
        emailLabel.classList.add('text-red-500');
        passLabel.classList.add('text-red-500');
        email.classList.add('border-red-500');
        password.classList.add('border-red-500');
        error.classList.remove('hidden');
        return;
    }
    window.location.href = '/user/home.html';
});

function resetField() {
    emailLabel.classList.remove('text-red-500');
    passLabel.classList.remove('text-red-500');
    email.classList.remove('border-red-500');
    password.classList.remove('border-red-500');
    error.classList.add('hidden');
}

email.addEventListener('input', resetField);
password.addEventListener('input', resetField);
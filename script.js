const hamMenu = document.getElementById("ham-menu");
const signUpForm = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const zipInput = document.getElementById("zip-code");
const submitSignupBtn = document.getElementById("signup-btn");
const scriptURL =
    // "https://script.google.com/macros/s/AKfycbycBWwzvPHaqhoNdxWA3FRt-z9YTEyiic-zvIpkX64RVgP_hpFrAl4qiFq95sc5Oaiesw/exec";
    "https://script.google.com/macros/s/AKfycbxqV5OmYHi0yzrTysnlM0yMlK4PgCEY3e3TYXcBznJO/dev";

const showMobileMenu = () => {
    // TODO
    console.log("mobile menu clicked"); // test
};

const clearSignUpForm = () => {
    emailInput.value = "";
    phoneInput.value = "";
    zipInput.value = "";
    submitSignupBtn.textContent = "Sign Up";
};

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitSignupBtn.disabled = true;
    submitSignupBtn.textContent = "Submitting...";
    let requestBody = new FormData(signUpForm);
    fetch(scriptURL, { method: "POST", body: requestBody })
        .then((response) => {
            alert("Success!", response);
        })
        .catch((error) => {
            alert("Error:", error.message);
        });
    submitSignupBtn.disabled = false;
    clearSignUpForm();
});

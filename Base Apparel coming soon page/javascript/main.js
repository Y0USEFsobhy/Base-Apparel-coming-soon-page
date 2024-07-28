const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("input");
const errorIcon = document.getElementById("errorIcon");
const errorMessage = document.getElementById("errorMessage");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(input.value)) {
        errorIcon.style.display = "block";
        errorMessage.textContent = "Please provide a valid email";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
        input.style.borderColor = "red";
    } else if(emailRegex.test(input.value)) {
        errorIcon.style.display = "none";
        input.style.borderColor = "";
        errorMessage.textContent = "The Email has been sent";
        errorMessage.style.color = "green";
        errorMessage.style.display = "block";
    }else{
        e.preventDefault();
    }
});








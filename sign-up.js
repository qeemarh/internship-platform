function reg() {
    const selectedOption = document.getElementById("select").value;

    if (selectedOption === "Fellow") {
        window.location.href = "fellow-signup.html";
    } else if (selectedOption === "Organization") {
        window.location.href = "organization-signup.html";
    } else {
        showPopup("Please select a valid user type.");
    }
}

function showPopup(message) {
    const popup = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;
    popup.classList.remove("hidden");

    // Set timeout to automatically close the popup after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 3000)
}

function closePopup() {
    const popup = document.getElementById("popupMessage");
    popup.classList.add("hidden");
}
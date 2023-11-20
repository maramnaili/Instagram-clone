
document.addEventListener("DOMContentLoaded", function() {
    var followButton = document.querySelector(".b1");

    if (followButton) {
        followButton.addEventListener("click", function() {
            if (followButton.textContent === "Follow") {
                followButton.textContent = "Followed";
            } else {
                followButton.textContent = "Follow";
            }

        });
    }

});


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded!");

    var contactButton = document.getElementById("contact-button");

    if (contactButton) {
        contactButton.addEventListener("click", function() {
            window.location.href = "contact.html";
        });
    }
});



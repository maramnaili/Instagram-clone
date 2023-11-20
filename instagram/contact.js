document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact page loaded!");

    var sendButton = document.getElementById("send-button");

    if (sendButton) {
        sendButton.addEventListener("click", function() {
            var messageInput = document.querySelector("textarea");
            var message = messageInput.value;

            if (message.trim() !== "") {
                console.log("Message sent:", message);
                messageInput.value = "";
            } else {
                console.log("Error: Message cannot be empty.");
            }
        });
    }
});

let video_out = document.getElementById("vid-box");

function login(form) {
    let phone = window.phone = PHONE({
        number: form.username.value || "Anonymous", // listen on username line else Anonymous
        publish_key: 'pub-c-c5f76359-070f-4a38-8c5f-b579ba6b78e9',
        subscribe_key: 'sub-c-97f5ec7e-e73b-11e7-9723-66707ad51ffc',
        ssl: true,
    });
    phone.ready(function () {
        form.username.style.background = "#55ff5b";
    });
    phone.receive(function (session) {
        session.connected(function (session) {
            video_out.appendChild(session.video);
        });
        session.ended(function (session) {
            video_out.innerHTML = '';
        });
    });

    return false;   // So the form does not submit.
}

function makeCall(form) {
    if (!window.phone) alert("Login First!");
    else phone.dial(form.number.value);
    return false;
}

function closeCall() {
    window.phone.hangup()
}
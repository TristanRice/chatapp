$(function( ) {
    const SELF_URL = "http://localhost:3000";
    const CHANNEL = "lmao";
    const socket = io.connect(SELF_URL);
    socket.emit("calibrate", CHANNEL);

    let app = new Vue({
        el: "#app",
        data: {
            message: "Hello Vue!",
            members: [],
            all_messages: [],
            input_message: ""
        },

        methods: {
            send_message: function( ) {
                if (!this.message || !/.{6,250}/.test(this.message))
                    //just do very stringent checks, real ones begin in the backend
                    return;

                //send the message
                socket.emit("message", this.message, "Tristan", CHANNEL);
            }
        }
    });

    socket.on("message", function(message) {
        if (!message.channel===CHANNEL)
            //TODO: CHANGE THIS!!
            return;

        all_messages.push(message);
    });

    $.ajax({
        url: "/api/channel/lmao/members",
        success: function(html) {
            app.members = html.members
        }
    });

    app.message = "Welcome to my chatroom";
});

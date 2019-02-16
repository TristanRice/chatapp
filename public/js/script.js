$(function( ) {
    let app = new Vue({
        el: "#app",
        data: {
            message: "Hello Vue!",
            members: []
        }
    });

    $.ajax({
        url: "/api/channel/lmao/members",
        success: function(html) {
            app.members = html.members
        }
    })
    app.message = "aa"
});

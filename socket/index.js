const server  = require("http").createServer( );
    , io      = require("socket.io")(server);
    , Channel = require("../models/channel")

io.on("connection", client => {
	client.on("calibrate", function(channel) {
		if (!channel)
			return;

		cilent.join(channel);
	});

	client.on("send", function(message, sender, channel) {
		io.sockets.in(channel).emit("message", {
			sender: sender,
			content: message
		});
	});
});
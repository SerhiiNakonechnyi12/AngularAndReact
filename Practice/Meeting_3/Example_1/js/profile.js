const Timeline = require("./timeline");
let user = {
    name: "Serhii N",
    messages: ["Hello world!", "I'm a NodeJS programmer!", "And .NET programmer!"]
}
let timeline = new Timeline(user);
timeline.setHeader();
timeline.setTimeline();


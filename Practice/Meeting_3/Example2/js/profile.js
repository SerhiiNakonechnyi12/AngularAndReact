import "../css/style.css"
const Timeline = require("./timeline");
let user = {
    name: "Serhii Ruban",
    messages: ["Hello world!", "I'm a NodeJS programmer!", "And .NET programmer too!!!"]
}
let timeline = new Timeline(user);
timeline.setHeader();
timeline.setTimeline();
const $ = require("jquery");
const _ = require("underscore");
function Timeline(user){
    this.setHeader = function(){
        $("#timelinehead").text(`${user.name} Timeline`);
    }
    this.setTimeline = function(){
        _.each(user.messages, (msg)=>{
        let html = `<li><div class='timeline-elem'>${msg}<h4></h4></div></li>`;
        $(".timeline").append(html);
        });
    }
}
module.exports = Timeline;
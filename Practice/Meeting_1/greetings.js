let currentDate = new Date();
module.exports.date = currentDate;
module.exports.greetings = function(name){
    let hours = currentDate.getHours();
    if (hours > 15) {
        console.log(`Добрый вечер, ${name}`);
    }
    else if(hour > 11) {
        console.log(`Добрый день, ${name}`);
    }
    else {
        console.log(`Доброе утро, ${name}`);
    }
}
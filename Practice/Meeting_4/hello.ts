import { userInfo } from "os";

var hello: string = "Hello world of TS!";
var x : number = 12 ;
var a;
a = 17;
console.log(hello);
console.log(a);
a = "Typescript is aaawqqqe";
console.log(a);
let numbers: number[] = [2, 6, 7];
console.log(numbers[1]);
let colors : Array<string> = ["red", "blue", "green"];
console.log(colors[2]);
colors.push("purple");
console.log(colors.length);

var Season;
(function (Seasons) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
;
var season = Season.Autumn;
console.log("Now the season is: " + season);
console.log("But we all wants hot: " + season[3]);


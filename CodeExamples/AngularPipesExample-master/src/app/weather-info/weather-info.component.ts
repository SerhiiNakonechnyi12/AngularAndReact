import {Component, OnInit} from "@angular/core"
@Component({
    selector: "app-weather-info",
    //template: "<div>Сегодня: {{temperature}} C</div>",
    templateUrl: "./weather-info.component.html",
    styles: ["div{color: red}"]
})
export class WeatherInfoComponent implements OnInit{
    temperature: number;
    constructor(){}
    ngOnInit(): void {
        this.temperature = 27;
    }

}
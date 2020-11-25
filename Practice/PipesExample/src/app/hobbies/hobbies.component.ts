import { Component, OnInit } from '@angular/core';
import { Hobbie } from '../Hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  hobbie: Hobbie;
  hobbie_2: Hobbie;
  hobbie_3: Hobbie;
  constructor() {}

  ngOnInit(): void {
    this.hobbie = new Hobbie();
    this.hobbie.title = 'Board games';
    this.hobbie.description = `
      Warhammer 40,000 (неофиц. Warhammer 40K, 
      WH40K) — настольная игра-варгейм, разработанная и издаваемая 
      британской компанией Games Workshop, действие игры происходит 
      в мрачной технофэнтезийной вымышленной вселенной.
      `;

    this.hobbie_2 = new Hobbie();
    this.hobbie_2.title = 'Aquarium fish';
    this.hobbie_2.description = `
      Аква́риумные рыбы — собирательное название таксономически 
      разнородных рыб, которых содержат и разводят в аквариумах с 
      декоративной целью.
      Первые упоминания об искусственном разведении рыб в Китае 
      датированы 1500 годом до н. э. Для большей части аквариумных рыб 
      характерны яркая декоративная окраска, причудливые формы тела 
      и небольшие размеры.
      `;

    this.hobbie_3 = new Hobbie();
    this.hobbie_3.title = 'Cats';
    this.hobbie_3.description = `
    В настоящее время в мире насчитывается около 600 млн домашних кошек[8], выведено около 
    200 пород, от длинношёрстных (персидская кошка) до лишённых шерсти 
    (сфинксы), признанных и зарегистрированных различными 
    фелинологическими организациями.
    На протяжении 10 000 лет кошки ценятся человеком, в том числе за 
    способность охотиться на грызунов и других домашних вредителей.
      `;
  }

}

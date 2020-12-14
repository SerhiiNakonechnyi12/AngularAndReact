import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-style-example',
  templateUrl: './style-example.component.html',
  styleUrls: ['./style-example.component.css']
})
export class StyleExampleComponent implements OnInit {
  header: string;
  text: string;

  @Output() fontChanged: EventEmitter<number> = new EventEmitter<number>();
  private _size: number;

  public get size():number{
    return this._size;
  }

  public set size(val: number){
    this._size = val;
    this.fontChanged.emit(this._size);
    //this.stylesDescription.fontSize = this.size+"px";
  }
  styles = {
    verdanaFont: true,
    segoeFont: true
  }

  stylesDescription= {color: 'magenta', fontSize: '16px'};
  constructor() { }

  ngOnInit(): void {
    this.header = "Angular ngStyle directive";
    this.text = "Angular - очень популярный фреймворк, позволяющий собирать приложение из компонентов";
    this.size = 14;
    this.fontChanged.subscribe((arg1)=>{
      this.stylesDescription.fontSize = arg1+"px";
    })
  }

  toggle(){
    this.styles.segoeFont=!this.styles.segoeFont;
  }

  up(){
    this.size++;   
  }

  down(){
    this.size--;
    //this.stylesDescription.fontSize = this.size+"px";
  }

}

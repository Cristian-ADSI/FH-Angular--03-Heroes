import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public superName: string = 'Ironman';
  public realName: string = 'Tony Stark';
  public age: number = 45;

  get capitalizeName(): string {
    return this.superName.toUpperCase()
  }

  getHeroDescriptipn(): string {
    return `${this.realName} - ${this.age}`;
  }
  changeName():void {
    this.superName = 'Spiderman'
    this.realName = 'Peter Parker'
  }

  changeAge():void {
    this.age = 25
  }


}

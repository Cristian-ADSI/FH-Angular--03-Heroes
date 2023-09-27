import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroList: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk']
  public deletedHero?:string  = ''

  public deleteLastHero(): void {
    this.deletedHero = this.heroList.pop()
  }
}

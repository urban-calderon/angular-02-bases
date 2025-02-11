import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listNamesHeroes: string[] = ['Batman', 'Iroman', 'Hulk', 'Spiderman'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.listNamesHeroes.pop();
  }
}

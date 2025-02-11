import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      "id": uuid(),
      "name": "Iron Man",
      "power": 80000
    },
    {
      "id": uuid(),
      "name": "Capitán América",
      "power": 24000
    },
    {
      "id": uuid(),
      "name": "Thor",
      "power": 30000
    },
    {
      "id": uuid(),
      "name": "Spider-Man",
      "power": 211111
    },
    {
      "id": uuid(),
      "name": "Black Widow",
      "power": 200
    }
  ];

  public addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter( index: number ): void {
  //   this.characters.splice(index, 1);
  // }
  public deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

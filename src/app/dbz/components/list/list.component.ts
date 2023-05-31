import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter()

  @Output()
  public deleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index);
  // }

  deleteCharacterById(id?: string): void {
    if (!id) return;
    this.deleteId.emit(id);
  }
}

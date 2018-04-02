import { Component, Input } from '@angular/core';
import { GameService, Cell } from '../../game.service';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input()
  state: string;
}

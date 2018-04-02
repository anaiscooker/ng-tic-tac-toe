import { Component, Input} from '@angular/core';
import { GameService, Player, Board } from '../../game.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [GameService]
})
export class BoardComponent {
  @Input()
  board: Board;

  constructor(public gs: GameService){
  }
  
}
import { Component, Input, OnInit} from '@angular/core';
import { GameService, Player, Board, Cell } from '../../game.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit{
  @Input()
  board: Board;

  constructor(public gs: GameService){
  }

  ngOnInit(){
  }

  handleMove(position) {
    if(!this.board.winner && !this.board.squares[position] ){
      this.board.squares[position] = this.board.currentPlayer.pawn;
      if(this.winningMove()) {
          this.board.winner = this.board.currentPlayer.name;
          this.gs.updateScore(1);
      }
          this.gs.changeTurn();
          this.board.counter++;
    }
  }

  winningMove() {
    const conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let condition of conditions) {
        if ( this.board.squares[condition[0]]
            && this.board.squares[condition[0]] === this.board.squares[condition[1]]
            && this.board.squares[condition[1]] === this.board.squares[condition[2]]) {
                return true;
        }
    }
    return false;
  }

  gameStatusMessage():string{
    if(this.board.counter == 9 && !this.board.winner){
        return `Pas de perdant, que des gagnants`;
    }
    return this.board.winner? `${this.board.winner} a gagné!` : 
    `${this.board.currentPlayer.name}, à toi de jouer`;
  }

  newBoard(){
    this.gs.initBoard();
  }
}
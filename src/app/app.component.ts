import { Component } from '@angular/core';
import { GameService, Player, Board, Cell } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Morpion';
  players: Player[] = [];
  board: Board;

  constructor(public gs: GameService){
  }

  ngOnInit(){
    this.board = this.gs.getBoard();
  }

  initPlayers(name: string){
    this.gs.initPlayers(name);
    this.players = this.gs.players;
    console.log("joueurs créés", this.players);
    this.board = this.gs.initBoard();
    console.log("board créée", this.board);
  }

}
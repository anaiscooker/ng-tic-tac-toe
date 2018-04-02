import { Injectable } from "@angular/core";
import {BoardComponent} from './presentation/board/board.component';

@Injectable()
export class GameService {
    players: Player[] = [];
    board: Board;
    turn: number = 0;

    initPlayers(name1: string){
        this.players[0]=({
            name: name1,
            pawn: 'X',
            bot: false,
            score: 0,
            });
        this.players[1]=({
            name: "Bot",
            pawn: 'O',
            bot: false,
            score: 0,
            });
        return this.players;
    }

    initBoard(){
        this.board=({
            squares: Array(9).fill(null),
            currentPlayer: this.players[0],
            winner: null,
            counter: 0,
        });
        return this.board;
    }

    gameStatusMessage():string{
    if(this.board.counter == 9 && !this.board.winner){
        return `Pas de perdant, que des gagnants`;
    }
    return this.board.winner? `${this.board.winner} a gagné!` : 
    `${this.board.currentPlayer.name}, à toi de jouer`;
    }

    handleMove(position) {
    if(!this.board.winner && !this.board.squares[position] ){
        this.board.squares[position] = this.board.currentPlayer.pawn;
        if(this.winningMove()) {
            this.board.winner = this.board.currentPlayer.name;
            this.updateScore(1);
        }
            this.changeTurn();
            this.board.counter++;
        }
    }
    
    changeTurn(){
        if(this.board.currentPlayer.pawn == "O"){
            this.board.currentPlayer = this.players[0];
        } else {
            this.board.currentPlayer = this.players[1];
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

    updateScore(point: number){
        this.board.currentPlayer.score +=point;
    }
}

export interface Player {
    name: string;
    pawn: string;
    bot: boolean;
    score: number;
}

export interface Board {
    squares: string[];
    currentPlayer: Player;
    winner: string;
    counter: number;
}

export interface Cell{
    state: string;
}
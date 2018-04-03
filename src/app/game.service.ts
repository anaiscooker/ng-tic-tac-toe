import { Injectable } from "@angular/core";

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
    
    changeTurn(){
        if(this.board.currentPlayer.pawn == "O"){
            this.board.currentPlayer = this.players[0];
        } else {
            this.board.currentPlayer = this.players[1];
        }
    }

    updateScore(point: number){
        this.board.currentPlayer.score +=point;
    }

    getBoard(){
        return this.board;
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
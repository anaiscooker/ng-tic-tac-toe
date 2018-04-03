import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './presentation/board/board.component';
import { CellComponent } from './presentation/cell/cell.component';
import { PlayerComponent } from './presentation/player/player.component';
import { GameService } from './game.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

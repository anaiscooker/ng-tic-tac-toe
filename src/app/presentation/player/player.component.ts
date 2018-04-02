import { Component, OnInit, Input } from '@angular/core';
import { Player, GameService } from '../../game.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit{
  @Input()
  player: Player;

  constructor(){}

  ngOnInit() {
  }
}

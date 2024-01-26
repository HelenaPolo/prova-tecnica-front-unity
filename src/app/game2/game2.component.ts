import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
declare var UnityLoader: any;
declare global {
  interface Window {
    messageHandler: any;
    gameInstance: any
  }
}

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})

export class Game2Component implements OnInit{

  @ViewChild('gameContainer') gameContainer!: ElementRef;
  unityInstance: any;
  gameInstance = null;

  ngOnInit(): void {

   try {
      this.unityInstance = UnityLoader.instantiate("gameContainer", "./assets/newGame/Build/newGame.json");
      this.gameInstance = this.unityInstance;
      this.unityInstance.SendMessage('Square', 'ChangeImage');
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css'],
})

export class Game1Component implements OnInit {

  unityInstance: any;

  counter = 0;

  ngOnInit(): void {

   try {
      this.unityInstance = UnityLoader.instantiate("gameContainer", "./assets/ballGame/Build/ballGame.json");
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }

    (window as any).counterChangeListener = (counter: number) => {
      this.counter = counter;
    }
  }
}

import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { EmitService } from '../services/emit.service';
declare var UnityLoader: any;

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})

export class Game2Component implements  OnInit{

  @ViewChild('gameContainer') gameContainer!: ElementRef;
  unityInstance: any;

  newImg = this._emitService.newValue;
  constructor(private _emitService: EmitService) {}

  counter = 0;

  ngOnInit(): void {

   try {
      this.unityInstance = UnityLoader.instantiate("gameContainer", "./assets/squareGame/Build/squareGame.json");
        
      setTimeout(() =>{
        this.ChangeImg(this.newImg);
      }, 2500);

    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }

    (window as any).counterChangeListener = (counter: number) => {
      this.counter = counter;
    }
  }
 
  ChangeImg(newImg: number) {
    try {
    this.unityInstance.SendMessage("Square", "ChangeImage", newImg);
    } catch (error) {
      console.error("SendMessage error");
    }
  }

  FullScreen(){
    this.unityInstance.SetFullscreen(1);
  }

}




import { Component } from '@angular/core';
import { EmitService } from './services/emit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prova-tecnica'; 
  constructor(private _emitService: EmitService) { } 
}

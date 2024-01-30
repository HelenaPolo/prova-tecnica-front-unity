import { Component } from '@angular/core';
import { EmitService } from '../services/emit.service';
import { __values } from 'tslib';
  
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  constructor( public _emitService: EmitService){}

  ChangeValue(value: number){
    this._emitService.newValue = value;
  }    
}

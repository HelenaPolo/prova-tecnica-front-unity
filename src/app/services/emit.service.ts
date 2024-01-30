import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EmitService{
    constructor() {}

    public newValue!: number;
}
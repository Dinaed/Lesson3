import { Component, Input } from '@angular/core';
import { IShop } from '../modules/module';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input()
  shop!: IShop;
  
  color:string = '';
  toggle:boolean = false;
  rotate:string = '';
  colored(){
    this.color = this.color?'':'green';
  }
  open(){
    this.toggle = !this.toggle;
    this.rotate = this.rotate? '':'rotate(90deg)';
  }
}

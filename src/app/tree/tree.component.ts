import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IShop } from '../modules/module';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input()
  shop!: IShop;
  renderer:any;
  bgClass:boolean = false;
  toggle:boolean = true;
  rotate:string = '';
  @Output()
  sendColor: EventEmitter<string> = new EventEmitter<string>();

  colored(event:any, className:string){
    event.target.classList.add(className)
    const hasClass = event.target.classList.contains(className);
    if(hasClass){
      setTimeout(() => {
      event.target.classList.remove(className)
      this.sendColor.emit(className);
      }, 2000)
    }
  }
  open(){
    this.toggle = !this.toggle;
    this.rotate = this.rotate? '':'rotate(90deg)';
  }
 
}

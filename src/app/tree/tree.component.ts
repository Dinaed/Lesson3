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
  @Output()
  sendColor: EventEmitter<string> = new EventEmitter<string>();
  color:boolean = false;
  
  renderer:any;
  bgClass:boolean = false;
  toggle:boolean = true;
  rotate:string = '';
  

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
  
  getColor($event:any){
    if($event === 'green'){
      this.color = true;
      setTimeout(() => {
        this.color = false;
      }, 2000);
      console.log($event);
    }
  }
}

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
  renderer:any;
  bgClass:boolean = false;
  toggle:boolean = false;
  rotate:string = '';
  colored(event:any, className:string){
    const hasClass = event.target.classList.contains(className);
    if(hasClass){
      event.target.classList.remove(className)
    }
    else{
      event.target.classList.add(className)
    }
    event.stopPropagation();
    
  }
  open(){
    this.toggle = !this.toggle;
    this.rotate = this.rotate? '':'rotate(90deg)';
  }
}

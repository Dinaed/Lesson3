import { Component, Input, OnInit } from '@angular/core';
import { IShop } from '../modules/module';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input()
  shop!: IShop;
  
  constructor() { }

  ngOnInit() {
  }

}

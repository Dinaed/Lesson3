import { Component } from '@angular/core';
import { IShop } from './modules/module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson3';

  shops:IShop[] =[
    {
      name: 'shoes',
      type:[
        {
          name: 'green'
        },
        {
          name: 'black'
        },
        {
          name: 'brown'
        },
        {
          name: 'white'
        }
      ]
    },
    {
      name: 'suit',
      type:[
        {
          name: 'two-piece suit',
          type:[
            {
              name: 'green'
            },
            {
              name: 'black'
            },
            {
              name: 'brown'
            },
            {
              name: 'white'
            }
          ]
        },
        {
          name: 'three piece suit ',
          type:[
            {
              name: 'green'
            },
            {
              name: 'black'
            },
            {
              name: 'brown'
            },
            {
              name: 'white'
            }
          ]
        }
      ]
    },
    {
      name: 'skirt',
      type:[
        {
          name: 'green'
        },
        {
          name: 'black'
        },
        {
          name: 'brown'
        },
        {
          name: 'white'
        }
      ]
    },
  ]
  color: boolean = false;

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

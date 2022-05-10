import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Organigrama';
  topOrg: any = {
    name: 'Yoshi Kenna',
    designation: 'Project Trainee',
    img: "./assets/2.png",
    subordinates: [
      {
        name: 'Patricia Kenna',
        designation: 'SR',
        img: "./assets/1.png",
        subordinates: [
          {
            name: 'Pascal Cartrain',
            designation: 'Project Trainee',
            img: "./assets/4.png",
            subordinates: [
              {
                name: 'Lia Wong',
                designation: 'Senior S/w Engg',
                img: "./assets/3.png",
                subordinates: []
              },
              {
                name: 'Helvetis Nagy',
                designation: 'Project Trainee',
                img: "./assets/2.png",
                subordinates: []
              }
            ]
          }
        ]
      },
      {
        name: 'Helen Marie',
        designation: 'Project Trainee',
        img: "./assets/3.png",
        subordinates: [
          {
            name: 'Jose Pavarotti',
            designation: 'S/w Engg',
            img: "./assets/1.png",
            subordinates: []
          },
          {
            name: 'Horst Kloss',
            designation: 'Project Trainee',
            img: "./assets/4.png",
            subordinates: []
          }
        ]
      }
    ]
  };
}
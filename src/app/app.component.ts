import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Greetings, I'm ";
  secondtitle = "I'm a software developer and I make stuff.";
  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
 
    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'background-color': '#252934'
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 60,
                },
                color: {
                    value: '#f9f3f4'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                      width: 1,
                      color: '#ccc'
                    }
                },
                move: {
                  speed: 2
                }

        },
        interactivity: {
          events: {
            onhover: {
              mode: 'grab',
              enable: true
            },
            onclick: {
              mode: 'repulse',
              enable: true
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200
            },
            repulse: {
              distance: 250,
              duration: 0.6
            }
          }
        }
    };
    }
}

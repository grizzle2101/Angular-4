import { trigger, transition, style, animate, state, keyframes} from '@angular/animations';


export let fade =  trigger('fade', [
    state('void', style({opacity: 0})),

    transition(':enter, :leave', [ 
      animate(2000)
    ])
]);

//Task 1 - Add Key Frames to Slide Effect:

export let slide =  trigger('fade', [
    //OnEnter
    transition(':enter', [style({transform: 'translateX(-20px)'}), 
    animate(1000)
  ]),

    //OnLeave
    transition(':leave', [style({transform: 'translateX(-20px)'}), 
      animate(1000, keyframes([
          style({
              offset: .2,
              opacity: 1,
              transform: 'translateX(20px)'
             }),
             style({
                 offset: 1,
                 opacity: 0,
                 transform: 'translateX(-100%)'
             })
      ]))
    ]) 
]);

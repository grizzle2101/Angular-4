import { trigger, transition, style, animate, state, keyframes, animation, useAnimation} from '@angular/animations';

//Task 1 - Extract Animation
//Note Naming Convention Animation
export let bounceOutLeftAnimation = animation(animate('0.5s ease-out', keyframes([
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
])))

export let fade =  trigger('fade', [
    state('void', style({opacity: 0})),

    transition(':enter, :leave', [ 
      animate(2000)
    ])
]);

export let slide =  trigger('slide', [
    //OnEnter
    transition(':enter', [style({transform: 'translateX(-20px)'}), 
    animate(1000)
  ]),
  //Task 2 - Use Extracted Animation
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);

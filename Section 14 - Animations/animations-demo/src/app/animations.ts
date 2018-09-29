import { trigger, transition, style, animate, state} from '@angular/animations';


export let fade =  trigger('fade', [
    state('void', style({opacity: 0})),

    transition(':enter, :leave', [ 
      animate(2000)
    ])
]);


export let slide =  trigger('fade', [
    //OnCreation
    transition(':enter', [style({transform: 'translateX(-20px)'}), 
      animate(1000)
    ]),
    //OnLeave
    //Task 1 - Delay the Transition:
    //transition(':leave', [animate('500ms 1s'), style({transform: 'translateX(-100%)'})])
    
    //Task 3 - Add Custom Easing:
    transition(':leave', [animate('500ms cubic-bezier(.17,.67,.56,.06)'), style({transform: 'translateX(-100%)'})])
]);

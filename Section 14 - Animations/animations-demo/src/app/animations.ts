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
    transition(':leave', [animate(500), style({transform: 'translateX(-100%)'})])
]);

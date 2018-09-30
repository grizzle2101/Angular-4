import { trigger, transition, style, animate, state, keyframes, animation, useAnimation} from '@angular/animations';

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
])));

//Task 2 - Extract FadeIn Animation
//Task 4 - Parameterize Animations
export let fadeInAnimation = animation([
    style({opacity: 0}),
    animate('{{duration}} {{easing}}')],
    //Add AnimationOptions
    {params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

//Task 3 - Extract FadeOut Animation
export let fadeOutAnimation = animation([
    animate(2000, style({opacity: 0}))]);

//Task 1 - Refactor Fade Effect:
export let fade =  trigger('fade', [
    transition(':enter', [fadeInAnimation]),
    transition(':leave', [fadeOutAnimation])
]);

export let slide =  trigger('slide', [
    transition(':enter', [style({transform: 'translateX(-20px)'}), 
    animate(1000)
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);

import {
  trigger,
  query,
  style,
  animate,
  animateChild,
  transition,
  group,
} from '@angular/animations';

export const routingAnimation = trigger('routingAnimation', [
  transition(':enter', []),
  transition('* => *', [
    group([
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
        { optional: true },
      ),
      query(':leave', [animate('0.5s', style({ opacity: 0 }))], {
        optional: true,
      }),
    ]),
  ]),
]);

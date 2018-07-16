let map = {

    keys: [
        { id: 1, color: '#888', stroke: '#3b3b3b', strokeWidth: 0.5, solid: false }, // background tiles
        { id: 2, color: '#555', stroke: '#3b3b3b', strokeWidth: 0.5, solid: true, restitution: 0.15 }, // ceiling or floor tiles
        { id: 3, color: '#555', stroke: '#3b3b3b', strokeWidth: 0.5, solid: true, restitution: 0.15 }, // wall tile
        { id: 4, color: '#3498db', solid: true, foreground: true }, // blue portal tile
        { id: 5, color: '#f39c12', solid: true, foreground: true }, // orange portal tile
        { id: 6, color: '#636e72', stroke: '#3b3b3b', strokeWidth: 1, solid: true, restitution: 0.15 }, // portal resistant tile
        { id: 7, color: '#1abc9c', solid: true, stroke: true, restitution: 0.15 } // force field tile
    ],

    levels: [

      [  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [3, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 3],
         [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
       ],

       [   [2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
           [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
         ],

         [   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2],
             [3, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 3],
             [3, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 3],
             [3, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 3],
             [3, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [3, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
             [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ],

        [   [2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [3, 6, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
            [3, 6, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
            [3, 6, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [3, 6, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 6, 6, 3],
            [3, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [3, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 6, 6, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 6, 6, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ]
    ],

    complete_1: false,
    complete_2: false,
    complete_3: false,
    complete_4: false,

    tile_size: 16
}

class UIcontrols {
  constructor() {
    this.portal_gun = new Audio('https://raw.githubusercontent.com/nickshillingford/nickshillingford.github.io/master/sounds/portal_gun.mp3');
    this.portal_gun.type = 'audio/mpeg';

    this.switch_portal = new Audio('https://raw.githubusercontent.com/nickshillingford/nickshillingford.github.io/master/sounds/portal_switch.mp3');
    this.switch_portal.type = 'audio/mpeg';

    this.jump_sound = new Audio('https://raw.githubusercontent.com/nickshillingford/nickshillingford.github.io/master/sounds/jump.mp3');
    this.jump_sound.type = 'audio/mpeg';

    this.orange_indicator = document.querySelector('#orange');
    this.orange_indicator.style.opacity = 0.2;

    this.blue_indicator = document.querySelector('#blue');
    this.blue_indicator.style.opacity = 1;

    this.shot_once = false;
    this.jump_switch = 0;
    this.mode = true;

    this.pr = false;
    this.pl = false;
    this.pd = false;
    this.pu = false;

    this.key = {
        left: false,
        right: false,
        up: false,

        pr: false,
        pl: false,
        pd: false,
        pu: false
    }
  }

  keyDown(e) {
    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = true;
        break;
    case 38:
        _this.key.up = true;
        try { this.jump_sound.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    case 39:
        _this.key.right = true;
        break;
    case 68:
        _this.key.pr = true;
        try { this.portal_gun.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    case 65:
        _this.key.pl = true;
        try { this.portal_gun.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    case 83:
        _this.key.pd = true;
        try { this.portal_gun.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    case 87:
        _this.key.pu = true;
        try { this.portal_gun.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    case 13:
        this.switchPortals();
        try { this.switch_portal.play(); }
        catch (error) {
          console.log(error);
        }
        break;
    }
  }

  keyUp(e) {
    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = false;
        break;
    case 38:
        _this.key.up = false;
        break;
    case 39:
        _this.key.right = false;
        break;
    case 68:
        _this.key.pr = false;
        this.shot_once = false;
        break;
    case 65:
        _this.key.pl = false;
        this.shot_once = false;
        break;
    case 83:
        _this.key.pd = false;
        this.shot_once = false;
        break;
    case 87:
        _this.key.pu = false;
        this.shot_once = false;
        break;
    }
  }

  switchPortals() {
    if (this.pr || this.pl || this.pd || this.pu) {
      console.log('switching not available while a portal is in the air.');
    }
    else {
      this.mode = (this.mode) ? false : true;
      if (this.mode) {
        this.orange_indicator.style.opacity = 0.2;
        this.blue_indicator.style.opacity = 1;
      }
      else {
        this.blue_indicator.style.opacity = 0.2;
        this.orange_indicator.style.opacity = 1;
      }
    }
  }
}

class Engine {

  constructor() {
    this.laser_sound = new Audio('https://raw.githubusercontent.com/nickshillingford/nickshillingford.github.io/master/sounds/laser.mp3');

    this.bodies = [companion, player, turrent_1, turrent_2];

    this.resolver = new Resolver();
    this.gp = new UIcontrols();

    this.force_field = false;
    this.switch_point = 500;
    this.count = 0;

    this.gravity = {
      x: 0,
      y: 0.3
    }

    this.vel_limit = {
      x: 2,
      y: 9
    }

    this.portal_vel_limit = {
      x: 24,
      y: 24
    }

    window.onkeydown = this.gp.keyDown.bind(this.gp);
    window.onkeyup = this.gp.keyUp.bind(this.gp);
  }

  loadMap(map, level, spawn_x1, spawn_y1, spawn_x2, spawn_y2) {
    this.current_map = map;
    this.current_level = this.current_map.levels[level];
    this.setResolver(map);

    var _this = this;

    this.current_map.width = 0;
    this.current_map.height = 0;

    map.keys.forEach(function(key) {
        _this.current_level.forEach(function(row, y) {
            _this.current_map.height = Math.max(_this.current_map.height, y);
            row.forEach(function(tile, x) {
                _this.current_map.width = Math.max(_this.current_map.width, x);
                if (tile == key.id) {
                    _this.current_level[y][x] = key;
                }
            });
        });
    });

    this.current_map.width_p = this.current_map.width * map.tile_size;
    this.current_map.height_p = this.current_map.height * map.tile_size;

    if (map.complete_1 && map.complete_2 && map.complete_3) {
      turrent_1.location.x = (8 * map.tile_size);
      turrent_1.location.y = (7 * map.tile_size);

      turrent_2.location.x = (7 * map.tile_size);
      turrent_2.location.y = (15 * map.tile_size);
    }

    companion.location.x = (spawn_x2 * map.tile_size);
    companion.location.y = (spawn_y2 * map.tile_size);

    player.location.x = (spawn_x1 * map.tile_size);
    player.location.y = (spawn_y1 * map.tile_size);
  }

  setResolver(map) {
    this.resolver.portal_vel_limit = this.portal_vel_limit;
    this.resolver.current_level = this.current_level;
    this.resolver.laser_fired = this.laser_fired;
    this.resolver.vel_limit = this.vel_limit;
    this.resolver.gravity = this.gravity;
    this.resolver.bodies = this.bodies;
    this.resolver.gp = this.gp;
  }

  drawTile(x, y, tile, context) {
    context.fillStyle = tile.color;

    if (tile.stroke) {
      context.strokeStyle = tile.stroke;
      context.lineWidth = tile.strokeWidth;

      context.beginPath();
      context.rect(x, y, map.tile_size, map.tile_size);
      context.fill();
      context.stroke();
    }
    else {
      context.fillRect(x, y, map.tile_size, map.tile_size);
    }
  }

  drawMap(context, foreground) {
    for (var y = 0; y < this.current_level.length; y++) {
        for (var x = 0; x < this.current_level[y].length; x++) {
            if ((!foreground && !this.current_level[y][x].foreground) || (foreground && this.current_level[y][x].foreground)) {
                var t_x = (x * map.tile_size);
                var t_y = (y * map.tile_size);
                this.drawTile(t_x, t_y, this.current_level[y][x], context);
            }
        }
    }

    if (map.complete_1 && map.complete_2 && !map.complete_3) {
      this.forceField();
    }
    else if (map.complete_3) {
      var turrent_y = Math.round(this.bodies[3].location.y / map.tile_size);
      if (turrent_y == 23) {
        this.openFloor();
      }
    }
  }

  update(context) {
    if (this.gp.key.left) {
        if (player.velocity.x > -this.vel_limit.x) {
            player.velocity.x -= player.movement_speed.left;
        }
    }

    if (this.gp.key.up) {
        if (player.can_jump && player.velocity.y > -this.vel_limit.y) {
            player.velocity.y -= player.movement_speed.jump;
            player.can_jump = false;
        }
    }

    if (this.gp.key.right) {
        if (player.velocity.x < this.vel_limit.x) {
            player.velocity.x += player.movement_speed.left;
        }
    }

    var portal = (this.gp.mode) ? blue : orange;

    if ( (this.gp.key.pr || this.gp.key.pl) && (!this.gp.shotOnce && !this.gp.pl && !this.gp.pr && !this.gp.pd && !this.gp.pu) ) {
      if (this.gp.key.pr) {
        portal.location.x = (player.location.x + 4);
        this.gp.pr = true;
      }
      else {
        portal.location.x = (player.location.x - 4);
        this.gp.pl = true;
      }
      portal.location.y = (player.location.y + 4);
      this.gp.shot_once = true;
    }

    if ( (this.gp.key.pd || this.gp.key.pu) && (!this.gp.shotOnce && !this.gp.pl && !this.gp.pr && !this.gp.pd && !this.gp.pu) ) {
      if (this.gp.key.pd) {
        this.gp.pd = true;
      }
      else {
        this.gp.pu = true;
      }
      portal.location.x = player.location.x;
      portal.location.y = player.location.y;
      this.gp.shot_once = true;
    }

    if (map.complete_1 && map.complete_2 && map.complete_3) {
      for (var i = 2; i < this.bodies.length; i++) {
        var player_x = Math.round(player.location.x / map.tile_size);
        var player_y = Math.round(player.location.y / map.tile_size);

        var turrent_x = Math.round(this.bodies[i].location.x / map.tile_size);
        var turrent_y = Math.round(this.bodies[i].location.y / map.tile_size);

        if ( ((player_x < 18) && (turrent_y < 23)) && (player_y == turrent_y) && !laser.fired ) {
          laser.location.x = (this.bodies[i].location.x + 7);
          laser.location.y = (this.bodies[i].location.y + 7);
          laser.horizontal = true;
          laser.fired = true;

          try { this.laser_sound.play(); }
          catch (error) {
            console.log(error);
          }
        }
      }

      if (laser.fired) {
        this.resolver.resolveLaser();
      }
    }

    if (this.gp.pr || this.gp.pl) {
      this.resolver.resolvePortal(0);
    }
    if (this.gp.pd || this.gp.pu) {
      this.resolver.resolvePortal(1);
    }

    this.resolver.resolveBodies();
  }

  redirect(context) {
    if (blue.open && orange.open) {
      var area = this.calculateOverlap();
      var exit;

      if (area.overlap_orange_1 != 0 || area.overlap_orange_2 != 0) {
        exit = [blue.pos.x, blue.pos.y];
      }
      else if (area.overlap_blue_1 != 0 || area.overlap_blue_2 != 0) {
        exit = [orange.pos.x, orange.pos.y];
      }

      if ( (player.location.x > 390) ) { // player enters a portal on a right wall.
        if ( (exit[0] > 0) && (exit[1] == 24) ) { // the exit portal is on the ground.
          player.velocity.y = (-player.velocity.x);

          player.location.x = exit[0] * map.tile_size;
          player.location.y = (exit[1] - 1) * map.tile_size;
        }
        else if ( (exit[0] == 24) && (exit[1] > 0) ) { // the exit portal is on a right wall.
          player.velocity.x = (-player.velocity.x);

          player.location.x = (exit[0] - 0.6) * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
        else {
          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
      }
      else if ( (player.location.x < 0) ) { // player enters a portal on a left wall.
        if ( (exit[0] > 0) && (exit[1] == 24) ) { // the exit portal is on the ground.
          player.velocity.y = player.velocity.x;

          player.location.x = exit[0] * map.tile_size;
          player.location.y = (exit[1] - 1) * map.tile_size;
        }
        else if ( (exit[0] == 0) && (exit[1] > 0) ) { // the exit portal is on a left wall.
          player.velocity.x = (-player.velocity.x);

          player.location.x = (exit[0] + 0.6) * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
        else {
          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
      }
      else if ( (player.location.y > 390) ) { // player enters portal on the ground.
        if ( (exit[0] > 0) && (exit[1] == 24) ) { // the exit portal is on the ground.
          player.velocity.y = (-player.velocity.y);

          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
        else if ( (exit[0] == 24) && (exit[1] > 0) ) { // the exit portal is on a right wall.
          player.velocity.x = (-player.velocity.y);

          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
        else if ( (exit[0] == 0) && (exit[1] > 0) ) { // the exit portal is on a left wall.
          player.velocity.x = player.velocity.y;

          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
        else {
          player.location.x = exit[0] * map.tile_size;
          player.location.y = exit[1] * map.tile_size;
        }
      }
    }
  }

  drawBodies(context) {
    let length = (map.complete_3) ? 4 : 2;
    for (var i = 0; i < length; i++) {
      context.fillStyle = this.bodies[i].color;
      context.strokeStyle = this.bodies[i].stroke;
      context.lineWidth = this.bodies[i].lineWidth;

      context.beginPath();
      context.rect(this.bodies[i].location.x, this.bodies[i].location.y, map.tile_size, map.tile_size);
      context.fill();
      context.stroke();
    }
  }

  drawLaser(context) {
    context.fillStyle = laser.color;
    context.beginPath();
    context.arc(laser.location.x, laser.location.y, (map.tile_size / 2 - 4), 0, Math.PI * 2);
    context.fill();

    if (laser.horizontal) {
      if (laser.velocity.x < this.vel_limit.x) {
        laser.velocity.x += laser.speed;
      }

      if (laser.backwards) {
        laser.location.x -= laser.velocity.x;
      }
      else {
        laser.location.x += laser.velocity.x;
      }
    }
    else {
      if (laser.velocity.y < 6) {
        laser.velocity.y += (laser.speed - 1);
      }
      laser.location.y -= laser.velocity.y;
    }
  }

  drawPortal(context, direction) {
    var color = (this.gp.mode) ? (map.keys[3].color) : (map.keys[4].color);
    var portal = (this.gp.mode) ? blue : orange;

    context.fillStyle = color;
    context.beginPath();
    context.arc(portal.location.x, portal.location.y, (map.tile_size / 2 - 4), 0, Math.PI * 2);
    context.fill();

    if (direction == 68 || direction == 65) {
      if (portal.velocity.x < this.vel_limit.x) {
        portal.velocity.x += portal.speed;
      }
    }
    else {
      if (portal.velocity.y < this.vel_limit.y) {
        portal.velocity.y += portal.speed;
      }
    }

    switch (direction) {
    case 68:
        portal.location.x += portal.velocity.x;
        break;
    case 65:
        portal.location.x -= portal.velocity.x;
        break;
    case 83:
        portal.location.y += portal.velocity.y;
        break;
    case 87:
        portal.location.y -= portal.velocity.y;
        break;
    }
  }

  draw(context) {
    this.drawMap(context, false);
    this.drawBodies(context);
    this.redirect(context);

    if (map.complete_1 && map.complete_2 && map.complete_3) {
      if (laser.fired) {
        this.drawLaser(context);
      }
    }

    if (this.gp.pr) {
      this.drawPortal(context, 68);
    }
    if (this.gp.pl) {
      this.drawPortal(context, 65);
    }
    if (this.gp.pd) {
      this.drawPortal(context, 83);
    }
    if (this.gp.pu) {
      this.drawPortal(context, 87);
    }

    this.drawMap(context, true);
  }

  forceField() {
    if (this.count == this.switch_point) {
      this.force_field = (this.force_field) ? false : true;
      this.switch_point = (this.switch_point + 500);

      var key = (this.force_field) ? map.keys[6] : map.keys[5];

      this.current_level[1][19] = key;
      this.current_level[2][19] = key;
      this.current_level[3][19] = key;
      this.current_level[4][19] = key;
    }
    this.count++;
  }

  openFloor() {
    this.current_level[5][2] = map.keys[0];
    this.current_level[5][3] = map.keys[0];
  }

  calculateOverlap() {
    let overlap_orange_x1 = Math.max(0, Math.min(player.bbox.right, orange.bbox.right_1) - Math.max(player.bbox.left, orange.bbox.left_1));
    let overlap_orange_y1 = Math.max(0, Math.min(player.bbox.bottom, orange.bbox.bottom_1) - Math.max(player.bbox.top, orange.bbox.top_1));

    let overlap_orange_x2 = Math.max(0, Math.min(player.bbox.right, orange.bbox.right_2) - Math.max(player.bbox.left, orange.bbox.left_2));
    let overlap_orange_y2 = Math.max(0, Math.min(player.bbox.bottom, orange.bbox.bottom_2) - Math.max(player.bbox.top, orange.bbox.top_2));

    let overlap_blue_x1 = Math.max(0, Math.min(player.bbox.right, blue.bbox.right_1) - Math.max(player.bbox.left, blue.bbox.left_1));
    let overlap_blue_y1 = Math.max(0, Math.min(player.bbox.bottom, blue.bbox.bottom_1) - Math.max(player.bbox.top, blue.bbox.top_1));

    let overlap_blue_x2 = Math.max(0, Math.min(player.bbox.right, blue.bbox.right_2) - Math.max(player.bbox.left, blue.bbox.left_2));
    let overlap_blue_y2 = Math.max(0, Math.min(player.bbox.bottom, blue.bbox.bottom_2) - Math.max(player.bbox.top, blue.bbox.top_2));

    let area_orange_1 = (overlap_orange_x1 * overlap_orange_y1);
    let area_blue_1 = (overlap_blue_x1 * overlap_blue_y1);

    let area_orange_2 = (overlap_orange_x2 * overlap_orange_y2);
    let area_blue_2 = (overlap_blue_x2 * overlap_blue_y2);

    return { overlap_orange_1: area_orange_1, overlap_blue_1: area_blue_1, overlap_orange_2: area_orange_2, overlap_blue_2: area_blue_2 };
  }

}


class Resolver {

  resolveBodies() {
    let length = (map.complete_3) ? 4 : 2;

    for (var i = 0; i < length; i++) {
      var tX = this.bodies[i].location.x + this.bodies[i].velocity.x;
      var tY = this.bodies[i].location.y + this.bodies[i].velocity.y;

      var offset = Math.round((map.tile_size / 2) - 1);

      var body_x = Math.round(this.bodies[i].location.x / map.tile_size);
      var body_y = Math.round(this.bodies[i].location.y / map.tile_size);

      var tile = this.getTile(body_x, body_y);

      if (i == 1) {
        player.bbox.top = Math.round(player.location.y);
        player.bbox.left = Math.round(player.location.x);
        player.bbox.right = (player.bbox.left + map.tile_size);
        player.bbox.bottom = (player.bbox.top + map.tile_size);

        if (tile.jump && this.gp.jump_switch > 15) {
          player.can_jump = true;
          this.gp.jump_switch = 0;
        }
        else {
          this.gp.jump_switch++;
        }
      }

      this.bodies[i].velocity.x += this.gravity.x;
      this.bodies[i].velocity.y += this.gravity.y;

      var y_near1  = Math.round((this.bodies[i].location.y - offset) / map.tile_size);
      var y_near2  = Math.round((this.bodies[i].location.y + offset) / map.tile_size);
      var x_near1   = Math.round((this.bodies[i].location.x - offset) / map.tile_size);
      var x_near2   = Math.round((this.bodies[i].location.x + offset) / map.tile_size);

      var t_y_up   = Math.floor(tY / map.tile_size);
      var t_y_down = Math.ceil(tY / map.tile_size);
      var t_x_left  = Math.floor(tX / map.tile_size);
      var t_x_right = Math.ceil(tX / map.tile_size);

      var top1 = this.getTile(x_near1, t_y_up);
      var top2 = this.getTile(x_near2, t_y_up);
      var bottom1 = this.getTile(x_near1, t_y_down);
      var bottom2 = this.getTile(x_near2, t_y_down);
      var left1 = this.getTile(t_x_left, y_near1);
      var left2 = this.getTile(t_x_left, y_near2);
      var right1 = this.getTile(t_x_right, y_near1);
      var right2 = this.getTile(t_x_right, y_near2);

      this.bodies[i].velocity.x = Math.min(Math.max(this.bodies[i].velocity.x, -this.portal_vel_limit.x), this.portal_vel_limit.x);
      this.bodies[i].velocity.y = Math.min(Math.max(this.bodies[i].velocity.y, -this.portal_vel_limit.y), this.portal_vel_limit.y);

      this.bodies[i].location.x += this.bodies[i].velocity.x;
      this.bodies[i].location.y += this.bodies[i].velocity.y;

      this.bodies[i].velocity.x *= 0.9;

      if (left1.solid || left2.solid || right1.solid || right2.solid) {
          while (this.getTile(Math.floor(this.bodies[i].location.x / map.tile_size), y_near1).solid
              || this.getTile(Math.floor(this.bodies[i].location.x / map.tile_size), y_near2).solid) {
                this.bodies[i].location.x += 0.1;
              }

          while (this.getTile(Math.ceil(this.bodies[i].location.x / map.tile_size), y_near1).solid
              || this.getTile(Math.ceil(this.bodies[i].location.x / map.tile_size), y_near2).solid) {
                this.bodies[i].location.x -= 0.1;
              }

          var restitution = 0;

          if (left1.solid && left1.restitution > restitution) {
            restitution = left1.restitution;
          }
          if (left2.solid && left2.restitution > restitution) {
            restitution = left2.restitution;
          }
          if (right1.solid && right1.restitution > restitution) {
            restitution = right1.restitution;
          }
          if (right2.solid && right2.restitution > restitution) {
            restitution = right2.restitution;
          }

          this.bodies[i].velocity.x *= -restitution || 0;
      }

      if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {
          while (this.getTile(x_near1, Math.floor(this.bodies[i].location.y / map.tile_size)).solid
              || this.getTile(x_near2, Math.floor(this.bodies[i].location.y / map.tile_size)).solid) {
                this.bodies[i].location.y += 0.1;
              }

          while (this.getTile(x_near1, Math.ceil(this.bodies[i].location.y / map.tile_size)).solid
              || this.getTile(x_near2, Math.ceil(this.bodies[i].location.y / map.tile_size)).solid) {
                this.bodies[i].location.y -= 0.1;
              }

          var restitution = 0;

          if (top1.solid && top1.restitution > restitution) {
            restitution = top1.restitution;
          }
          if (top2.solid && top2.restitution > restitution) {
            restitution = top2.restitution;
          }
          if (bottom1.solid && bottom1.restitution > restitution) {
            restitution = bottom1.restitution;
          }
          if (bottom2.solid && bottom2.restitution > restitution) {
            restitution = bottom2.restitution;
          }

          this.bodies[i].velocity.y *= -restitution || 0;

          if (i == 1) {
            if ((bottom1.solid || bottom2.solid) && !tile.jump) {
                player.can_jump = true;
            }
          }
      }
    }

    this.check();
  }

  resolvePortal(direction) {
    var portal_x, portal_y, _id;

    if (this.gp.mode) {
      portal_x = Math.round(blue.location.x / map.tile_size);
      portal_y = Math.round(blue.location.y / map.tile_size);
    }
    else {
      portal_x = Math.round(orange.location.x / map.tile_size);
      portal_y = Math.round(orange.location.y / map.tile_size);
    }

    var tile = this.getTile(portal_x, portal_y);
    _id = (direction == 0) ? (this.current_level[portal_y - 1][portal_x].id) : (this.current_level[portal_y][portal_x - 1].id);

    if (_id == 4 || _id == 5) {
      this.destroyPortal();
    }
    else if (tile.solid && tile.id != 7) {
      if (tile.id == 4 || tile.id == 5 || tile.id == 6) {
        this.destroyPortal();
      }
      else {
        var key = (this.gp.mode) ? map.keys[3] : map.keys[4];
        var offset;

        if (this.gp.mode) {
          this.resetTiles(4);
          blue.pos.y = portal_y;
          blue.pos.x = portal_x;
        }
        else {
          this.resetTiles(5);
          orange.pos.y = portal_y;
          orange.pos.x = portal_x;
        }

        if (direction == 0) {

          this.current_level[portal_y - 1][portal_x] = key;
          offset = { x: portal_x, y: portal_y - 1 };

          if (blue.open && orange.open) {
            this.current_level[portal_y - 1][portal_x].solid = false;
          }

          if (this.gp.pr) {
            this.gp.pr = false;
          }
          else if (this.gp.pl) {
            this.gp.pl = false;
          }
        }
        else {
          if (this.current_level[portal_y][portal_x + 1].id == 6) {

            this.current_level[portal_y][portal_x - 1] = key;
            offset = { x: portal_x - 1, y: portal_y };

            if (blue.open && orange.open) {
              this.current_level[portal_y][portal_x - 1].solid = false;
            }

          }
          else {

            this.current_level[portal_y][portal_x - 1] = key; // set back to + 1
            offset = { x: portal_x - 1, y: portal_y };
            if (blue.open && orange.open) {
              this.current_level[portal_y][portal_x - 1].solid = false; // set back to + 1
            }

          }

          if (this.gp.pd) {
            this.gp.pd = false;
          }
          else if (this.gp.pu) {
            this.gp.pu = false;
          }
        }

        if (this.gp.mode) {
          blue.bbox.top_1 = Math.round(portal_y * map.tile_size);
          blue.bbox.left_1 = Math.round(portal_x * map.tile_size);
          blue.bbox.right_1 = (blue.bbox.left_1 + map.tile_size);
          blue.bbox.bottom_1 = (blue.bbox.top_1 + map.tile_size);

          blue.bbox.top_2 = Math.round(offset.y * map.tile_size);
          blue.bbox.left_2 = Math.round(offset.x * map.tile_size);
          blue.bbox.right_2 = (blue.bbox.left_2 + map.tile_size);
          blue.bbox.bottom_2 = (blue.bbox.top_2 + map.tile_size);

          blue.open = true;
        }
        else {
          orange.bbox.top_1 = Math.round(portal_y * map.tile_size);
          orange.bbox.left_1 = Math.round(portal_x * map.tile_size);
          orange.bbox.right_1 = (orange.bbox.left_1 + map.tile_size);
          orange.bbox.bottom_1 = (orange.bbox.top_1 + map.tile_size);

          orange.bbox.top_2 = Math.round(offset.y * map.tile_size);
          orange.bbox.left_2 = Math.round(offset.x * map.tile_size);
          orange.bbox.right_2 = (orange.bbox.left_2 + map.tile_size);
          orange.bbox.bottom_2 = (orange.bbox.top_2 + map.tile_size);

          orange.open = true;
        }

        this.current_level[portal_y][portal_x] = key;
        key.solid = true;

        if (blue.open && orange.open) {
          this.current_level[portal_y][portal_x].solid = false;
          if (this.gp.mode) {
            this.current_level[orange.pos.y][orange.pos.x].solid = false;
          }
          else {
            this.current_level[blue.pos.y][blue.pos.x].solid = false;
          }
        }
      }
    }
    else if (tile.id == 4 || tile.id == 5) {
      this.destroyPortal();
    }
  }

  resolveLaser() {
    var laser_x = Math.round(laser.location.x / map.tile_size);
    var laser_y = Math.round(laser.location.y / map.tile_size);

    var player_x = Math.round(player.location.x / map.tile_size);
    var player_y = Math.round(player.location.y / map.tile_size);

    var tile = this.getTile(laser_x, laser_y);

    if ( (tile.id == 4 || tile.id == 5) && (blue.open && orange.open) && !laser.backwards ) {
      laser.backwards = true;
      laser.location.x = (tile.id == 4) ? orange.location.x : blue.location.x;
      laser.location.y = (tile.id == 4) ? (orange.location.y + 3) : (blue.location.y + 3);
    }

    var y = Math.round(laser.location.y / map.tile_size);
    if (y == 24) {
      laser.horizontal = false;
    }

    if ((laser_x == player_x) && (laser_y == player_y)) {
      if (!laser.horizontal) {
        player.velocity.y += (-player.knock_back);
        player.velocity.y *= 0.9;
      }
      else if (laser.backwards) {
        player.velocity.x -= player.knock_back;
        player.velocity.x *= 0.9;
      }
      else {
        player.velocity.x += player.knock_back;
        player.velocity.x *= 0.9;
      }
      laser.backwards = false;
      laser.fired = false;
    }

    for (var i = 2; i < this.bodies.length; i++) {
      var turrent_x = Math.round(this.bodies[i].location.x / map.tile_size);
      var turrent_y = Math.round(this.bodies[i].location.y / map.tile_size);

      if ((laser_x == turrent_x) && (laser_y == turrent_y) && laser.backwards) {
        this.bodies[i].velocity.x -= this.bodies[i].knock_back;
        this.bodies[i].velocity.x *= 0.9;
        laser.backwards = false;
        laser.fired = false;
      }
    }

    if ( (laser_x > 24) || ((tile.id == 6) && (laser_x < 22)) || ((tile.id == 6) && !laser.horizontal) ) {
      laser.horizontal = true;
      laser.backwards = false;
      laser.fired = false;
    }
  }

  resetTiles(id) {
    for (var i = 0; i < this.current_level[0].length; i++) {
      if (this.current_level[0][i].id == id) {
        this.current_level[0][i] = map.keys[1];
      }
    }

    for (var i = 0; i < this.current_level.length; i++) {
      if (this.current_level[i][0].id == id) {
        this.current_level[i][0] = map.keys[1];
      }
    }

    for (var i = 0; i < this.current_level.length; i++) {
      if (this.current_level[i][this.current_level.length - 1].id == id) {
        this.current_level[i][this.current_level.length - 1] = map.keys[1];
      }
    }

    for (var i = 0; i < this.current_level[0].length; i++) {
      if (this.current_level[this.current_level.length - 1][i].id == id) {
        this.current_level[this.current_level.length - 1][i] = map.keys[1];
      }
    }
  }

  destroyPortal() {
    this.gp.pr = false;
    this.gp.pl = false;
    this.gp.pd = false;
    this.gp.pu = false;
  }

  companion() {
    var companion_x = Math.round(companion.location.x / map.tile_size);
    var companion_y = Math.round(companion.location.y / map.tile_size);

    var player_x = Math.round(player.location.x / map.tile_size);
    var player_y = Math.round(player.location.y / map.tile_size);

    var result = false;
    if ((companion_x == player_x) && (companion_y == player_y)) {
      result = true;
    }

    return result;
  }

  check() {
    var result = this.companion();

    if (result && !map.complete_1) {
      map.complete_1 = true;
    }
    else if (result && !map.complete_2) {
      map.complete_2 = true;
    }
    else if (result && !map.complete_3) {
      map.complete_3 = true;
    }
    else if (result && !map.complete_4) {
      map.complete_4 = true;
    }
  }

  getTile(x, y) {
    return (this.current_level[y] && this.current_level[y][x]) ? this.current_level[y][x] : 0;
  }

}

let player = {
  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  bbox: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  movement_speed: {
    left: 0.2,
    right: 0.2,
    jump: 6
  },

  knock_back: 8.75,
  color: '#ecf0f1',
  stroke: '#555',
  lineWidth: 1.5,
  can_jump: true
};

let companion = {
  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  color: '#f8a5c2',
  stroke: '#555',
  lineWidth: 1
};

let orange = {
  open: false,

  pos: {
    x: 0,
    y: 0
  },

  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  bbox: {
    top_1: 0,
    left_1: 0,
    right_1: 0,
    bottom_1: 0,

    top_2: 0,
    left_2: 0,
    right_2: 0,
    bottom_2: 0
  },

  speed: 5
};

let blue = {
  open: false,

  pos: {
    x: 0,
    y: 0
  },

  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  bbox: {
    top_1: 0,
    left_1: 0,
    right_1: 0,
    bottom_1: 0,

    top_2: 0,
    left_2: 0,
    right_2: 0,
    bottom_2: 0
  },

  speed: 5
};

let turrent_1 = {
  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  knock_back: 4.2,
  color: '#4b4b4b',
  stroke: '#4b4b4b',
  lineWidth: 0
};

let turrent_2 = {
  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  knock_back: 4.2,
  color: '#4b4b4b',
  stroke: '#4b4b4b',
  lineWidth: 0
};

let laser = {
  location: {
    x: 0,
    y: 0
  },

  velocity: {
    x: 0,
    y: 0
  },

  color: '#fc2847',
  horizontal: true,
  backwards: false,
  fired: false,
  speed: 3.5
};

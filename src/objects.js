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

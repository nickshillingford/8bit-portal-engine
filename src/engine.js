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

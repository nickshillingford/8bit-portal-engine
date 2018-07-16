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

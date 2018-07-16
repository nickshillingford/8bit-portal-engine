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

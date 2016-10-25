// Build a parking lot using javascript
var parkingLot = function(spaces) {
  if (spaces < 1) {
    return "it's not possible to have this little spaces!";
  }
  this.spaces = spaces;
  this.occupied = 0;
  if (this.spaces > this.occupied) {
    this.full = false;
  } else {
    this.full = true;
  }
};

parkingLot.prototype.park = function() {
  if (this.full === true) {
    return "The lot is full";
  } else {
    this.occupied++;
    this.spaces--;
    return "One car has parked, and the lot now has " + this.spaces + " left.";
  }
};

parkingLot.prototype.leave = function() {
  if (this.occupied < 1) {
    return "The lot is empty now, no car can leave";
  } else {
    this.spaces++;
    this.occupied--;
    return "One car has left, and the lot now has " + this.spaces + " left.";
  }
};

const DEFAULT_CAPACITY = 10

function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.planes.pop(plane);
}

Airport.prototype.full = function() {
  if (capacity < DEFAULT_CAPACITY)

}

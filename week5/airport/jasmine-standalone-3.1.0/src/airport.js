const DEFAULT_CAPACITY = 50

function Airport() {
  this.planes = []
  this.capacity = DEFAULT_CAPACITY
}

Airport.prototype.land = function(plane) {
  if(airport.planes.length > DEFAULT_CAPACITY)
    throw new Error('Cannot land plane, airport is full');
  else
  this.planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.planes.pop(plane);
}

Airport.prototype.full = function() {
 
}

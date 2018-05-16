beforeEach(function() {
  airport = new Airport
  plane1 = {}
  plane2 = {}
  });

describe('planes land in the airport', function() {
  it("lands a plane", function() {
    airport.land(plane1)
    expect(airport.planes).toContain(plane1);
  });
});

describe('planes takeoff from the airport', function() {
  it ("departs a plane", function() {
    airport.land(plane1)
    airport.takeoff(plane1)
    expect(airport.planes).not.toContain(plane1);
  });
});

describe('airport capacity', function() {
  it ("does not allow planes to land if the airport is full", function () {
    for(var i=0; i < 50; i++) {
      (airport.land(plane1));
    }
    airport.land(plane2)
    expect(airport.planes).not.toContain(plane2);
  });
  it ("throws an error message trying to land a plane if the airport is full", function () {
    for(var i=0; i < 50; i++) {
      (airport.land(plane1));
    }
    expect(airport.land(plane2)).toThrowError("Cannot land plane, airport is full")
  });
});

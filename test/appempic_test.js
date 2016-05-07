'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Sebastian', function () {
    appempic.getName().should.equal('Sebastian');
  });

  it('El apellido debe ser Jimenez', function () {
    appempic.getLastName().should.equal('Jimenez');
  });


});

'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Sebastián', function () {
    appempic.getName().should.equal('Sebastián');
  });

  it('El apellido debe ser Sebastián', function () {
    appempic.getLastName().should.equal('Jiménez');
  });


});

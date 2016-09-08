describe('SelectedCarsFactory', function () {
  'use strict';
  var SelectedCarsFactory;
  beforeEach(module('app.checkout'));
  beforeEach(inject(function (_SelectedCarsFactory_) {
    SelectedCarsFactory = _SelectedCarsFactory_;
  }));
  it('should define kart service factory', function () {
    expect(SelectedCarsFactory).toBeDefined();
  });
  it('should return back message when buy is called', function () {
    var car = {name: 'viper'};
    expect(SelectedCarsFactory.buy(car)).toEqual('Thanks for buying viper');
  });
});

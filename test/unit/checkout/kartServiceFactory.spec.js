describe('SelectedmoviesFactory', function () {
  'use strict';
  var SelectedmoviesFactory;
  beforeEach(module('app.checkout'));
  beforeEach(inject(function (_SelectedmoviesFactory_) {
    SelectedmoviesFactory = _SelectedmoviesFactory_;
  }));
  it('should define kart service factory', function () {
    expect(SelectedmoviesFactory).toBeDefined();
  });
  it('should return back message when buy is called', function () {
    var movie = {name: 'viper'};
    expect(SelectedmoviesFactory.buy(movie)).toEqual('Thanks for buying viper');
  });
});

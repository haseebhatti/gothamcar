describe('movieDisplay', function () {
  var $compile,
    $rootScope,
    $httpBackend;
  beforeEach(module('app.movieDisplay'));
  beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', 'gothamMovie/home/homePage.tpl.html').respond('This is my title');
  }));
  it('should replace element with contents', function () {
    var element = $compile('<movieDisplay>My Custom Directive</movieDisplay>')($rootScope);
    $rootScope.$digest();
    // $httpBackend.flush()
    expect(element.html()).toContain('My Custom Directive');
  });
});

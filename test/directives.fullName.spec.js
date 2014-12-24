describe('directive: fullName', function () {

  var $compile;
  var $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('replaces the element contents as expected', function () {

    var scope = $rootScope.$new();
    var element = $compile('<full-name person="person"></full-name>')(scope);

    scope.person = { firstName: 'Johnny', lastName: 'Carson' };

    // fire all the watches
    scope.$digest();

    // verify the result
    expect(element.html()).toContain('Johnny Carson');
  });

});

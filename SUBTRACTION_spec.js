describe('Super Calculator Substraction', function(){
    var first=element(by.model('first'));
    var second=element(by.model('second'));
    var go=element(by.id('gobutton'));
    var select=element(by.model('operator'));
    var table=element(by.binding('result in memory'));
    var result=element(by.binding('latest'));

    function calculate(a,b){
        select.$('[value="SUBTRACTION"]').click();
        first.sendKeys(a);
        second.sendKeys(b);
        go.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
      });

    it('Substraction',function(){
        calculate(14,5);
        expect(result.getText()).toEqual('5');
    });
    it('Substraction a',function(){
        calculate('a', 1);
        expect(result.getText()).toEqual('NaN');
   });

   it('Substraction empty', function(){
       calculate('','');
       expect(result.getText()).toEqual('NaN');
   });
})
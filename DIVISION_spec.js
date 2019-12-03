describe('Super Calculator Multiplication', function(){
    var first=element(by.model('first'));
    var second=element(by.model('second'));
    var go=element(by.id('gobutton'));
    var select=element(by.model('operator'));
    var table=element(by.binding('result in memory'));
    var result=element(by.binding('latest'));

    function calculate(a,b){
        select.$('[value="DIVISION"]').click();
        first.sendKeys(a);
        second.sendKeys(b);
        go.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
      });

    it('Division',function(){
        calculate(10,5);
         expect(result.getText()).toEqual('2');
    });
    it('Division a',function(){
        calculate('a', 1);
        expect(result.getText()).toEqual('NaN');
   });

   it('Division empty', function(){
       calculate('','');
       expect(result.getText()).toEqual('NaN');
   });
})
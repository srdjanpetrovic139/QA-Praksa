describe('Super Calculator Testing',function(){
    
    var first=element(by.model('first'));
    var second=element(by.model('second'));
    var go=element(by.id('gobutton'));
    var select=element(by.model('operator'));
    var table=element(by.binding('result in memory'));
    var result=element(by.binding('latest'));
    
    function calculate(a,b){
        first.sendKeys(a);
        second.sendKeys(b);
        go.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
      });

     it('Adding',function(){
         calculate(1,1);
         expect(result.getText()).toEqual('2');
    });

     it('Adding a',function(){
         calculate('a', 1);
         expect(result.getText()).toEqual('NaN');
    });

    it('Adding empty', function(){
        calculate('','');
        expect(result.getText()).toEqual('NaN');
    });
});
import {moneyFormat} from '../Scripts/utility/money.js'

describe('test suite: money format',()=>{
  it('simple money format',()=>{
    expect(moneyFormat(2095)).toEqual('20.95');
    expect(moneyFormat(2094)).toEqual('20.94');
  });

  it('works with 0',()=>{
    expect(moneyFormat(0)).toEqual('0.00');
  });

  it('roundsoff decimal',()=>{
    expect(moneyFormat(2000.5)).toEqual('20.01');
    expect(moneyFormat(2000.8)).toEqual('20.01');
    expect(moneyFormat(2000.3)).toEqual('20.00');
  })

});
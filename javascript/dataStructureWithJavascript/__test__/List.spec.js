const { it, describe } = require('mocha');
const { expect } = require('chai');
const List = require('../List');

describe('List tests', () => {

  let list;

  beforeEach(() => {
    list = new List();
  });

  it('should allow push', () => {
    expect(list.length).to.equal(0);
    list.push('hello');
    expect(list.length).to.equal(1);
  })

  it('should allow get by address', () => {
    list.push('hello');
    expect(list.get(0)).to.equal('hello');
  });

  it('should allow pop', () => {
    list.push('hello');
    expect(list.pop()).to.equal('hello');
    expect(list.length).to.equal(0);
    expect(list.pop()).to.not.exist;
  });

  it('should allow unshift', () => {
    list.push('hello');
    list.push('world');
    list.unshift('zh');
    expect(list.length).to.equal(3);
    expect(list.get(0)).to.equal('zh');
  });

  it('should allow shift', () => {
    list.push('world');
    expect(list.length).to.equal(1);
    expect(list.shift()).to.equal('world');
    expect(list.length).to.equal(0);
    expect(list.shift()).to.not.exist;

  });
});

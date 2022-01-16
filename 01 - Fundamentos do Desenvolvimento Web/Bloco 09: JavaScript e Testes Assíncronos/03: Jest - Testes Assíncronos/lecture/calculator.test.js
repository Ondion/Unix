const sum = require('./sum');
const summationOf = require('./summationOf');

// console.log(sum(2,3));

describe('the function sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 5.1 + 6.55 to equal 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('adds -5 + -39 to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });

  it('adds 0 + -10 to equal -10', () => {
    expect(sum(0, -10)).toBe(-10);
  });
});

describe('the function summationOf', () => {
  it('exists', () => {
    expect(typeof summationOf).toBe('function');
  });

  it('summationOf 1 is 1', () => {
    expect(summationOf(1)).toBe(1);
  });

  it('summationOf 2 is 3', () => {
    expect(summationOf(2)).toBe(3);
  });

  it('summationOf 3 is 6', () => {
    expect(summationOf(3)).toBe(6);
  });

  it('throws an error when no parameter is given', () => {
    expect(
        () => { // <- o jest vai capturar o erro dessa função aqui!
            summationOf()
        }
    ).toThrow();
  });

  it("requires the parameter to be of type Number", () => {
      expect(
          () => {
              summationOf("1");
          }
      ).toThrow('O tipo do parâmetro deve ser Number');
  });

});

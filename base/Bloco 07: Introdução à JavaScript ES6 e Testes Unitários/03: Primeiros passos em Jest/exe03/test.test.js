const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};


describe('Bloco de testes 1', () => {


test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});

});

describe('Bloco de testes 2', () => {


  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });
  
  });

  describe('Bloco de testes 3', () => {


    test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
      expect(multiplyByTwo(4)).toBe(8);
    });
    test('testa se é lançado um erro quando number é indefinido', () => {
      expect(() => { multiplyByTwo() }).toThrow();
    });
    test('testa se a mensagem de erro é "number é indefinido"', () => {
      expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
    });

    test('5 - Teste de Substring', () => {
      expect('A escola que te ensina a programar, a aprender e a trabalhar').toMatch('prog');})
    
  });
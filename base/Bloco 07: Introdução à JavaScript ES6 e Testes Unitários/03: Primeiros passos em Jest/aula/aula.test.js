const summa = (a, b) => {
  if(typeof(a) != 'number' || typeof(b) != 'number'){
    throw new Error ('Erro! Entrada de não números!');
  };
  return a + b;
};

describe("bloco de testes sobre a aula", () => {

  it("Testa se a função existe:", () => {
    expect(typeof(summa)).toBe("function")
  })

  it("Teste se a soma de 1 + 1 = 2:", () => {
    expect(summa(1, 1)).toBe(2);
  })

  it ("Testa se a soma de 4,5 + 4,5 = 9:", () => {
    expect(summa(4.5, 4.5)).toBe(9)
  })

  it("Teste se a função lança um erro ao receber uma string:", () => {
    expect(() => {summa(a, 2)}).toThrow()
  })

  it("Testa se a função lança um erro especifico sobre entrada de string:", () => {
    expect(() => {summa(2, 'b')}).toThrow('Erro! Entrada de não números!')
  })




















  })
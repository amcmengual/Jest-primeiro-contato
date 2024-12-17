
const divisao = require('./divisao');

describe('Função divisao', () => {
  test('Deve retornar o resultado correto de a / b', () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test('Deve retornar 0 ao dividir por zero', () => {
    expect(divisao(10, 0)).toBe(0);
  });

  test('Deve retornar 0 se o resultado for Infinity', () => {
    expect(divisao(Number.MAX_VALUE, 0.0000000001)).toBe(0);
  });

  test('Deve funcionar com números negativos', () => {
    expect(divisao(-10, 2)).toBe(-5);
  });

  test('Deve funcionar com números decimais', () => {
    expect(divisao(7.5, 2.5)).toBe(3);
  });
});

const countOfChar = require('./index.js');

describe('Harf tekrar sıklığı testleri', () => {
  test("'Sprint 1 4. gün konusu diziler' metninde e harfi 1 tane olmalı", () => {
    expect(countOfChar('Sprint 1 4. gün konusu diziler', 'e')).toBe(1);
  });

  test("'Sprint 1 4. gün konusu diziler' metninde i harfi 3 tane olmalı", () => {
    expect(countOfChar('Sprint 1 4. gün konusu diziler', 'i')).toBe(3);
  });

  test('Büyük küçük harfe dikkat ediyor mu', () => {
    expect(countOfChar('Sprint 1 4. gün konusu diziler', 's')).toBe(2);
  });

  test('Boş metin için doğru sonucu dönüyor mu?', () => {
    expect(countOfChar('', 's')).toBe(0);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = countOfChar('Sprint 1 4. gün konusu diziler', 's');
    expect(typeof result).toBe('number');
  });
});
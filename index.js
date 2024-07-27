function countOfChar(metin, karekter) {
  /* kodlar buraya */
  if (metin.length < 1) {
    return 0;
  }
  let met = metin.toLowerCase();
  let count = 0;
  for (let i = 0; i < met.length; i++) {
    if (met[i] == karekter) {
      count++;
    }
  }

  return count;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = countOfChar;

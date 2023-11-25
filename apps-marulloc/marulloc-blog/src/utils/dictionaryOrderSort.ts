export const dictionaryOrderSort = (a: any, b: any) => {
  const numA = parseInt(a.name, 10);
  const numB = parseInt(b.name, 10);

  // 숫자가 같으면 문자열로 비교
  if (numA === numB) {
    return a.name.localeCompare(b.name);
  }

  // 숫자 비교
  return numA - numB;
};

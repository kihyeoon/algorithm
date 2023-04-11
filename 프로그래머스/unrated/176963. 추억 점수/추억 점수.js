function solution(name, yearning, photo) {
  const hash = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, {});

  const result = photo.map((photoPeople) => {
    return photoPeople.reduce((acc, person) => {
      return acc + (hash[person] || 0);
    }, 0);
  });

  return result;
}
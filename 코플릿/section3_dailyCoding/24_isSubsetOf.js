const isSubsetOf = function (base, sample) {
  const uni = [...new Set([...base, ...sample])];
  return uni.length === base.length;
};

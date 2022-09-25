function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    let temp = power(base, exponent / 2) % 94906249;
    return (temp * temp) % 94906249;
  } else {
    let temp = power(base, (exponent - 1) / 2) % 94906249;
    return (base * ((temp * temp) % 94906249)) % 94906249;
  }
}

const R = n => {
  console.log('functionR is called n:', n);
  if (n === 0) {
    console.log('functionR is 0, returning 1');
    return 1
  } else {
    console.log('intermediate result for 2 * functionR (', n-1, ')' );
    return 2 * R(n-1)
  }
}

console.log(R(3));
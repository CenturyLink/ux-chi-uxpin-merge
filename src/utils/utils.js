/* eslint-disable */
export function uuid4() {
  let uuid = '', ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
    }
  }
  return uuid;
}
/* eslint-enable */

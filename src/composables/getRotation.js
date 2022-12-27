function getRotation(degSpan, nCards, i) {
  const stagger = degSpan / (nCards - 1);
  const res = -degSpan / 2 + stagger * (i);
  return res + "deg";
}

export default getRotation
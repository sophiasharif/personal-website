function getTranslationX(xSpan, nCards, index) {
    const stagger = xSpan / (nCards - 1);
    const res = -xSpan / 2 + stagger * (index);
    return res + "%";
  }

export default getTranslationX
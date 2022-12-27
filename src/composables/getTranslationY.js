function getTranslationY(spanY, nCards, i) {
    const stagger =
      (spanY * 2) / (nCards - 1);
    const res = Math.abs(spanY - stagger * (i));
    return res + "%";
}

export default getTranslationY
function maskify(string: string): string {
  const maskedString = string.slice(0, -4).replace(/./g, "#");
  const unmasked4LastChars = string.slice(-4);
  return maskedString + unmasked4LastChars;
}

// module.exports = maskify;
export default maskify;

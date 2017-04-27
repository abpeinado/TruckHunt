module.exports.formatCentsToDollars = (priceAsCents) => {
  const priceAsString = priceAsCents.toString();
  const priceWithDecimals = `${priceAsString.slice(0, priceAsString.length - 2)}.${priceAsString.slice(priceAsString.length - 2)}`;
  return priceWithDecimals;
};

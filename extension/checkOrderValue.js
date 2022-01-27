module.exports = async (context, input) => {
  const { amount = 0 } = input.totals.find(total => total.type === 'subTotal') || {};

  if (amount < context.config.minimalOrderValue) {
    return { 'isOrderable': false };
  }
  return { 'isOrderable': true };
}

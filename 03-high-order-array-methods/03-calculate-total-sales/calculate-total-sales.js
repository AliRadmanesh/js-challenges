function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const totalWithTax = totalSales * (1 + taxRate / 100);
  return Math.round((totalWithTax + Number.EPSILON) * 100) / 100;
}

module.exports = calculateTotalSalesWithTax;

function formatCurrency(value, type) {
    format = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: type,
    }).format;
    return format(value);
  }
  module.exports = { formatCurrency };
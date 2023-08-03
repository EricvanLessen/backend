from javascript import require

data = require("./formatCurrency.js")

value = 2000000

print(data.formatCurrency(value, "USD"))
print(data.formatCurrency(value, "EUR"))
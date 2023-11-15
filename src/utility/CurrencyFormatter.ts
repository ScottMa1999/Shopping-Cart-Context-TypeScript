const FormatCurrency = new Intl.NumberFormat(undefined, { 
    style: "currency",
    currency: "USD"
 })

export function CurrencyFormatter(currency: number) {
  return FormatCurrency.format(currency);
}
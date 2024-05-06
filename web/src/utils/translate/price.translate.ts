export function translatePrice(price: number): string {
  return price.toFixed(2).toString().replace(".", ",");
};
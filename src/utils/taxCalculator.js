export function calcImportationTax(price) {
    const importationTax = 5;
    const cost = (importationTax * price) / 100;

    return Math.ceil(cost * 20) / 20;
}

export function calcSalesTax(price) {
    const salesTax = 20;
    const cost = (salesTax * price) / 100;

    return Math.ceil(cost * 20) / 20;
}

export const calcImportationTax = price => {
    const importationTax = 5;

    return (importationTax * price) / 100;
};

export const calcSalesTax = price => {
    const salesTax = 20;

    return (salesTax * price) / 100;
};

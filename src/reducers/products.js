const initialState = [
    {
        id: 1,
        name: "Travel book",
        price: 12.49,
        salesTax: false,
        importationTax: false,
        category: "books",
    },
    {
        id: 2,
        name: "Music CD",
        price: 14.99,
        salesTax: true,
        importationTax: false,
        category: "food",
    },
    {
        id: 3,
        name: "Chocolate bar",
        price: 0.85,
        salesTax: false,
        importationTax: false,
        category: "food",
    },
    {
        id: 4,
        name: "Imported box of chocolates",
        price: 10.0,
        salesTax: false,
        importationTax: true,
        category: "food",
    },
    {
        id: 5,
        name: "Imported bottle of perfume",
        price: 47.5,
        salesTax: true,
        importationTax: true,
        category: "beauty",
    },
    {
        id: 6,
        name: "Bottle of perfume",
        price: 18.99,
        salesTax: true,
        importationTax: false,
        category: "beauty",
    },
    {
        id: 7,
        name: "Packet of painkillers",
        price: 9.75,
        salesTax: false,
        importationTax: false,
        category: "medical",
    },
];

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return [...state];
    }
}

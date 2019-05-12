const initialState = [
    {
        id: 1,
        name: "Travel book",
        price: 12.49,
        taxable: false,
        imported: false,
        category: "books",
    },
    {
        id: 2,
        name: "Music CD",
        price: 14.99,
        taxable: true,
        imported: false,
        category: "food",
    },
    {
        id: 3,
        name: "Chocolate bar",
        price: 0.85,
        taxable: false,
        imported: false,
        category: "food",
    },
    {
        id: 4,
        name: "Imported box of chocolates",
        price: 10.0,
        taxable: false,
        imported: true,
        category: "food",
    },
    {
        id: 5,
        img:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-perfume-index-1556207542.jpg",
        name: "Imported bottle of perfume",
        price: 47.5,
        taxable: true,
        imported: true,
        category: "beauty",
    },
    {
        id: 6,
        img:
            "https://www.rd.com/wp-content/uploads/2017/08/The-REAL-Difference-Between-Cheap-and-Expensive-Perfumes-shutterstock_596138639-ft.jpg",
        name: "Bottle of perfume",
        price: 18.99,
        taxable: true,
        imported: false,
        category: "beauty",
    },
    {
        id: 7,
        img:
            "http://home.bt.com/images/are-you-taking-too-many-painkillers-136399141088703901-150709130808.jpg",
        name: "Packet of painkillers",
        price: 9.75,
        taxable: false,
        imported: false,
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

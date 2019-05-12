const initialState = [
    {
        id: 1,
        name: "Travel book",
        image:
            "https://image.freepik.com/free-photo/black-pen-white-open-book-white-background_7247-108.jpg",
        price: 12.49,
        salesTax: false,
        importationTax: false,
        category: "Books",
    },
    {
        id: 2,
        name: "Music CD",
        image:
            "https://image.freepik.com/free-photo/compact-disc-with-white-background_1187-1591.jpg",
        price: 14.99,
        salesTax: true,
        importationTax: false,
        category: "Food",
    },
    {
        id: 3,
        name: "Chocolate bar",
        image: "http://www.allwhitebackground.com/images/2/2039.jpg",
        price: 0.85,
        salesTax: false,
        importationTax: false,
        category: "Food",
    },
    {
        id: 4,
        name: "Imported box of chocolates",
        image:
            "https://forgetsugarfriday.com/wp-content/uploads/2018/12/keto-chocolate-peppermint-fat-bombs-3.jpg",
        price: 10.0,
        salesTax: false,
        importationTax: true,
        category: "Food",
    },
    {
        id: 5,
        name: "Imported bottle of perfume",
        image:
            "https://piviso.com/uploads/photo/2018-06-md/bleu-de-chanel-perfume-bottle-isolated-on-white-background-5b3275ad3d162.jpg",
        price: 47.5,
        salesTax: true,
        importationTax: true,
        category: "Beauty",
    },
    {
        id: 6,
        name: "Bottle of perfume",
        image: "http://www.allwhitebackground.com/images/2/2033.jpg",
        price: 18.99,
        salesTax: true,
        importationTax: false,
        category: "Beauty",
    },
    {
        id: 7,
        name: "Packet of painkillers",
        image:
            "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3728356/300/200/m1/fpnw/wm0/hwynurcjyjjtdrpcn1kmwfoqpcbpmfqhkdselnc1cmbcrhao87tlrhizp4aubcj9-.jpg?1513161887&s=c39b29b04026a4ab542efa702872c532",
        price: 9.75,
        salesTax: false,
        importationTax: false,
        category: "Medical",
    },
];

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return [...state];
    }
}

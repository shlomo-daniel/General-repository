const products = [
    {
        "id": 1,
        "name": "Apples - Sliced / Wedge",
        "price": 11,
        "discount": 19,
        "madeIn": "Philippines",
        "color": "Maroon"
    },
    {
        "id": 2,
        "name": "Aspic - Light",
        "price": 1,
        "discount": null,
        "madeIn": "Estonia",
        "color": "Indigo"
    },
    {
        "id": 3,
        "name": "Oil - Sunflower",
        "price": 44,
        "discount": null,
        "madeIn": "Iran",
        "color": "Yellow"
    },
    {
        "id": 4,
        "name": "Foam Tray S2",
        "price": 29,
        "discount": 5,
        "madeIn": "Peru",
        "color": "Green"
    },
    {
        "id": 5,
        "name": "Butter - Salted",
        "price": 19,
        "discount": null,
        "madeIn": "Philippines",
        "color": "Puce"
    },
    {
        "id": 6,
        "name": "Mussels - Cultivated",
        "price": 28,
        "discount": 24,
        "madeIn": "France",
        "color": "Goldenrod"
    },
    {
        "id": 7,
        "name": "Beets - Pickled",
        "price": 47,
        "discount": null,
        "madeIn": "United Kingdom",
        "color": "Purple"
    },
    {
        "id": 8,
        "name": "Soy Protein",
        "price": 7,
        "discount": null,
        "madeIn": "Philippines",
        "color": "Fuscia"
    },
    {
        "id": 9,
        "name": "Table Cloth 81x81 White",
        "price": 46,
        "discount": 31,
        "madeIn": "Russia",
        "color": "Pink"
    },
    {
        "id": 10,
        "name": "Leeks - Large",
        "price": 33,
        "discount": 16,
        "madeIn": "Ethiopia",
        "color": "Goldenrod"
    },
    {
        "id": 11,
        "name": "Rum - Dark, Bacardi, Black",
        "price": 16,
        "discount": 31,
        "madeIn": "Brazil",
        "color": "Indigo"
    },
    {
        "id": 12,
        "name": "Veal - Striploin",
        "price": 17,
        "discount": 34,
        "madeIn": "China",
        "color": "Goldenrod"
    },
    {
        "id": 13,
        "name": "Thermometer Digital",
        "price": 36,
        "discount": null,
        "madeIn": "United States",
        "color": "Puce"
    },
    {
        "id": 14,
        "name": "Beer - Guiness",
        "price": 27,
        "discount": 37,
        "madeIn": "Mali",
        "color": "Yellow"
    },
    {
        "id": 15,
        "name": "Cheese - La Sauvagine",
        "price": 20,
        "discount": 14,
        "madeIn": "Portugal",
        "color": "Khaki"
    },
    {
        "id": 16,
        "name": "Lid - Translucent, 3.5 And 6 Oz",
        "price": 20,
        "discount": null,
        "madeIn": "South Georgia and the South Sandwich Islands",
        "color": "Aquamarine"
    },
    {
        "id": 17,
        "name": "Bread - Roll, Italian",
        "price": 18,
        "discount": null,
        "madeIn": "Peru",
        "color": "Indigo"
    },
    {
        "id": 18,
        "name": "Bar Nature Valley",
        "price": 16,
        "discount": null,
        "madeIn": "Russia",
        "color": "Orange"
    },
    {
        "id": 19,
        "name": "Puree - Mocha",
        "price": 14,
        "discount": 12,
        "madeIn": "China",
        "color": "Violet"
    },
    {
        "id": 20,
        "name": "Cheese - Camembert",
        "price": 30,
        "discount": 7,
        "madeIn": "Brazil",
        "color": "Purple"
    },
    {
        "id": 21,
        "name": "Flavouring - Rum",
        "price": 38,
        "discount": 4,
        "madeIn": "Brazil",
        "color": "Red"
    },
    {
        "id": 22,
        "name": "Nori Sea Weed - Gold Label",
        "price": 5,
        "discount": null,
        "madeIn": "Myanmar",
        "color": "Purple"
    },
    {
        "id": 23,
        "name": "Pail - 15l White, With Handle",
        "price": 46,
        "discount": 11,
        "madeIn": "Russia",
        "color": "Aquamarine"
    },
    {
        "id": 24,
        "name": "Pork - Kidney",
        "price": 41,
        "discount": 10,
        "madeIn": "Russia",
        "color": "Indigo"
    },
    {
        "id": 25,
        "name": "Marjoram - Dried, Rubbed",
        "price": 45,
        "discount": 9,
        "madeIn": "Ukraine",
        "color": "Fuscia"
    },
    {
        "id": 26,
        "name": "Iced Tea Concentrate",
        "price": 30,
        "discount": null,
        "madeIn": "Canada",
        "color": "Indigo"
    },
    {
        "id": 27,
        "name": "Wine - Penfolds Koonuga Hill",
        "price": 31,
        "discount": null,
        "madeIn": "Kenya",
        "color": "Mauv"
    },
    {
        "id": 28,
        "name": "Bread - Assorted Rolls",
        "price": 21,
        "discount": null,
        "madeIn": "China",
        "color": "Mauv"
    },
    {
        "id": 29,
        "name": "Seedlings - Mix, Organic",
        "price": 20,
        "discount": 1,
        "madeIn": "China",
        "color": "Puce"
    },
    {
        "id": 30,
        "name": "Cheese - Le Cheve Noir",
        "price": 2,
        "discount": null,
        "madeIn": "Thailand",
        "color": "Crimson"
    },
    {
        "id": 31,
        "name": "Onions - Vidalia",
        "price": 43,
        "discount": 9,
        "madeIn": "China",
        "color": "Blue"
    },
    {
        "id": 32,
        "name": "Corn Meal",
        "price": 40,
        "discount": 21,
        "madeIn": "Nigeria",
        "color": "Puce"
    },
    {
        "id": 33,
        "name": "Turkey - Oven Roast Breast",
        "price": 50,
        "discount": 12,
        "madeIn": "China",
        "color": "Aquamarine"
    },
    {
        "id": 34,
        "name": "Wine - White, Pelee Island",
        "price": 16,
        "discount": null,
        "madeIn": "France",
        "color": "Purple"
    },
    {
        "id": 35,
        "name": "Bag Clear 10 Lb",
        "price": 26,
        "discount": null,
        "madeIn": "Poland",
        "color": "Indigo"
    },
    {
        "id": 36,
        "name": "Numi - Assorted Teas",
        "price": 40,
        "discount": 10,
        "madeIn": "Kosovo",
        "color": "Aquamarine"
    },
    {
        "id": 37,
        "name": "Bread - Roll, Whole Wheat",
        "price": 9,
        "discount": null,
        "madeIn": "Ukraine",
        "color": "Turquoise"
    },
    {
        "id": 38,
        "name": "Muffin - Zero Transfat",
        "price": 26,
        "discount": 14,
        "madeIn": "Greece",
        "color": "Mauv"
    },
    {
        "id": 39,
        "name": "Octopus - Baby, Cleaned",
        "price": 37,
        "discount": 14,
        "madeIn": "Venezuela",
        "color": "Green"
    },
    {
        "id": 40,
        "name": "Table Cloth 81x81 White",
        "price": 38,
        "discount": null,
        "madeIn": "China",
        "color": "Khaki"
    },
    {
        "id": 41,
        "name": "Onions - Pearl",
        "price": 35,
        "discount": 22,
        "madeIn": "Indonesia",
        "color": "Indigo"
    },
    {
        "id": 42,
        "name": "Tomatoes",
        "price": 37,
        "discount": 27,
        "madeIn": "China",
        "color": "Aquamarine"
    },
    {
        "id": 43,
        "name": "Flour - Pastry",
        "price": 5,
        "discount": 38,
        "madeIn": "China",
        "color": "Teal"
    },
    {
        "id": 44,
        "name": "Yams",
        "price": 41,
        "discount": 2,
        "madeIn": "China",
        "color": "Orange"
    },
    {
        "id": 45,
        "name": "Puff Pastry - Slab",
        "price": 46,
        "discount": 27,
        "madeIn": "Finland",
        "color": "Teal"
    },
    {
        "id": 46,
        "name": "Salt - Celery",
        "price": 9,
        "discount": 13,
        "madeIn": "Philippines",
        "color": "Green"
    },
    {
        "id": 47,
        "name": "Nantucket - Carrot Orange",
        "price": 42,
        "discount": 17,
        "madeIn": "Vietnam",
        "color": "Khaki"
    },
    {
        "id": 48,
        "name": "Tea - Green",
        "price": 43,
        "discount": null,
        "madeIn": "China",
        "color": "Puce"
    },
    {
        "id": 49,
        "name": "Onions - Cooking",
        "price": 49,
        "discount": 9,
        "madeIn": "Egypt",
        "color": "Crimson"
    },
    {
        "id": 50,
        "name": "Spinach - Spinach Leaf",
        "price": 22,
        "discount": null,
        "madeIn": "Poland",
        "color": "Fuscia"
    }
]
export interface LunchMenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface LunchMenuSection {
  category: string;
  items: LunchMenuItem[];
}

export const lunchHours = "Monday – Friday, 11:45 AM – 3:00 PM";

export const lunchMenu: LunchMenuSection[] = [
  {
    category: "Lunch Appetizers",
    items: [
      {
        name: "Edamame",
        description: "Steamed soybeans with salt. Add spicy for +1.",
        price: "6.5",
      },
      {
        name: "House Salad",
        description: "Lettuce, carrots, cucumber, and cabbage with ginger dressing.",
        price: "5.5",
      },
      {
        name: "Wakame Salad",
        description: "Seaweed tossed in sesame oil and soy vinaigrette.",
        price: "6.5",
      },
      {
        name: "Squid Salad",
        description: "Tender squid and vegetables in soy vinaigrette dressing.",
        price: "8",
      },
      {
        name: "Miso Soup",
        description: "Tofu, seaweed, and scallion in savory soy broth.",
        price: "5",
      },
      {
        name: "Wakame Soup",
        description: "Seaweed, tofu, scallion in dashi stock.",
        price: "5",
      },
      {
        name: "Pajun",
        description: "Crispy Korean pancake. Add pork, shrimp, or seafood for +4.",
        price: "15",
      },
      {
        name: "Kimchee Pancake",
        price: "17",
      },
      {
        name: "Crab Jun",
        description: "Pan-fried crabmeat and vegetables.",
        price: "12",
      },
      {
        name: "Shumai",
        description: "Shrimp dumplings.",
        price: "12",
      },
      {
        name: "Gyoza",
        description: "Korean crispy dumplings. Choice of pork, shrimp, chicken, or beef.",
        price: "12",
      },
      {
        name: "Shrimp Tempura",
        description: "Three shrimp and two pieces of vegetable tempura.",
        price: "12",
      },
      {
        name: "Harumaki",
        description: "Vegetable spring roll.",
        price: "10",
      },
      {
        name: "Crispy Korean Kimbugak",
        description: "Crispy Korean seaweed with rice paper and special sauce.",
        price: "8",
      },
    ],
  },
  {
    category: "Noodles & Rice",
    items: [
      {
        name: "Bibim Noodle",
        description: "Noodles, beef bulgogi, and assorted vegetables in gochujang sauce.",
        price: "16",
      },
      {
        name: "Crispy Seafood Noodle",
        description: "Stir-fried seafood in savory gravy over thin crispy noodles.",
        price: "20",
      },
      {
        name: "Yaki Udon or Soba",
        description: "Stir-fried egg noodles with vegetables. Add beef, chicken, pork, or shrimp for +4.",
        price: "17",
      },
      {
        name: "Bibimbap",
        description: "Rice topped with marinated vegetables and beef bulgogi. Served with two Korean side dishes.",
        price: "15",
      },
      {
        name: "Dolsot Bibimbap",
        description: "Bibimbap served in a hot stone bowl with two Korean side dishes.",
        price: "15",
      },
    ],
  },
  {
    category: "Sushi & Sashimi",
    items: [
      {
        name: "Sushi Lunch",
        description: "Tuna, salmon, white fish, escolar, and shrimp. Served with soup or salad.",
        price: "15",
      },
      {
        name: "Sashimi Lunch",
        description: "Three tuna, three salmon, and three chef's-choice pieces, including white fish. Served with soup or salad and rice.",
        price: "16",
      },
    ],
  },
  {
    category: "Korean Plates",
    items: [
      {
        name: "Chapchae",
        description: "Stir-fried clear noodles with Korean mushrooms and vegetables.",
        price: "15",
      },
      {
        name: "Bulgogi",
        description: "Thin-sliced beef marinated in Korean sweet sauce.",
        price: "23",
      },
      {
        name: "Chicken Bulgogi",
        description: "Small-cut chicken marinated in Korean BBQ sauce.",
        price: "21",
      },
      {
        name: "Pork Bulgogi",
        description: "Spicy pork marinated in Korean sauce.",
        price: "21",
      },
      {
        name: "LA Kalbi",
        description: "Korean BBQ short ribs marinated in sweet soy marinade.",
        price: "29",
      },
    ],
  },
  {
    category: "Teriyaki & Tempura",
    items: [
      {
        name: "Chicken Teriyaki",
        description: "Grilled chicken with teriyaki sauce.",
        price: "20",
      },
      {
        name: "Shrimp Teriyaki",
        description: "Grilled shrimp with teriyaki sauce.",
        price: "22",
      },
      {
        name: "Shrimp Tempura",
        description: "Five large tempura shrimp with tempura sauce.",
        price: "20",
      },
    ],
  },
  {
    category: "Soups",
    items: [
      {
        name: "Korean Ramen",
        description: "Spicy Korean noodle soup with vegetables.",
        price: "16",
      },
      {
        name: "Mandu Guk",
        description: "Pork and vegetable dumpling soup.",
        price: "16",
      },
      {
        name: "Sun Du Bu",
        description: "Spicy soft tofu soup with onion, zucchini, cabbage, mushrooms, and scallions.",
        price: "15",
      },
      {
        name: "Tempura Udon",
        description: "Udon noodle soup with three pieces of shrimp tempura.",
        price: "16",
      },
    ],
  },
];
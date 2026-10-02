export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    category: "Sushi Bar Appetizers",
    items: [
      {
        name: "Tuna Tataki",
        description: "Thin sliced seared tuna, scallion with ponzu.",
        price: "15",
      },
      {
        name: "Tuna Tartare",
        description: "Chopped tuna, avocado, masago, mayo, chili oil; spicy tuna tower style.",
        price: "18",
      },
      {
        name: "Robbie Appetizer",
        description: "Chopped fresh tuna, crunchy flakes, chili oil, mayo, masago.",
        price: "16",
      },
      {
        name: "Spicy Beef or Tuna Yukhwe",
        description: "Asian style tartare with mixed spices and a touch of sesame oil.",
        price: "16",
      },
      {
        name: "House Combo Sunomono",
        description: "Crab, shrimp, conch, octopus with Japanese-style sweet vinegar sauce and thin sliced cucumber.",
        price: "13",
      },
      {
        name: "Spicy Conch or Octopus",
        description: "Chopped cucumber and scallion, marinated with spicy kimchi sauce.",
        price: "16",
      },
      {
        name: "Sushi App",
        description: "Tuna, salmon, escolar, shrimp, crab.",
        price: "14",
      },
      {
        name: "Sashimi App",
        description: "2 tuna, 2 salmon, 2 escolar.",
        price: "14",
      },
    ],
  },
  {
    category: "Salad",
    items: [
      {
        name: "House Salad",
        description: "Lettuce, cucumber, carrots, tomato with ginger dressing.",
        price: "5.5",
      },
      {
        name: "Avocado Salad",
        description: "House salad with avocado on top.",
        price: "9.5",
      },
      {
        name: "Hamsame Salad",
        description: "Clear rice noodle with spicy sauce.",
        price: "7.5",
      },
      {
        name: "Sashimi Salad",
        description: "Double-size house salad with sliced fish on top.",
        price: "16",
      },
      {
        name: "Wakame Salad",
        description: "Seaweed salad.",
        price: "7",
      },
      {
        name: "Chuka Ika",
        description: "Squid salad with mountain vegetables.",
        price: "8",
      },
      {
        name: "Spicy Tuna Salad",
        description: "Spring mix with sliced tuna and tomato, spicy pepper, house special dressing.",
        price: "15",
      },
    ],
  },
  {
    category: "Cucumber Wraps",
    items: [
      {
        name: "Kanisu",
        description: "Imitation crab, avocado, masago, wrapped with shaved cucumber; served with ponzu sauce.",
        price: "13",
      },
      {
        name: "K-Roll",
        description: "Shrimp and crab stick, avocado, masago, wrapped with shaved cucumber; served with ponzu sauce.",
        price: "14",
      },
      {
        name: "Trudy Roll",
        description: "Tuna, avocado, masago wrapped in cucumber with ponzu sauce.",
        price: "15",
      },
      {
        name: "Rainbow Naruto Maki",
        description: "Tuna, salmon, hamachi, avocado, masago wrapped in cucumber with ponzu sauce.",
        price: "16",
      },
    ],
  },
  {
    category: "Soup",
    items: [
      {
        name: "Miso Soup",
        description: "Soybean soup with tofu, scallion, and a little wakame.",
        price: "5.5",
      },
      {
        name: "Wakame Soup",
        description: "Seaweed soup with tofu.",
        price: "5.5",
      },
    ],
  },
  {
    category: "Kitchen Appetizers",
    items: [
      {
        name: "Shishito Pepper",
        description: "Fried Japanese pepper with salt.",
        price: "10",
      },
      {
        name: "Edamame",
        description: "Steamed soy bean with sea salt.",
        price: "7",
      },
      {
        name: "Kimchi or Japanese Pickles",
        description: "Choice of kimchi or Japanese pickles.",
        price: "5",
      },
      {
        name: "Shumai",
        description: "Steamed shrimp dumpling.",
        price: "10",
      },
      {
        name: "Shrimp Tempura",
        description: "Lightly battered shrimp, deep fried.",
        price: "15",
      },
      {
        name: "Harumaki",
        description: "2 crispy vegetable spring rolls.",
        price: "8",
      },
      {
        name: "Gyoza",
        description: "6 fried dumplings: vegetable, spicy beef, or pork.",
        price: "10",
      },
      {
        name: "Yasai Itame",
        description: "Stir fried mixed vegetables with bean sprouts. Add Protein: beef, chicken, pork, shrimp +4.",
        price: "13",
      },
      {
        name: "Fried Calamari",
        description: "Served with brown sauce.",
        price: "13",
      },
      {
        name: "Tako Yaki",
        description: "Fried octopus balls with mayo.",
        price: "13",
      },
    ],
  },
  {
    category: "Otsumami",
    items: [
      {
        name: "Crispy Bok Choy",
        description: "Fresh fried baby bok choy with garlic soy sauce.",
        price: "10",
      },
      {
        name: "Scallop Butter Yaki",
        description: "Stir fried scallop with soy butter.",
        price: "Market Price",
      },
      {
        name: "Cheese Age",
        description: "Crab and cream cheese dumpling, deep fried.",
        price: "10",
      },
      {
        name: "Corn Cheese",
        description: "Creamed corn with melted cheese.",
        price: "10",
      },
      {
        name: "Hamachi Kama",
        description: "Grilled yellowtail collars.",
        price: "17",
      },
      {
        name: "Shrimp Karage",
        price: "15",
      },
      {
        name: "Chicken Karage",
        price: "12",
      },
      {
        name: "Vegetable Tempura",
        description: "Sweet potato, broccoli, onion, zucchini.",
        price: "12",
      },
      {
        name: "Eggplant",
        description: "Marinated eggplant / grilled eggplant.",
        price: "8",
      },
    ],
  },
  {
    category: "Tofu",
    items: [
      {
        name: "Cold Tofu",
        description: "Plain cold tofu with spicy Korean sauce or Japanese plain tofu.",
        price: "5.5",
      },
      {
        name: "Kimchee Cold Tofu",
        description: "Cold tofu with chopped kimchi and spicy sauce.",
        price: "9",
      },
      {
        name: "Age Tofu",
        description: "Fried tofu with hot spiced house broth.",
        price: "8",
      },
      {
        name: "Yang Nyeom Tofu",
        description: "Steamed tofu with Korean-style spicy sauce on top.",
        price: "12",
      },
      {
        name: "Kimchi Tofu Bokeum",
        description: "Steamed tofu with stir fried kimchi. Add protein: beef, chicken, or pork.",
        price: "15",
      },
    ],
  },
  {
    category: "Dinner Set",
    items: [
      {
        name: "Sashimi A",
        description: "9 pieces. Comes with soup.",
        price: "17",
      },
      {
        name: "Sashimi B",
        description: "14 pieces. Comes with soup.",
        price: "29",
      },
      {
        name: "Sashimi C",
        description: "21 pieces of fish. Comes with soup.",
        price: "40",
      },
      {
        name: "Sushi Regular",
        description: "6 pieces of sushi and one California Roll. Comes with soup.",
        price: "18",
      },
      {
        name: "Sushi Dinner",
        description: "9 pieces of sushi with tuna roll. Comes with soup.",
        price: "23",
      },
      {
        name: "Sushi Deluxe",
        description: "12 pieces of sushi with tuna roll and JB Roll. Comes with soup.",
        price: "40",
      },
    ],
  },
  {
    category: "Roll Set",
    items: [
      {
        name: "Rainbow Set",
        description: "Rainbow Roll, 2 tuna and 2 salmon. Comes with soup.",
        price: "23",
      },
      {
        name: "Shrimp Set",
        description: "Shrimp tempura roll with 4 pieces shrimp. Comes with soup.",
        price: "19",
      },
      {
        name: "Crab Set",
        description: "California Roll with 4 pieces crab sushi. Comes with soup.",
        price: "19",
      },
      {
        name: "California Set",
        description: "California Roll with 2 tuna and 2 salmon. Comes with soup.",
        price: "19",
      },
      {
        name: "JB Set",
        description: "JB Roll with 4 pieces salmon. Comes with soup.",
        price: "20",
      },
    ],
  },
  {
    category: "Sushi & Sashimi Combination",
    items: [
      {
        name: "Combo One",
        description: "5 pieces sushi, 6 pieces sashimi, California Roll.",
        price: "35",
      },
      {
        name: "Combo Two",
        description: "10 pieces sushi, 12 pieces sashimi, California Roll, and tuna or spicy tuna roll.",
        price: "70",
      },
      {
        name: "Combo Three",
        description: "15 sushi, 15 sashimi with tuna roll, California Roll, and JB Roll.",
        price: "105",
      },
    ],
  },
  {
    category: "Maki / Basic Roll",
    items: [
      {
        name: "Tuna Roll",
        description: "Fresh tuna.",
        price: "7.5",
      },
      {
        name: "Salmon Roll",
        description: "Fresh salmon.",
        price: "7.5",
      },
      {
        name: "Hamachi Roll",
        description: "Yellowtail snapper.",
        price: "8.5",
      },
      {
        name: "Avocado Roll",
        description: "California avocado.",
        price: "5",
      },
      {
        name: "Unagi Roll",
        description: "Freshwater eel.",
        price: "7.5",
      },
      {
        name: "Kanpyo Roll",
        description: "Marinated dried gourd strips.",
        price: "6",
      },
    ],
  },
  {
    category: "Vegetable Rolls",
    items: [
      {
        name: "Veggie Roll",
        description: "Avocado, cucumber, carrots.",
        price: "8",
      },
      {
        name: "Salad Roll",
        description: "Lettuce, cucumber, avocado, carrots, tomato w/ ginger dressing.",
        price: "9",
      },
      {
        name: "Japanese Veg Roll",
        description: "Kanpyo, gobo, shiitake mushroom, cucumber, avocado.",
        price: "10",
      },
      {
        name: "Cucumber Roll",
        description: "Fresh cucumber.",
        price: "5",
      },
    ],
  },
  {
    category: "Donburi / Rice Bowls",
    items: [
      {
        name: "Chirashi",
        description: "Assorted sashimi over rice.",
        price: "28",
      },
      {
        name: "Unagi Don",
        description: "Broiled eel on top of rice.",
        price: "28",
      },
      {
        name: "Sake Don",
        description: "Salmon on top of sushi rice.",
        price: "28",
      },
      {
        name: "Tekka Don",
        description: "Tuna on top of sushi rice.",
        price: "28",
      },
    ],
  },
  {
    category: "Ramen",
    items: [
      {
        name: "Shoyu Ramen",
        description: "Fresh ramen with bamboo shoots, bean sprouts, scallion, egg, and yakibuta (braised pork). Shoyu broth.",
        price: "17",
      },
      {
        name: "Miso Ramen",
        description: "Fresh ramen with bamboo shoots, bean sprouts, scallion, egg, and yakibuta (braised pork). Miso broth.",
        price: "17",
      },
      {
        name: "Kento Ramen",
        description: "Fresh ramen with bamboo shoots, bean sprouts, scallion, and egg. Vegetable broth with seafood; no yakibuta.",
        price: "18",
      },
      {
        name: "Tokyo Tonkatsu Ramen",
        description: "Fresh ramen with bamboo shoots, bean sprouts, scallion, egg, and yakibuta (braised pork). Tonkatsu broth.",
        price: "17",
      },
      {
        name: "Kimchi Ramen",
        description: "Fresh ramen with bamboo shoots, bean sprouts, scallion, egg, and yakibuta (braised pork). Spicy Korean kimchee ramen.",
        price: "16",
      },
    ],
  },
  {
    category: "Noodles & More",
    items: [
      {
        name: "House Special Noodles",
        description: "Stir-fried seafood and vegetables in savory white sauce over noodles.",
        price: "21",
      },
      {
        name: "Jajang Myun",
        description: "Stir-fried pork and vegetables in savory and sweet black bean sauce over noodles.",
        price: "17",
      },
      {
        name: "Champong",
        description: "Spicy stir-fried seafood and vegetable soup over noodles.",
        price: "19",
      },
    ],
  },
  {
    category: "Korean Soup / Jjigae",
    items: [
      {
        name: "Dwenjang Jjigae",
        description: "Traditional soybean stew with tofu, beef, and vegetables. Served with rice and banchan (assorted side dishes).",
        price: "17",
      },
      {
        name: "Kimchi Jjigae",
        description: "Kimchi stew with tofu and pork. Served with rice and banchan (assorted side dishes).",
        price: "17",
      },
      {
        name: "Yukae Jang",
        description: "Spicy beef and scallion soup with traditional Korean vegetables. Served with rice and banchan (assorted side dishes).",
        price: "19",
      },
      {
        name: "Gomtang",
        description: "Beef bone broth with beef and scallion. Served with rice and banchan (assorted side dishes).",
        price: "19",
      },
      {
        name: "Daegu Jjigae",
        description: "Cod fish with vegetables in spicy soup. Served with rice and banchan (assorted side dishes).",
        price: "19",
      },
      {
        name: "Mandu Guk",
        description: "Dumpling soup. Served with rice and banchan (assorted side dishes).",
        price: "17",
      },
      {
        name: "Tteok Guk",
        description: "Traditional rice cake soup with beef in clear broth. Served with rice and banchan (assorted side dishes).",
        price: "18",
      },
    ],
  },
  {
    category: "Korean BBQ",
    items: [
      {
        name: "Kalbi",
        description: "Korean short ribs marinated in sweet and savory barbeque soy sauce. Served with rice and banchan (assorted side dishes).",
        price: "29",
      },
      {
        name: "Bulgogi",
        description: "Thinly sliced ribeye marinated in sweet and savory barbeque soy sauce. Served with rice and banchan (assorted side dishes).",
        price: "25",
      },
      {
        name: "Pork Bulgogi",
        description: "Spicy marinated pork. Served with rice and banchan (assorted side dishes).",
        price: "25",
      },
      {
        name: "Chicken Bulgogi",
        description: "Chicken marinated with bulgogi sauce. Served with rice and banchan (assorted side dishes).",
        price: "24",
      },
      {
        name: "Samgyupsal",
        description: "Grilled crispy fresh pork belly with salt & pepper; comes with dipping sauce. Served with rice and banchan (assorted side dishes).",
        price: "25",
      },
      {
        name: "Bulgogi Jungol",
        description: "Bulgogi with assorted vegetables and vermicelli noodles, served inside broth. Served with rice and banchan (assorted side dishes).",
        price: "34",
      },
    ],
  },
  {
    category: "Korean BBQ Add-ons",
    items: [
      {
        name: "Side Samjang Set",
        description: "Traditional Korean BBQ lettuce wraps: samjang (bean paste), romaine lettuce, and sliced garlic.",
        price: "5",
      },
      {
        name: "Side Pajeori",
        description: "Thinly sliced scallion and lettuce salad for grilled meat.",
        price: "5",
      },
    ],
  },
  {
    category: "House Special Rolls",
    items: [
      {
        name: "Andy Roll",
        description: "Cooked salmon, white fish, scallions, masago, eel sauce, and tempura flakes.",
        price: "17",
      },
      {
        name: "Rocky Roll",
        description: "Tuna, scallion, masago, tempura flakes, chili oil, and mayo.",
        price: "19",
      },
      {
        name: "Monica Roll",
        description: "Avocado, masago, cucumber; topped with tuna and salmon.",
        price: "19",
      },
      {
        name: "Japanese Village",
        description: "Tuna, salmon, hamachi, avocado, inside out with masago.",
        price: "19",
      },
      {
        name: "Dynamite Roll",
        description: "Shrimp tempura, lettuce, spicy mayo, rolled inside out and topped with masago.",
        price: "16",
      },
      {
        name: "Dynamite Roll II",
        description: "Eel roll, inside out, topped with avocado and dynamite.",
        price: "26",
      },
      {
        name: "Spider Roll",
        description: "Fried soft shell crab, avocado, asparagus, scallion, and masago; topped with eel sauce.",
        price: "17",
      },
      {
        name: "Bonita Roll",
        description: "Tuna, salmon, avocado inside out; masago on top.",
        price: "18",
      },
      {
        name: "Dancing Eel Roll",
        description: "California roll with eel on top.",
        price: "16",
      },
      {
        name: "Las Olas Roll",
        description: "Avocado, masago, cucumber inside out; tuna on top.",
        price: "16",
      },
      {
        name: "Dream Roll",
        description: "Avocado and masago inside out, topped with tuna, hamachi, and salmon.",
        price: "18",
      },
      {
        name: "Kitty Roll",
        description: "Salmon and cream cheese inside out, topped with avocado and tuna.",
        price: "18",
      },
      {
        name: "Kim Roll",
        description: "Tempura sweet potato and broccoli rolled inside out, topped with tuna and avocado.",
        price: "13",
      },
      {
        name: "Tokyo Roll",
        description: "Shrimp tempura with avocado on top.",
        price: "16",
      },
      {
        name: "Nina Roll",
        description: "Shrimp tempura, crab, masago, scallions, mayo, and sweet honey miso sauce.",
        price: "18",
      },
      {
        name: "Spicy Lobster",
        description: "Lobster tempura inside out with jalapeño, masago, scallions, and spicy mayo.",
        price: "33",
      },
      {
        name: "Holiday Roll",
        description: "Salmon, asparagus, and avocado rolled and topped with tilapia tempura, spicy mayo, eel sauce, and ao nori.",
        price: "19",
      },
      {
        name: "Holiday Roll II",
        description: "Holiday Roll I with Robby appetizer on top.",
        price: "31",
      },
      {
        name: "Scott Roll",
        description: "California roll with Rob App on top.",
        price: "24",
      },
      {
        name: "JB Tempura Roll",
        description: "Salmon and cream cheese, deep fried, with spicy mayo and eel sauce.",
        price: "15",
      },
      {
        name: "French Roll",
        description: "Shrimp, avocado, cucumber, masago, wrapped in soy paper with honey miso sauce.",
        price: "16",
      },
      {
        name: "Under the Bridge Roll",
        description: "Shrimp, crab salad, masago, scallion, and spicy mayo; no rice, wrapped in soy paper.",
        price: "16",
      },
      {
        name: "Robbie Roll",
        description: "Robbie roll wrapped in soy paper.",
        price: "16",
      },
      {
        name: "Dragonfly Roll",
        description: "Eel and shrimp tempura wrapped in soy paper with eel sauce.",
        price: "16",
      },
      {
        name: "Red Dragon Roll",
        description: "Shrimp tempura roll with masago and tuna on top.",
        price: "20",
      },
      {
        name: "Crazy Roll",
        description: "Tuna, asparagus, masago, and avocado roll; deep fried with spicy mayo and eel sauce.",
        price: "18",
      },
      {
        name: "Crazy Roll II",
        description: "Crazy Roll topped with Robby appetizer, eel sauce, and spicy mayo.",
        price: "29",
      },
      {
        name: "Spicy Lover",
        description: "Spicy tuna and tuna tempura flakes, topped with fresh tuna, jalapeño, mayo, and spicy sauce.",
        price: "20",
      },
      {
        name: "C.C Roll",
        description: "Cooked salmon JB roll.",
        price: "15",
      },
      {
        name: "Nikki Roll",
        description: "Eel, avocado, cucumber, tempura flakes, and masago on top with eel sauce.",
        price: "18",
      },
    ],
  },
];
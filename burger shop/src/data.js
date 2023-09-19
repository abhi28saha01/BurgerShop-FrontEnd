const data = [
    {
      id : 1,
      title : "Veg Whopper",
      description : "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgnlylsa7gqijo2qydq3",
      price : 179,
      type : "veg"
    },
    {
      id : 2,
      title : "Chicken Whopper",
      description : "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbcxtblwjmlj36kqkzjo",
      price : 199,
      type : "nonveg"
    },
    {
      id : 3,
      title : "Crispy Veg Double Patty Burger",
      description : "Our Best-Selling Burger With Crispy Veg Double Patty, Fresh Onion And Our Signature Sauce.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/phm3t2g7v0lpczvtu6g7",
      price : 99,
      type : "veg"
    },
    {
      id : 4,
      title : "Fiery Chicken Burger",
      description : "Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ppxmlepv15e3qexhhq9v",
      price : 209,
      type : "nonveg"
    },
    {
      id : 5,
      title : "Potato burgerr",
      description : "Spicy Fried Potato, loads of sauces in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/91af9363bf0dc5a730125e7bbb5d1f69",
      price : 100,
      type : "veg"
    },
    {
      id : 6,
      title : "Potato Cheese burgerr",
      description : "Spicy Fried Potato, loads of sauces and Cheese in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/73e218a76691a1ffbd339ccd018390f7",
      price : 139,
      type : "veg"
    },
    {
      id : 7,
      title : "Double Egg burgerr",
      description : "Spicy Egg Potato, loads of sauces and Cheese in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c10276190ac4017a979d4ea9ae3bc946",
      price : 150,
      type : "nonveg"
    },
    {
      id : 8,
      title : "chicken Cheese burgerr",
      description : "Spicy Chicken Egg Potato, loads of sauces , chicken and Cheese in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/n0ug9wzj7x1h6sq1o5ic",
      price : 200,
      type : "nonveg"
    },
    {
      id : 9,
      title : "Double Chicken Cheese burgerr",
      description : "Spicy Double Chicken Egg Potato, loads of sauces , chicken and Cheese in soft square masala buns. It's hot and happening.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wilaj5qtr50hul7xsile",
      price : 250,
      type : "nonveg"
    },
    {
      id : 10,
      title : "Trippy Cheesy Aloo Burger",
      description : "Crispy desi potato tikki burger made with secret spices, sweet and tangy sauces finished with amazing cheese blend.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/1678821a91f534a1aff879d37a3696e5",
      price : 150,
      type : "veg"
    },
    {
      id : 11,
      title : "Tex Mex Burger",
      description : "Mashed kidney beans, jalapenos in sour cream and cheese dressing. Have a bite of texas and mexico in between these buns.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/567c6d8e833d93e7e719072a18615156",
      price : 180,
      type : "veg"
    },
    {
      id : 12,
      title : "Classic Grilled Chicken Cheese Burger",
      description : "We do not mess around with the classics. Grilled chicken patty with lettuce, tomato, gherkins and a cheese slice.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/82abee8fe1e54b75daf68856a628c105",
      price : 230,
      type : "nonveg"
    },
    {
      id : 13,
      title : "Chicken Beamer Burger",
      description : "Juicy And Wholesome Chicken Beamer With Pickles, Seasoned To Perfection. [Energy- 524.26 kcal].",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/aff1a7c553665dd097976907554aad4d",
      price : 130,
      type : "nonveg"
    },
    {
      id : 14,
      title : "Crispy Chicken Burger",
      description : "Thousand Mayo, Chilli Garilc Sauce, Onion, Tomato, Jalapeno, Lettuce, Luquid Cheese, Chicken Tikka.",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/97ccc8de6fcbb9e3debd153900547766",
      price : 190,
      type : "nonveg"
    },
    {
      id : 15,
      title : "Nikku Singh - Chicken",
      description : "The best chicken entry-level burger in history #truestory [Protein: 6.43g, Carbohydrates: 29.52g, Fat: 11.25g].",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gapgofcjttpfet4omcen",
      price : 99,
      type : "nonveg"
    },
    {
      id : 16,
      title : "American Grilled Chicken + American Grilled Chicken",
      description : "American grilled chicken burgers: a classic american chicken patty served with lettuce, onions, pickled gherkins, liquid cheddar cheese & burger singh’s white guy sauce [Protein: 18.9g, Carbohydrates: 54.26g, Fat: 16.02g].",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gk9glbixuzyczjflpjvq",
      price : 359,
      type : "nonveg"
    },
]

export default data;
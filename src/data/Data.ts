import restaurantPic from "./images/claro.png";
import chefIMG from "./images/yossi.png"
import spicy from "./images/Spicy.svg";
import vegan from "./images/Vegan.svg";
import vegetarian from "./images/Vegitarian.svg";


export async function fetchRestaurants(){
    return [
                {
                    name: "maxim",
                    owner: "Tony",
                    dishesID: [1, 5, 6, 7],
                    hours: "7:00-22:00",
                    picture: restaurantPic
                },
                {
                    name: "shrimpsHouse",
                    owner: "Nikola",
                    dishesID: [1, 3, 7],
                    hours: "12:00-22:00",
                    picture: restaurantPic
                },
                {
                    name: "Douzan",
                    owner: "Fady",
                    dishesID: [2, 3, 4],
                    hours: "7:00-22:00",
                    picture: restaurantPic
                },
                {
                    name: "mandarin",
                    owner: "yoval",
                    dishesID: [4, 5, 6, 7],
                    hours: "7:00-22:00",
                    picture: restaurantPic
                },
                
    ]
};
export async function fetchDishes(){
    return [
        {
            name: "sea bass",
            ingredients: ["salt ", "pepper "],
            picture: restaurantPic,
            dishType: spicy,
            price: 100
        },
        {
            name: "galatys",
            ingredients: ["salt ", "pepper ", "creamy pesto sauce ", "shrimps "],
            picture: restaurantPic,
            dishType: vegan,
            price: 120
        },
        {
            name: "spicy pizza",
            ingredients: ["jalapeno ", "Dried Thai Chilies ", "Red Chili Flakes "],
            picture: restaurantPic,
            dishType: vegetarian,
            price: 70
        },
        {
            name: "Creamy Spaghetti",
            ingredients: ["salt ", "pepper ", "sautéed mushrooms ", "garlic cream sauce "],
            picture: restaurantPic,
            dishType: spicy,
            price: 79
        },
        {
            name: "mexican hamburger",
            ingredients: ["Creamy guacamole ", "spicy home-made pico de gallo"],
            picture: restaurantPic,
            dishType: spicy,
            price: 75
        },
        {
            name: "Risotto",
            ingredients: ["Rice ", "Bouillon ", "Butter ", "Onion ", "White Wine ", "Parmesan "],
            picture: restaurantPic,
            dishType: vegan,
            price: 100
        },
        
    
    ]
};

export async function fetchChefs(){
    return [
        {
            name: "Yossi",
            description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
            restaurants: [1, 2, 3],
            picture: "chefIMG",
        },
        {
            name: "Chef2",
            description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
            restaurants: [3, 4, 5],
            picture: "chefIMG",
        },
        {
            name: "Chef3",
            description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
            restaurants: [2, 3, 4],
            picture: "chefIMG",
        },
        {
            name: "Chef4",
            description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
            restaurants: [1, 2, 4],
            picture: "chefIMG",
        },
    
    
    ]
};




export type categoryDataType = {
    "idCategory": string,
    "strCategory": string,
    "strCategoryThumb": string,
    "strCategoryDescription": string
}

export type mealDataType = {
    "idMeal": string,
    "strMeal"?: string,
    "strDrinkAlternate"?: string,
    "strCategory"?: string,
    "strArea"?: string,
    "strInstructions"?: string,
    "strMealThumb"?: string,
    "strTags"?: string,
    "strYoutube"?: string,
    "strIngredient1"?: string,
    "strIngredient2"?: string | '',
    "strIngredient3"?: string | '',
    "strIngredient4"?: string | '',
    "strIngredient5"?: string | '',
    "strIngredient6"?: string | '',
    "strIngredient7"?: string | '',
    "strIngredient8"?: string | '',
    "strIngredient9"?: string | '',
    "strIngredient10"?: string | '',
    "strIngredient11"?: string | '',
    "strIngredient12"?: string | '',
    "strIngredient13"?: string | '',
    "strIngredient14"?: string | '',
    "strIngredient15"?: string | '',
    "strIngredient16"?: string | '',
    "strIngredient17"?: string | '',
    "strIngredient18"?: string | '',
    "strIngredient19"?: string | '',
    "strIngredient20"?: string | '',
    "strMeasure1"?: string | '',
    "strMeasure2"?: string | '',
    "strMeasure3"?: string | '',
    "strMeasure4"?: string | '',
    "strMeasure5"?: string | '',
    "strMeasure6"?: string | '',
    "strMeasure7"?: string | '',
    "strMeasure8"?: string | '',
    "strMeasure9"?: string | '',
    "strMeasure10"?: string | '',
    "strMeasure11"?: string | '',
    "strMeasure12"?: string | '',
    "strMeasure13"?: string | '',
    "strMeasure14"?: string | '',
    "strMeasure15"?: string | '',
    "strMeasure16"?: string | '',
    "strMeasure17"?: string | '',
    "strMeasure18"?: string | '',
    "strMeasure19"?: string | '',
    "strMeasure20"?: string | '',
    "strSource"?: string | '',
    "strImageSource"?: string | '',
    "strCreativeCommonsConfirmed"?: string,
    "dateModified"?: string
}

export type mealListType = {
    "strMeal": string,
    "strMealThumb": string,
    "idMeal": string
}



const mealData: mealDataType[] = [
    {
      idMeal: "1",
      strMeal: "Shakshuka",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    },
    {
      idMeal: "2",
      strMeal: "Beef Banh Mi Bowls with Sriracha Mayo",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    },
    {
      idMeal: "3",
      strMeal: "Chicken Alfredo Primavera",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    },
    {
      idMeal: "4",
      strMeal: "Coq au vin",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg",
    },
    {
      idMeal: "5",
      strMeal: "Chivito uruguayo",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
    },
    {
      idMeal: "6",
      strMeal: "Japanese Katsudon",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg",
    },
    {
      idMeal: "7",
      strMeal: "Japanese gohan rice",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
    },
    {
      idMeal: "8",
      strMeal: "Pear Tarte Tatin",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
    },
    {
      idMeal: "9",
      strMeal: "Piri-piri chicken and slaw",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",
    },
  ];
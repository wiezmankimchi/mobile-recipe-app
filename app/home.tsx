import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "@/components/categories";
import axios from "axios";
import Recipes from "@/components/recipes";

const home = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  useEffect(() => {
    getRecipes();
    setMealList([]);
    const showRecipesList = setTimeout(() => {
      setShowRecipes(true);
    }, 750);
  }, [activeCategory]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (e: any) {
      const result = e.message; // error under useUnknownInCatchVariables
      if (typeof e === "string") {
        e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        e.message; // works, `e` narrowed to Error
      }
      console.log(result);
    }
  };
  const getRecipes = async (category: string = activeCategory) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
      );
      if (response && response.data) {
        setMealList(response.data.meals);
      } else {
        setMealList(mealList);
      }
    } catch (e: any) {
      const result = e.message; // error under useUnknownInCatchVariables
      if (typeof e === "string") {
        e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        e.message; // works, `e` narrowed to Error
      }
      console.log(result);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className=" space-y-6 pt-14"
      >
        {/* logo and avatar */}
        <View className="mx-4 flex-row justify-between mb-4">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5) }}
          />

          <BellIcon size={hp(4)} color="gray" />
        </View>
        <View className="mx-4 space-y- mb-2">
          <Text className=" text-neutral-600" style={{ fontSize: hp(2) }}>
            Hey, Wiezman
          </Text>
          <Text
            className="text-neutral-600 font-bold"
            style={{ fontSize: hp(3.5) }}
          >
            Let's Cook Your Food'rms
          </Text>
        </View>

        {/* searchbar */}
        <View className="mt-4 mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search recipe"
            placeholderTextColor="gray"
            style={{ fontSize: hp(2) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* categories */}
        <View className="mt-4">
          {categories.length > 0 && (
            <Categories
              categoryData={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>

        {/* recipes */}
        <View className="mt-4">
          {showRecipes && <Recipes mealData={mealList} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});

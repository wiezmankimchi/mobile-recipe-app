import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useLocalSearchParams,
  useGlobalSearchParams,
  Link,
  router,
} from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "@/lib/helprs/cachedImage";
import axios from "axios";
import { type mealDataType } from "@/constants/misc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  Square3Stack3DIcon,
  UserIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import colors from "tailwindcss/colors";
import Loading from "@/components/loading";

const RecipeDetails = () => {
  const param = useGlobalSearchParams();
  const [recipe, setRecipe] = useState({} as mealDataType);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getRecipe(param.recipeID.toString());
  }, []);

  const getRecipe = async (recipeID: string) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeID
      );
      if (response && response.data) {
        setRecipe(response.data?.meals[0]);
        setIsLoading(false);
      } else {
        setRecipe(recipe);
      }
    } catch (e: any) {
      const result = e.message; // error under useUnknownInCatchVariables
      if (typeof e === "string") {
        e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        e.message; // works, `e` narrowed to Error
      }
      // console.log(result);
    }
  };

  // console.log("Global:", JSON.stringify(param));
  // console.log(recipe?.strMealThumb);

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <Loading size={"large"} className="mt-20" />
        </View>
      ) : (
        <>
          {/* recipe image */}
          <View className="flex-row justify-center">
            {recipe.strMealThumb && (
              <>
                <CachedImage
                  uri={recipe?.strMealThumb}
                  style={{
                    height: hp(50),
                    width: wp(99),
                    borderRadius: 45,
                  }}
                  className="bg-black/5 mt-1 rounded-br-3xl rounded-bl-3xl"
                />
              </>
            )}
          </View>

          {/* Back and Favorite buttons */}
          <View className="w-full absolute flex-row justify-between items-center pt-14">
            <Pressable
              className="bg-white rounded-full p-2 ml-5"
              onPress={() => router.back()}
            >
              <ChevronLeftIcon
                size={hp(3.5)}
                color={colors.amber[500]}
                strokeWidth={4.5}
              />
            </Pressable>
            <Pressable
              className="bg-white rounded-full p-2 mr-5"
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <HeartIcon
                size={hp(3.5)}
                color={isFavorite ? colors.red[700] : colors.gray[500]}
                strokeWidth={4.5}
              />
            </Pressable>
          </View>

          {/* recipe data  */}
          <View className="px-4 flex justify-between space-y-4 mt-8">
            {/* name and location */}
            <View className="space-y-2">
              <Text
                style={{ fontSize: hp(3) }}
                className=" font-bold flex-1  text-neutral-700"
              >
                {recipe.strMeal}
              </Text>
              <Text
                style={{ fontSize: hp(2) }}
                className=" font-medium flex-1  text-neutral-500"
              >
                {recipe.strArea}
              </Text>
            </View>

            {/* misc recipe data */}
            <View className="flex-row justify-around mt-4">
              {/* recipe time */}
              <View className="flex rounded-full bg-amber-300 p-2">
                <View
                  className="bg-white rounded-full flex items-center justify-center"
                  style={{ height: hp(6.5), width: hp(6.5) }}
                >
                  <ClockIcon
                    size={hp(4)}
                    strokeWidth={2.5}
                    color={colors.gray[500]}
                  />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(2) }}
                  >
                    35
                  </Text>
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(1.3) }}
                  >
                    min
                  </Text>
                </View>
              </View>
              {/* number of serving */}
              <View className="flex rounded-full bg-amber-300 p-2">
                <View
                  className="bg-white rounded-full flex items-center justify-center"
                  style={{ height: hp(6.5), width: hp(6.5) }}
                >
                  <UsersIcon
                    size={hp(4)}
                    strokeWidth={2.5}
                    color={colors.gray[500]}
                  />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(2) }}
                  >
                    3
                  </Text>
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(1.3) }}
                  ></Text>
                </View>
              </View>
              {/* calories */}
              <View className="flex rounded-full bg-amber-300 p-2">
                <View
                  className="bg-white rounded-full flex items-center justify-center"
                  style={{ height: hp(6.5), width: hp(6.5) }}
                >
                  <FireIcon
                    size={hp(4)}
                    strokeWidth={2.5}
                    color={colors.gray[500]}
                  />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(2) }}
                  >
                    103
                  </Text>
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(1.3) }}
                  >
                    cal
                  </Text>
                </View>
              </View>
              {/* difficulty */}
              <View className="flex rounded-full bg-amber-300 p-2">
                <View
                  className="bg-white rounded-full flex items-center justify-center"
                  style={{ height: hp(6.5), width: hp(6.5) }}
                >
                  <Square3Stack3DIcon
                    size={hp(4)}
                    strokeWidth={2.5}
                    color={colors.gray[500]}
                  />
                </View>
                <View className="flex items-center py-2 space-y-1">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(2) }}
                  >
                    Easy
                  </Text>
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: hp(1.3) }}
                  ></Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default RecipeDetails;

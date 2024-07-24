import { mealListType } from "@/constants/misc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, Pressable, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImage } from "@/lib/helprs/cachedImage";
import { router } from "expo-router";

interface RecipeCardProps {
  item: mealListType;
  index: number;
}

export const RecipeCard = ({ item, index }: RecipeCardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 150)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        onPress={() => router.push(`/${item.idMeal}`)}
        style={{}}
        className="w-full flex justify-center mb-4 space-y-1 pl-0 pr-0 even:pr-2 even:pl-2"
      >
        {/* <Text>{typeof index}</Text> */}
        {/* <Image
          source={{ uri: item.strMealThumb }}
          style={{ height: index % 3 == 0 ? hp(30) : hp(20), width: wp(40) }}
          className="bg-black/5 rounded-3xl"
        /> */}
        <CachedImage
          uri={item.strMealThumb}
          style={{ height: index % 3 == 0 ? hp(30) : hp(20), width: wp(40) }}
          className="bg-black/5 rounded-3xl"
        />
        <Text
          className="font-semibold mt-1 ml-2 text-text"
          style={{ fontSize: hp(2) }}
        >
          {item.strMeal.length > 30
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

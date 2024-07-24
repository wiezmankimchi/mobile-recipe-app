import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { type categoryDataType } from "@/constants/misc";
import { CachedImage } from "@/lib/helprs/cachedImage";

interface categoriesProps {
  categoryData: categoryDataType[];
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}

const Categories = ({
  categoryData,
  activeCategory,
  setActiveCategory,
}: categoriesProps) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((cat) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";
          return (
            <Pressable
              onPress={() => setActiveCategory(cat.strCategory)}
              key={cat.idCategory}
              className="flex items-center space-y-1 gap-1 mx-2"
            >
              <View className={` rounded-full p-[6px] ${activeButtonClass}`}>
                {/* <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                /> */}
                <CachedImage
                  uri={cat.strCategoryThumb}
                  style={{ width: hp(6), height: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                {cat.strCategory}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

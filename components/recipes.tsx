import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import {
  categoryDataType,
  mealListType,
  type mealDataType,
} from "@/constants/misc";
import { RecipeCard } from "./recipeCard";
import Loading from "./loading";

type RecipesProps = {
  mealData: mealListType[];
  // activeCategory?: string;
};

const Recipes = ({ mealData }: RecipesProps) => {
  return (
    <View className="mx-4 space-y-3">
      <Text
        className="font-bold text-neutral-600 mt-1 mb-3"
        style={{ fontSize: hp(3) }}
      >
        Recipes
      </Text>
      {/* <RecipeList data={mealData} /> */}
      <View className=" justify-center mx-4">
        {mealData.length == 0 ? (
          <Loading size={"large"} className="mt-20" />
        ) : (
          <MasonryList
            data={mealData}
            keyExtractor={(item): string => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
            //   refreshing={isLoadingNext}
            //   onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            //   onEndReached={() => loadNext(ITEM_CNT)}
          />
        )}
        {/* <FlashList
          data={mealData}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item, index }) => (
            <RecipeCard item={item} index={index} />
          )}
          estimatedItemSize={200}
          horizontal={false}
          numColumns={2}
        /> */}
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({});

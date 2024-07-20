import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useRouter } from "expo-router";

const welcome = () => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const router = useRouter();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;

    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + hp(5.5));
    }, 300);
    setTimeout(() => {
      router.replace("/home");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* logo */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring1Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring2Padding }}
        >
          <Image
            source={require("../assets/images/welcome.jpg")}
            style={{
              width: hp(20),
              height: hp(20),
              borderRadius: 9999,
              objectFit: "cover",
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* title */}
      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-white tracking-widest"
          style={{ fontSize: hp(6.5) }}
        >
          The Recipes
        </Text>
        <Text
          className="text-medium text-white tracking-widest"
          style={{ fontSize: hp(2) }}
        >
          Where all your food'rms come true
        </Text>
      </View>
    </View>
  );
};

export default welcome;

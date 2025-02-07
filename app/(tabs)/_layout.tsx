import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: Colors.grey,
          bottom: 30,
          justifyContent: "center",
          alignItems: "center",
          height: 53,
          marginHorizontal: 120,
          paddingHorizontal: 10,
          borderRadius: 40,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: "#333",
          borderTopColor: "#333",
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#999",
        tabBarActiveTintColor: Colors.white,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                borderRadius: 30,
                top: 5,
                backgroundColor: focused ? Colors.tintColor : Colors.grey,
                width: 40,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SimpleLineIcons name="pie-chart" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                borderRadius: 30,
                top: 5,
                backgroundColor: focused ? Colors.tintColor : Colors.grey,
                width: 40,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="swap" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                borderRadius: 30,
                top: 5,
                backgroundColor: focused ? Colors.tintColor : Colors.grey,
                width: 40,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="user-o" size={18} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

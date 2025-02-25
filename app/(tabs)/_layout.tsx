import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import useOrientation from "@/hooks/useOrientation";
import { useResponsive } from "react-native-responsive-hook";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const isLandscape = useOrientation();
  const { styles } = useStyles();

  const tabBarStyle = styles.portraitStyles;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: tabBarStyle,
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
              style={[
                styles.icon, 
                { backgroundColor: focused ? Colors.tintColor : Colors.grey } // Correct way to override styles
              ]}
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
              style={[
                styles.icon, 
                { backgroundColor: focused ? Colors.tintColor : Colors.grey } // Correct way to override styles
              ]}
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
              style={[
                styles.icon, 
                { backgroundColor: focused ? Colors.tintColor : Colors.grey } // Correct way to override styles
              ]}
              >
                <FontAwesome name="user-o" size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light"/>
    </>
  );
};

export default Layout;

type StyleProps = {
  portraitStyles: object;
  icon: object;
};

const useStyles = (): {styles: StyleProps} => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const isLandscape = useOrientation();
  //Base Default styles
  const defaultStyles: StyleProps = {
    portraitStyles: {
      position: "absolute",
      backgroundColor: Colors.grey,
      bottom: isLandscape ? 20 : 30,
      width: isLandscape ? 300 : undefined,
      paddingBottom: isLandscape ? 11 : undefined,
      justifyContent: "center",
      alignItems: "center",
      height: 53,
      marginHorizontal: isLandscape ? 270 : 120,
      paddingHorizontal: 10,
      borderRadius: 40,
      borderWidth: 1,
      borderTopWidth: 1,
      borderColor: "#333",
      borderTopColor: "#333",
    },

    icon: {
      borderRadius: 30,
      top: 5,
      width: 40,
      height: 35,
      justifyContent: "center",
      alignItems: "center",
    },
  };

  //Breakpoint specific styles
  const stylesByBreakpoint: any = {
    // Mobile First (default styles)
    default: defaultStyles,
    // Breakpoint 400-599
    group2: {},
    // Breakpoint 600-767
    group3: {},
    // Breakpoint 768-1007
    group4: {},
    // Breakpoint 1008-1279
    group5: {},
    // Breakpoint 1280 and above
    group6: {},
  };

  // Merge the default styles with the current breakpoint styles
  const breakpointStyles = stylesByBreakpoint[breakpointGroup] || {};
  const combinedStyles = {
    ...defaultStyles,
    ...breakpointStyles,
  };

  // Create StyleSheet
  const styles = StyleSheet.create(combinedStyles);
  return { styles };
};

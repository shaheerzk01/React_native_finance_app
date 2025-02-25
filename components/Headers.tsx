import Colors from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useResponsive } from "react-native-responsive-hook";

const Header = () => {
  const { styles } = useStyles();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={styles.container}>
        <View style={styles.leftSideView}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=33" }}
            style={styles.image}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>Hi Shaheer</Text>
            <Text style={styles.textLarge}>
              Your <Text style={{ fontWeight: "700" }}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const useStyles = () => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const defaultStyles = {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 70,
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: 40,
    },
    button: {
      borderColor: "#666",
      borderWidth: 1,
      padding: 8,
      borderRadius: 10,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    text: {
      color: Colors.white,
      fontSize: 12,
    },
    leftSideView: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    textLarge: {
      color: Colors.white,
      fontSize: 16,
    },
  };
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

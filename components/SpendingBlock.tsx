import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useResponsive } from "react-native-responsive-hook";
import Colors from "@/constants/Colors";
import { SpendingType } from "@/types";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/Icons";


const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  const { styles } = useStyles();
  let icon = <DollarIcon width={22} height={22} color={Colors.white} />;

  return (
    <View style={styles.spendingSectionWrapper}>
      <Text style={styles.sectionTitle}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Netflix") {
          icon = <NetflixIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }

        return (
          <View style={styles.spendingWrapper} key={item.id}>
            <View style={styles.iconWrapper}>{icon}</View>
            <View style={styles.textWrapper}>
              <View style={{ gap: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text style={styles.itemName}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const useStyles = () => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const defaultStyles = {
    spendingSectionWrapper: {
      marginVertical: 20,
      alignItems: "flex-start",
    },
    sectionTitle: {
      color: Colors.white,
      fontSize: 16,
      marginBottom: 20,
    },
    spendingWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    iconWrapper: {
      backgroundColor: Colors.grey,
      padding: 15,
      borderRadius: 50,
      marginRight: 10,
    },
    textWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemName: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: "600",
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

  const styles = StyleSheet.create(combinedStyles);
  return { styles };
};

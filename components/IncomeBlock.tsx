import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { useResponsive } from "react-native-responsive-hook";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const { styles } = useStyles();
  const renderItem: ListRenderItem<Partial<IncomeType>> = ({ item }) => {
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />;
    if ( item.name == 'Freelancing' ) {
      icon = <WalletCardIcon width={22} height={22} color={Colors.white} />
    } else if (item.name == 'Interest') {
      icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />
    }
    let amount = item.amount?.split(".");
    return (
      <View style={styles.incomeItem}>
        <View style={styles.wrapperView}>
          <View style={styles.dollaricon}>
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={styles.largeNumber}>${amount ? amount[0] : "0"}.<Text style={styles.smallNumber}>{amount ? amount[1] : "00"}</Text></Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.text}>
        My <Text style={styles.textSpan}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const useStyles = () => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const defaultStyles = {
    text: {
      color: Colors.white,
      fontSize: 16,
    },
    textSpan: {
      fontWeight: "700",
    },
    incomeItem: {
      backgroundColor: Colors.grey,
      padding: 20,
      borderRadius: 20,
      marginRight: 25,
      width: 150,
      gap: 10,
      marginTop: 20,
    },
    dollaricon: {
      borderColor: "#666",
      borderWidth: 1,
      borderRadius: 50,
      padding: 5,
      alignSelf: "flex-start",
    },
    wrapperView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    largeNumber: {
        color: Colors.white,
        fontSize: 18, 
        fontWeight: "700"
    },
    smallNumber: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: "400"
    }
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

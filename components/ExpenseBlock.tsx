import React from "react";
import { View, StyleSheet, Text, ListRenderItem, FlatList, TouchableOpacity } from "react-native";
import { useResponsive } from "react-native-responsive-hook";
import Colors from "@/constants/Colors";
import { ExpenseType } from "@/types";
import { Feather } from "@expo/vector-icons";

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const { styles } = useStyles();
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
    if(index == 0){
        return (
            <TouchableOpacity onPress={()=>{}}>
                <View style={styles.addBtn}>
                    <Feather name="plus" size={22} color={'#ccc'}/>
                </View>
            </TouchableOpacity>
        )
    }
    let amount = item.amount?.split(".");
    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name == "Food"
                ? Colors.blue
                : item.name == "Saving"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockTxt2,
            {
              color:
                item.name == "Food"
                  ? Colors.black
                  : item.name == "Saving"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ${amount ? amount[0] : "0"}.
          <Text
            style={[
              styles.expenseBlockTxt2Span,
              {
                color:
                  item.name == "Food"
                    ? Colors.black
                    : item.name == "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {amount ? amount[1] : "00"}
          </Text>
        </Text>
        <View
          style={[
            styles.expenseBlock3View,
            {
              backgroundColor:
                item.name == "Food"
                  ? "rgba(255, 255, 255, 0.2)"
                  : item.name == "Saving"
                  ? "rgba(26, 21, 21, 0.2)"
                  : "rgba(255, 255, 255, 0.2)",
            },
          ]}
        >
          <Text
            style={[
              styles.expenseBlockTxt1,
              {
                color:
                  item.name == "Food"
                    ? Colors.black
                    : item.name == "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{name: "Add Item"}];

  return (
    <View style={{paddingVertical: 20}}>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const useStyles = () => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const defaultStyles = {
    expenseBlock: {
      backgroundColor: Colors.tintColor,
      with: 100,
      padding: 15,
      borderRadius: 15,
      marginRight: 20,
      gap: 10,
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    expenseBlockTxt1: {
      color: Colors.white,
      font: 14,
    },
    expenseBlockTxt2: {
      color: Colors.white,
      font: 16,
      fontWeight: "700",
    },
    expenseBlockTxt2Span: {
      color: Colors.white,
      font: 12,
      fontWeight: "400",
    },
    expenseBlock3View: {
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 3,
    },
    addBtn: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 10,
        marginRight: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
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

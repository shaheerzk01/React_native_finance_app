import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Animated, Easing } from "react-native";
import Header from "@/components/Headers";
import { useResponsive } from "react-native-responsive-hook";
import Chart from "@/components/Chart";
import ExpenseBlock from "@/components/ExpenseBlock";
import ExpenseList from '@/data/expenses.json';
import IncomeBlock from "@/components/IncomeBlock";
import IncomeList from '@/data/income.json';
import SpendingBlock from "@/components/SpendingBlock";
import SpendingList from '@/data/spending.json';

const Page = () => {
  const { styles } = useStyles();

  const textTranslateX = useRef(new Animated.Value(1000)).current;
  const chartTranslateX = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(textTranslateX, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(chartTranslateX, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperView}>
            <Animated.View
              style={[{ transform: [{ translateX: textTranslateX }] }]}
            >
              <View style={{ gap: 5 }}>
                <Text style={styles.text}>
                  My <Text style={{ fontWeight: "700" }}>Expenses</Text>
                </Text>
                <Text style={styles.numberText}>
                  $1475.<Text style={styles.zerosText}>00</Text>
                </Text>
              </View>
            </Animated.View>
            <Animated.View style={[{ transform: [{ translateX: chartTranslateX }] }]}>
              <View style={styles.chartView}>
                <Chart />
              </View>
            </Animated.View>
          </View>
          <ExpenseBlock expenseList={ExpenseList}/>
          <IncomeBlock incomeList={IncomeList}/>
          <SpendingBlock spendingList={SpendingList}/>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const useStyles = () => {
  const { wp, vh, breakpointGroup } = useResponsive();
  const defaultStyles = {
    container: {
      flex: 1,
      backgroundColor: Colors.black,
      paddingHorizontal: 20,
      paddingTop: 110,
    },
    text: {
      color: Colors.white,
      fontSize: 16,
    },
    numberText: {
      color: Colors.white,
      fontSize: 36,
      fontWeight: "700",
    },
    zerosText: {
      fontSize: 22,
      fontWeight: "400",
    },
    wrapperView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    chartView: {
      paddingVertical: 20,
      alignItems: "center",
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

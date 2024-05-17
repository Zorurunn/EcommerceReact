import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useData } from "../Providers/DataProvider";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
type date = {
  sevenDays: string[];
};
export const Chart1 = () => {
  const [sevenDays, setSevenDays] = useState<any[]>([]);
  const { merchOrders } = useData();
  function formatDate(date: Date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    let day;
    let month;

    if (dd < 10) {
      day = "0" + dd;
    } else {
      day = dd;
    }
    if (mm < 10) {
      month = "0" + mm;
    } else {
      month = mm;
    }

    let newDate = month + "/" + day;
    return newDate;
  }

  function Last7Days() {
    let today = new Date();
    let oneDayAgo = new Date(today);
    let twoDaysAgo = new Date(today);
    let threeDaysAgo = new Date(today);
    let fourDaysAgo = new Date(today);
    let fiveDaysAgo = new Date(today);
    let sixDaysAgo = new Date(today);

    oneDayAgo.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);

    let result0 = formatDate(today);
    let result1 = formatDate(oneDayAgo);
    let result2 = formatDate(twoDaysAgo);
    let result3 = formatDate(threeDaysAgo);
    let result4 = formatDate(fourDaysAgo);
    let result5 = formatDate(fiveDaysAgo);
    let result6 = formatDate(sixDaysAgo);
    const seven = [
      result6,
      result5,
      result4,
      result3,
      result2,
      result1,
      result0,
    ];
    setSevenDays(seven);
  }
  const cart = merchOrders.map((item) => item._doc);
  // const newMerchOrders = cart.filter(
  //   (item) =>
  //     new Date(item.createdAt).toLocaleDateString() ==
  //     new Date().toLocaleDateString()
  // );
  // const sales = merchOrders.map((item) => item.cartProduct);

  // const totalIncome = sales.reduce(
  //   (sum, el) =>
  //     sum +
  //     el.reduce(
  //       (total, product) => total + product.orderQty * product.productPrice,
  //       0
  //     ),
  //   0
  // );
  // const zz = new Date().toLocaleDateString();
  // console.log("zz", zz);
  // console.log("today", newMerchOrders);

  useEffect(() => {
    Last7Days();
  }, []);

  const options = {
    responsive: true,
  };
  const labels = sevenDays;
  const data = {
    labels,
    datasets: [
      {
        data: [100, 120, 130, 140, 150, 100, 120],
        backgroundColor: "#121316",
        barPercentage: 0.2,
        borderRadius: 100,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

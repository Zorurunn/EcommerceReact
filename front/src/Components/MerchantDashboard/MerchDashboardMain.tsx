"use client";
import { Stack } from "@mui/material";
import { DashboardTotalCard } from "./DashboardTotalCard";
import { useData } from "../Providers/DataProvider";
import { useEffect, useState } from "react";
import { LoadingPage } from "../LoadingPage";
type userType = {
  userId: string;
};
export const MerchantDashbaordMain = () => {
  const dashboardTotalItem = [
    { text: "Орлого" },
    { text: "Захиалга" },
    { text: "Хэрэглэгч" },
  ];
  const { merchOrders } = useData();
  const [user, setUser] = useState<userType[]>([]);

  const cart = merchOrders?.map((item) => item.cartProduct);
  console.log("cart", cart);

  const totalIncome = cart.reduce(
    (sum, el) =>
      sum +
      el.reduce(
        (total, product) => total + product.orderQty * product.productPrice,
        0
      ),
    0
  );

  const orderCount = cart.length;

  const ordersDoc = merchOrders.map((item) => item._doc);
  const user2 = ordersDoc.forEach((item: any) => {
    if (!user.includes(item.userId)) {
      setUser([...user, item.userId]);
    }
  });
  const userCount = user.length;

  return (
    <Stack>
      <Stack
        onClick={() => {
          console.log("sss", merchOrders);
        }}
        flexDirection={"row"}
        gap={3}
      >
        {dashboardTotalItem.map((item, index) => (
          <DashboardTotalCard
            key={index}
            text={item.text}
            totalIncome={totalIncome}
            orderCount={orderCount}
            userCount={userCount}
          />
        ))}
      </Stack>
    </Stack>
  );
};

"use client";
import { ProductDetailCard } from "@/Components/ProductDetail/ProductDetailCard";
import { useData } from "@/Components/Providers/DataProvider";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../common/axios";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { redirect, useRouter } from "next/navigation";

type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
type CommentType = {
  userId: userType;
  productId: string;
  comment: string;
  star: number;
  createdAt: Date;
  updatedAt: Date;
};

// type ProductDetailProps = {
//   allComments: any;
//   setAllComments: Dispatch<SetStateAction<any>>;
// };

export default function ProductDetail() {
  const { allProducts, detailId } = useData();
  const { setRefresh, refresh } = useAuth();
  const [allComments, setAllComments] = useState<any>([]);
  const router = useRouter();
  const selectedProduct = allProducts.find(
    (product) => product._id == detailId
  );
  const getAllComments = async () => {
    try {
      const { data } = await api.get("comment/getAllComments");
      setAllComments(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };
  const selectedProductComments = allComments.filter(
    (comment: any) => comment.productId == detailId
  );

  useEffect(() => {
    getAllComments();
  }, [refresh]);

  if (!detailId) {
    redirect("/");
  }
  return (
    <Stack>
      <ProductDetailCard
        productId={selectedProduct?._id}
        productImage={selectedProduct?.productImage}
        productName={selectedProduct?.productName}
        productPrice={selectedProduct?.productPrice}
        productAdditional={selectedProduct?.productAdditional}
        productColor={selectedProduct?.productColor}
        productRating={selectedProduct?.avgStars}
        reviewCount={selectedProduct?.reviewCount}
        comments={selectedProductComments}
      />
    </Stack>
  );
}

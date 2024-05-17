"use client";
import { api } from "@/app/common/axios";
import { AxiosError } from "axios";
import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";
import { LoadingPage } from "../LoadingPage";
import { usePathname } from "next/navigation";
type CategoryType = {
  categoryName: string;
  updatedAt: Date;
  createdAt: Date;
};
export type ProductType = {
  _id: string;
  merchId: string;
  productName: string;
  productAdditional: string;
  productCode: string;
  productImage: string[];
  productPrice: number;
  productStocks: number;
  productCategory: string;
  productSubCategory: string;
  productColor: string[];
  productSize: string[];
  productTag: string[];
  productSoldQty: number;
  stars: object;
  avgStars: number;
  reviewCount: number;
  updatedAt: string;
  createdAt: string;
  __v: number;
};
export type CartType = {
  productId: string;
  merchId: string;
  productImage: string[];
  productName: string;
  productColor: string[];
  productPrice: number;
  orderQty: number;
  userId?: string;
  createdAt?: Date;
};

type MerchOrdersType = {
  userId: string;
  status: string;
  deliveryAddress: {
    phone: string;
    firstName: string;
    latName: string;
    address: string;
    extra: string;
  };
  cartProduct: CartType[];
  sumCart: number;
  paymentType: string;
  createdAt: Date;
  updatedAt: Date;
  _doc: CartType[];
};

type DataContextType = {
  addProduct: (
    productName: string,
    productAdditional: string,
    productCode: string,
    productImage: string[],
    productPrice: number,
    productStocks: number,
    productCategory: string,
    productSubCategory: string,
    productColor: string[],
    productSize: string[],
    productTag: string[],
    editId: string
  ) => void;
  isReady: boolean;
  setIsReady: Dispatch<SetStateAction<boolean>>;
  products: ProductType[];
  allProducts: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
  getProducts: () => void;
  deleteProduct: (productId: string) => void;
  updateReaction: (productId: string) => void;
  numberFormatter: Intl.NumberFormat;
  add: boolean;
  setAdd: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  addCategory: (categoryName: string) => void;
  allCategories: CategoryType[];
  setAllCategories: Dispatch<SetStateAction<CategoryType[]>>;
  detailId: string;
  setDetailId: Dispatch<SetStateAction<string>>;
  addReview: (productId: string, star: number, comment: string) => void;
  cartProduct: CartType[];
  setCartProduct: Dispatch<SetStateAction<CartType[]>>;
  merchOrders: MerchOrdersType[];
  setMerchOrders: Dispatch<SetStateAction<MerchOrdersType[]>>;
};
const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);
  const [add, setAdd] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { isLogged, refresh, setRefresh } = useAuth();
  const [detailId, setDetailId] = useState("");
  const [cartProduct, setCartProduct] = useState<CartType[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [merchOrders, setMerchOrders] = useState<MerchOrdersType[]>([]);
  const pathname = usePathname();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  //Add product function
  const addProduct = async (
    productName: string,
    productAdditional: string,
    productCode: string,
    productImage: string[],
    productPrice: number,
    productStocks: number,
    productCategory: string,
    productSubCategory: string,
    productColor: string[],
    productSize: string[],
    productTag: string[],
    editId: string
  ) => {
    try {
      const { data } = await api.post(
        "product/addProduct",
        {
          productName,
          productAdditional,
          productCode,
          productImage,
          productPrice,
          productStocks,
          productCategory,
          productSubCategory,
          productColor,
          productSize,
          productTag,
          editId,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setRefresh((prev) => prev + 1);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const getProducts = async () => {
    try {
      const { data } = await api.get("product/getProducts", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setProducts(data);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      const { data } = await api.post(
        "product/deleteProduct",
        { productId },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );

      setRefresh((prev) => prev + 1);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const addCategory = async (categoryName: string) => {
    try {
      const { data } = await api.post("category/addCategory", {
        categoryName,
      });
      setRefresh((prev) => prev + 1);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await api.get("category/getAllCategories");
      setAllCategories(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getAllProducts = async () => {
    try {
      const { data } = await api.get("product/getAllProducts");
      setAllProducts(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const updateReaction = async (productId: string) => {
    try {
      const { data } = await api.post(
        "product/updateReaction",
        { productId },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const addReview = async (
    productId: string,
    star: number,
    comment: string
  ) => {
    try {
      const { data } = await api.post(
        "product/addReview",
        { productId, star },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      const reviewID = data.reviewID;

      const { data: dataComment } = await api.post(
        "comment/addComment",
        {
          productId,
          comment,
          star,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setRefresh((prev) => prev + 1);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getMerchOrders = async () => {
    try {
      const { data } = await api.get("order/getMerchOrders", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setMerchOrders(data);
      const cart = merchOrders.map((item) => item.cartProduct);

      console.log(cart);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    if (isLogged) {
      getProducts();
    }
  }, [isLogged, refresh]);

  useEffect(() => {
    const getFinc = async () => {
      setIsReady(false);
      await getAllProducts();
      await getAllCategories();
      await getMerchOrders();
      setIsReady(true);
    };
    getFinc();
  }, [refresh, isLogged]);

  useEffect(() => {
    const cart = localStorage.getItem("cartProduct");
    if (cart) {
      setCartProduct(JSON.parse(cart));
    }

    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  return (
    <DataContext.Provider
      value={{
        isReady,
        setIsReady,
        addProduct,
        products,
        setProducts,
        allProducts,
        setAllProducts,
        getProducts,
        numberFormatter,
        deleteProduct,
        updateReaction,
        add,
        setAdd,
        searchValue,
        setSearchValue,
        addCategory,
        allCategories,
        setAllCategories,
        detailId,
        setDetailId,
        addReview,
        cartProduct,
        setCartProduct,
        merchOrders,
        setMerchOrders,
      }}
    >
      {isReady ? children : <LoadingPage />}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

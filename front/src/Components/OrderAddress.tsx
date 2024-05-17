"use client";
import { BorderBottom, FormatLineSpacing } from "@mui/icons-material";
import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useData } from "./Providers/DataProvider";
import { useRouter } from "next/navigation";
import { api } from "@/app/common/axios";
import { toast } from "react-toastify";
import { useAuth } from "./Providers/AuthProvider";
type CartType = {
  productId: string;
  merchId: string;
  productImage: string[];
  productName: string;
  productColor: string[];
  productPrice: number;
  orderQty: number;
};
type DeliveryAddressType = {
  phone: string;
  firstName: string;
  latName: string;
  address: string;
  extra: string;
};
const validationSchema = yup.object({
  phone: yup.string().required("Утасны дугаараа оруулна уу."),
  address: yup.string().required("Хаягийн мэдээллээ оруулна уу."),
});

export const OrderAddress = () => {
  const { setRefresh } = useAuth();
  const { cartProduct } = useData();
  const router = useRouter();
  const sumCart = cartProduct.reduce((sum, currentValue) => {
    return sum + currentValue.productPrice * currentValue.orderQty;
  }, 0);

  const addReview = async (
    cartProduct: CartType[],
    deliveryAddress: DeliveryAddressType,
    sumCart: number,
    paymentType: string
  ) => {
    try {
      const { data } = await api.post(
        "order/addOrder",
        { cartProduct, deliveryAddress, sumCart, paymentType },
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
  const formik = useFormik({
    initialValues: {
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      extra: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addReview(
        cartProduct,
        {
          phone: values.phone,
          firstName: values.firstName,
          latName: values.lastName,
          address: values.address,
          extra: values.extra,
        },
        sumCart,
        "Cash"
      );
      router.push("/OrderSuccess");
    },
  });

  return (
    <Stack
      bgcolor={"#F8F8FD"}
      borderRadius={"3px"}
      pt={"69px"}
      pr={"39px"}
      pb={"65px"}
      pl={"45px"}
    >
      <Typography color={"#1D3178"} fontSize={18} fontWeight={800}>
        Холбоо барих мэдээлэл
      </Typography>
      <Stack>
        <TextField
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          placeholder="И-мэйл эсвэл утасны дугаар"
          sx={{
            "& fieldset": { border: "none" },
          }}
          inputProps={{
            style: {
              borderBottom: "2px solid #BFC6E0",
            },
          }}
        />
      </Stack>
      <Stack mt={4} flexDirection={"row"} alignItems={"center"}>
        <Checkbox defaultChecked color="success" size="small" />
        <Typography color={"#8A91AB"} fontSize={12} fontWeight={500}>
          Keep me up to date on news and excluive offers
        </Typography>
      </Stack>
      <Stack mt={"109px"}>
        <Typography color={"#1D3178"} fontSize={18} fontWeight={800}>
          Хүргэлтийн хаяг
        </Typography>
        <Stack flexDirection={"row"} gap={"30px"} mt={3}>
          <TextField
            fullWidth
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="Нэр"
            sx={{
              "& fieldset": { border: "none" },
              borderBottom: "2px solid #BFC6E0",
            }}
          />
          <TextField
            fullWidth
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Овог"
            sx={{
              "& fieldset": { border: "none" },
              borderBottom: "2px solid #BFC6E0",
            }}
          />
        </Stack>
        <TextField
          fullWidth
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          placeholder="Хаяг"
          sx={{
            "& fieldset": { border: "none" },
            marginTop: "24px",
          }}
          inputProps={{
            style: {
              borderBottom: "2px solid #BFC6E0",
            },
          }}
        />
        <TextField
          fullWidth
          type="text"
          name="extra"
          value={formik.values.extra}
          onChange={formik.handleChange}
          placeholder="Орц код, нэмэлт мэдээлэл"
          sx={{
            "& fieldset": { border: "none" },
            marginTop: "24px",
            borderBottom: "2px solid #BFC6E0",
          }}
        />
        <Button
          onClick={formik.submitForm}
          disabled={!formik.isValid || !formik.dirty || !cartProduct.length}
          variant="contained"
          color="success"
          sx={{ width: "fit-content", marginTop: "67px" }}
        >
          <Typography>Хүргэлт хийлгэх</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

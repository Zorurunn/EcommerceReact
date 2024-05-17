import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const addProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
    const {
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
    } = req.body;

    if (editId) {
      const editProd = await ProductModel.findOneAndUpdate(
        { _id: editId },
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
          updatedAt: new Date(),
        }
      );
      return res.json({ message: "Бүтээгдэхүүн амжилттай шинэчлэгдлээ" });
    }

    const productExist = await ProductModel.find({ productCode });

    if (productExist.length) {
      return res.status(401).json({
        message: `${productCode} кодтой бараа өмнө бүртгэгдсэн байна`,
      });
    }

    const product = await ProductModel.create({
      merchId: id,
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
      productSoldQty: 0,
      salePercent: 0,
      productReactionCount: 0,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ бүтээгдэхүүн амжилттай нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};

export const getProducts: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json("Unauthorized");
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const products = await ProductModel.find({ merchId: id });

    return res.json(products);
  } catch (err) {
    res.json(err);
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
    const { productId } = req.body;

    const productExist = await ProductModel.findOne({ _id: productId });

    if (!productExist) {
      return res.status(401).json({
        message: `Устгах бараа олдсонгүй`,
      });
    }

    const product = await ProductModel.findByIdAndDelete(productId);

    return res.json({ message: "Бүтээгдэхүүн устгагдлаа" });
  } catch (err) {
    res.json(err);
  }
};
export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});

    return res.json(allProducts);
  } catch (err) {
    res.json(err);
  }
};

export const updateReaction: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { productId } = req.body;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const editProduct = await ProductModel.findOne({
      merchId: id,
      _id: productId,
    });

    if (!editProduct) {
      return res.status(401).json({
        message: "Шинэчлэх бараа олдсонгүй.",
      });
    }
    const reaction = editProduct.productReactionCount;
    // return res.json(reaction);
    if (reaction || reaction == 0) {
      const editProd = await ProductModel.findOneAndUpdate(
        { _id: productId },
        {
          productReactionCount: reaction + 1,
          updatedAt: new Date(),
        }
      );
    }
    return res.json({ message: "Success" });
  } catch (err) {
    res.json(err);
  }
};

type AddReviewBody = {
  productId: string;
  star: 1 | 2 | 3 | 4 | 5;
};

export const addReview: RequestHandler = async (req, res) => {
  try {
    const { productId, star } = req.body as AddReviewBody;

    const editProduct = await ProductModel.findOne({
      _id: productId,
    });

    if (!editProduct) {
      return res.status(401).json({
        message: "Шинэчлэх бараа олдсонгүй.",
      });
    }

    const prevStars = editProduct.stars ?? {};

    const prevStar = prevStars[star] ?? 0;

    await ProductModel.updateOne(
      { _id: productId },
      {
        stars: {
          ...prevStars,
          [star]: prevStar + 1,
        },
      }
    );

    const product = await ProductModel.findOne({ _id: productId });

    if (!product) {
      return res.status(401).json({
        message: "Шинэчлэх бараа олдсонгүй.",
      });
    }
    const pStars = product.stars ?? {};
    const pStar1 = pStars[1] ?? 0;
    const pStar2 = pStars[2] ?? 0;
    const pStar3 = pStars[3] ?? 0;
    const pStar4 = pStars[4] ?? 0;
    const pStar5 = pStars[5] ?? 0;

    const sumReview = pStar1 + pStar2 + pStar3 + pStar4 + pStar5;
    const avgReview =
      (pStar1 + 2 * pStar2 + 3 * pStar3 + 4 * pStar4 + 5 * pStar5) / sumReview;

    const rCount = product.reviewCount ?? 0;

    await ProductModel.updateOne(
      { _id: productId },
      {
        avgStars: avgReview,
        reviewCount: rCount + 1,
      }
    );
    return res.json({ message: "Сэтгэгдэл нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};

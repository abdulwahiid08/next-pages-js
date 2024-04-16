import { retriveData, retriveDataById } from "@/config/db/firebase/service";

const productData = async (req, res) => {
  try {
    let data = [];

    if (req.query.product[1]) {
      data = await retriveDataById("products", req.query.product[1]);
    } else {
      data = await retriveData("products");
    }

    res.status(200).json({ status: "success", code: 200, data });
  } catch (error) {
    res
      .status(500)
      .json({ status: "success", code: 500, message: error.message });
  }
};

export default productData;

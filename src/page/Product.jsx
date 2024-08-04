import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../feature/product/ProductSlice";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.singleProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (data.loading) return <h1> Loading... </h1>;

  if (data.error) return <h1> {data.error} </h1>;

  return (
    <div>
      {data?.data && (
        <div>
          <h2> {data.data.title} </h2>
        </div>
      )}
    </div>
  );
};

export default Product;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../feature/home/HomeSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allProduct);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (data.loading) return <h1> Loading... </h1>;

  if (data.error) return <h1> {data.error} </h1>;

  return (
    <div className="product-container">
      {data.data.map((item) => {
        let { id, title, price, image, link } = item;

        return (
          <div key={id} className="product-item">
            <img src={image} alt={title} />
            <Link to={`/product/${id}`}>
              <h2> {title} </h2>
            </Link>
            <span> ${price} </span>
            <Link to={`/product/${id}`}> Learn more </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

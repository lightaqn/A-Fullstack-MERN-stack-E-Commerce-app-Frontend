import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
// import { generatePublicUrl } from "../../urlConfig";
import { Breed } from "../../components/MaterialUI";
import { IoIosArrowForward } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

/**
 * @author
 * @function OrderPage
 **/

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
      <div style={{ maxWidth: "1150px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: `/` },
            { name: "My Account", href: `/account` },
            { name: "My Orders", href: `/account/orders` },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
         return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    src={
                      item.productId.productPictures[0].img
                    }
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">{item.productId.name}</div>
                  <div className="orderPrice">
                    <FaDollarSign />
                    {item.payablePrice}
                  </div>
                  <div>{order.paymentStatus}</div>
                </div>
              </Link>
            </Card>
          ));
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;

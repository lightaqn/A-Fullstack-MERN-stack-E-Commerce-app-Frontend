import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
      const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);


  return (
      <div style={{ padding: "10px" }}>
        <Card 
            style={{ 
                boxSizing: "border-box",
                padding: "10px",
                display: "flex"
            }}
        >
            {product.products.map((product) => (
                <div className="caContainer">
                    <Link
                        className="caImgContainer"
                        to={`/${product.slug}/${product._id}/p`}
                    >
                    <img src={product.productPictures[0].img} />
                    
                    </Link>
                    
                    <div>
                        <div className="caProductName">{product.name}</div>
                        <div className="caProductPrice"><FaDollarSign/>{product.price}</div>
                    </div>
                    
                    
                </div>
            ))}
        </Card>
      </div>
    );
};

export default ClothingAndAccessories;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";


const ProductDetail = () => {
  let { ProductId } = useParams();
  const [ product, setProduct] = useState()

  useEffect(() => {
    const result = getProductDetail(ProductId);
    setProduct(result);
  }, []);

  return (
    <ProductDetailStyled>
      <Navigation />
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;
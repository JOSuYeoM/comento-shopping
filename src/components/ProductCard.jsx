import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
      <Thumbnail src={thumbnail} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Name = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #000000;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

const Thumbnail = styled.img`
  margin: 0;
  width: 341px;
  height: 204px;
  object-fit: cover;
  color: #000000;
`;



export default ProductCard;
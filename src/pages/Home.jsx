import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts,mockTheme2Produdcts } from "../data/mockData";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {

    const[Products, setProducts ] =useState();
    const Navigate= useNavigate();

    const onClickThemeButton = (themeId) => {
        if (themeId === 1) {
            setProducts(mockTheme1Produdcts);
        } else if (themeId===2) {
          setProducts(mockTheme2Produdcts);
        }
      };

      useEffect(()=>{
        setTimeout(()=>{
            setProducts(mockTheme1Produdcts);
        },1000);
      },[])
    return (
        <div>
            <div>
                <Navigation />

                <ThemeSection>
                    <ThemeButton themeName={"#겨울방한템"}onClick={() => onClickThemeButton(1)}/>
                    <ThemeButton themeName={"#여름더워요"}onClick={() => onClickThemeButton(2)}/>
                </ThemeSection>
                <GrayLine />
            </div>
        
            <div>
                <ProductSection>
                    {Products ? (Products.map((Product)=>(
                        <ProductCard
                            onClick={()=>Navigate(`Product/${Product.id}`)}
                            key={Product.id}
                            name={Product.name}
                            description={Product.description}
                            thumbnail={Product.thumbnail}
                            />
                    ))
                ):(
                    <div>테마를 선택해주세요</div>
                )}
                </ProductSection>
            </div>
         </div>
    );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 24px;
`;

export default Home;
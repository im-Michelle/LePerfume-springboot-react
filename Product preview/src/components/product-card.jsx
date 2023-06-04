import styled from 'styled-components'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAll, deletePerfume } from '../services/api.js';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  width: 400px;
  height: 780px;
  margin: 50px auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-content:center;
    height: 300px;
    margin-top: 50px;
  }
`

const Img = styled.div`
  height: 350px;
  background-image: url(${props => props.imgMobile});
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;

  @media (min-width: 768px) {
    width: 200px;
    border-radius: 10px 0 0 10px;
    background-image: url(${props => props.imgDesktop});
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: row;
  justify-content: center;
  align-items: center;
  height: 430px;
  background-color: #fff;
  border-radius: 0 0 20px 20px;

  @media (min-width: 768px) {
    width: 200px;
    height: 350px;
    border-radius: 0 10px 10px 0;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  max-width: 85%;
  width: 100%;

  @media (min-width: 768px) {
    height: 300px;
  }
`

const Title = styled.h1` 
  font-size: 16px;
  color: #aaaaaa;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 3px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

const PerfumeName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  height: 110px;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 28px;
    height: 120px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  height: 120px;
  color: #7c7c7c;

  @media (min-width: 768px) {
    font-size: 13px;
    height: 80px;
  }
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70px;

  @media (min-width: 768px) {
    height: 60px;
  }
`

const DiscountPrice = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #178058;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Price = styled.div`
  color: #5a5a5a;
  margin-left: 10px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #5a5a5a;
  }
`;

const ButtonAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #178058;
  height: 60px;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 40px;
    border-radius: 5px;
  }
`



const TextButton = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

const ButtonDelete = styled.button`
  position: absolute;
  color: #ff0000;
  background-color: #ffffff;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 305px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  :hover {
    background-color: #ff0000;
    color: #fff;
  }

  @media (min-width: 768px) {
    margin-left: 370px;
    
  }
`

const PerfumeCard = () => {
  const [perfumes, setPerfumes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perfumesData = await getAll();
        setPerfumes(perfumesData);
      } catch (error) {
        console.error(error);
        setPerfumes([]);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePerfume(id);
      const updatedPerfumes = perfumes.filter((perfume) => perfume.id !== id);
      setPerfumes(updatedPerfumes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {perfumes !== null ? (
        perfumes.length > 0 ? (
          perfumes.map((perfume) => (
            <Card key={perfume.id}>
              <Img imgMobile={perfume.imgMobile} imgDesktop={perfume.imgDesktop} />
              <InfoContainer>
                <Info>
                  <Title>PERFUME</Title>
                  <PerfumeName>{perfume.name}</PerfumeName>
                  <Description>{perfume.description}</Description>
                  <PriceContainer>
                    <DiscountPrice>${perfume.priceWithDiscount}</DiscountPrice>
                    <Price>${perfume.price}</Price>
                  </PriceContainer>
                  <ButtonAddToCart>
                    <TextButton>Add to Cart</TextButton>
                  </ButtonAddToCart>
                </Info>
              </InfoContainer>
              <ButtonDelete onClick={() => handleDelete(perfume.id)}>X</ButtonDelete>
            </Card>
          ))
        ) : ('No data')
      ) : null}
    </>
  );
};

export default PerfumeCard;
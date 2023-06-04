import styled from 'styled-components'
import ProductCard from "./product-card"
import { Link } from 'react-router-dom';

const NewPerfume = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 230px;
    height: 60px;
    background-color: #111;
    margin-top: 80px;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;

    @media (min-width: 768px) {
        margin-top: 90px;
    }
`

const LinkNew = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  margin-left: 30px;

  @media (min-width: 768px) {
        width: 500px;
    }
`

const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
margin: 0 auto;
`

const ProductsContainer = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
`

const ProductsPage = () => {
  return (
    <Container>
        <NewPerfume>
          <LinkNew to="/new-product">New Perfume</LinkNew>
        </NewPerfume>
        <ProductsContainer>
            <ProductCard/>
        </ProductsContainer>
    </Container>
  )
}

export default ProductsPage;
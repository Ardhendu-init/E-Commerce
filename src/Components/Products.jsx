import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((items) => (
        <Product items={items} key={items.id} />
      ))}
    </Container>
  );
};

export default Products;

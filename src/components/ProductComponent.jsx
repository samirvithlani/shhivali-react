import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {

const dispatch = useDispatch()

  const products = [
    {
      id: 1,
      name: "iphone 15",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=924,693,x352,y0,safe&width=960",
      price: 1000,
    },
    {
      id: 2,
      name: "ipad",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=924,693,x352,y0,safe&width=960",
      price: 999,
    },
    {
      id: 3,
      name: "laptop",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=924,693,x352,y0,safe&width=960",
      price: 799,
    },
  ];
  return (
    <Container>
      <Row>
        {products?.map((product) => {
          return (
            <Col xs={12} md={4} className="p-2">
              <Stack gap={2}>
                <img src={product.imageUrl} alt={product.name} style ={{height:200,width:200}} />
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <button onClick={()=>{dispatch(addToCart(product))}} className="btn btn-primary">Add to cart</button>
              </Stack>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

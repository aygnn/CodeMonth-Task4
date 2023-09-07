import "./Detail.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import axios from "axios";
import { Context } from "../Context/BasketContext";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const [style, setStyle] = useState("none");
  const {basket,setBasket}=useContext(Context)
  const{counter,setCounter}=useContext(Context)
  const{total,setTotal}=useContext(Context)

  
  let { productID } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productID}`)
    .then((res) => setProduct(res.data));
  }, []);
 

const handleBuy=(product)=>{
  
 
  if(basket.some((x)=>x.data.id===product.id)){
    basket.forEach(element => {
      if(element.data.id===product.id){
        element.count+=1
        setCounter(counter+1)
        setTotal((prevTotal) => prevTotal + product.price);
      }
      
      
    });
  }
  else{
    basket.push({ count:1, data:product})
    setBasket(basket)
    setTotal((prevTotal) => prevTotal + product.price);
    setCounter(counter+1)


  }

  
  
}
// console.log(total);

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };
  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };

  return (
    <div className="detail">
      <Helmet>
        <title>Detail Page</title>
      </Helmet>

      {
        <div>
          <Container>
            <Row>
              <Col sm={8}>
                <div className="main-pic">
                  <img src={product.image} />
                </div>
              </Col>

              <Col sm={4}>
                <div className="about">
                  <div className="name">
                    <p>{product.name}</p>
                  </div>
                  <div className="price">
                    <span>${product.price}</span>
                  </div>
               
                  <div className="main-size">
                   
                  </div>
                  <div className="add">
                    <div className="bag">
                      <button  onClick={() => {  handleBuy(product);  }} >
                        Add to Bag
                      </button>
                    </div>
                
                  </div>

                  <div className="show_hide">
                    <Accordion
                      className="detail1"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        className="acordion"
                        expandIcon={<RxDividerVertical className="divider" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <AiOutlineMinus className="minus" />

                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          Product Details
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{product.description}</Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      className="detail1"
                      expanded={expanded2 === "panel1"}
                      onChange={handleChange2("panel1")}
                    >
                      <AccordionSummary
                        className="acordion"
                        expandIcon={<RxDividerVertical className="divider" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <AiOutlineMinus className="minus" />

                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          Size&Fit
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="text">
                          Model's height: 173cm/5'8" Model is wearing: UK S/ EU
                          S/ US XS
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      className="detail1"
                      expanded={expanded3 === "panel1"}
                      onChange={handleChange3("panel1")}
                    >
                      <AccordionSummary
                        className="acordion"
                        expandIcon={<RxDividerVertical className="divider" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <AiOutlineMinus className="minus" />

                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                         Category
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="text">
                          {product.category}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      }
    </div>
  );
}

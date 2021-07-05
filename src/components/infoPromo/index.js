import React, {Component} from 'react'
import FoodNews from "../../images/Foods/food-2.jpg"
import FoodNews2 from "../../images/Foods/food-1.jpg"
import FoodNews3 from "../../images/Foods/food-3.jpg"
import {
NewsContianer,
SectionNews,
NewsDiv,
H3News,
// eslint-disable-next-line no-unused-vars
ImgFoodNews,
ImgSliderFoodNews,
H1News,
PNews,
LinkAddressNews,
SideImg,
} from "./promoElements"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./infoPromo.css"

const promos=[
    {
        h3:"Bienvenido a nuestro hogar",
        ImgFoodNews:FoodNews,
        h1news:"Healty Food",
        h1news2:"Collection!",
        pnews:"Proin varius, orci mattis dapibus efficitur",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Ordena ahora!"
    },
    {
        h3:"Bienvenido a nuestro hogar",
        ImgFoodNews:FoodNews2,
        h1news:"Healty Food",
        h1news2:"Collection!",
        pnews:"Proin varius, orci mattis dapibus efficitur",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Ordena ahora!"
    },
    {
        h3:"Bienvenido a nuestro hogar",
        ImgFoodNews:FoodNews3,
        h1news:"Happy morning",
        h1news2:"with us!!",
        pnews:"Proin varius, orci mattis dapibus efficitur",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Ordena ahora!"
    },
]

class News extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        };
        return (
            <div className="appSlider">
            <Slider {...settings}>
            {promos.map((promo)=>{
                return (
                  <NewsContianer>
                  <SectionNews>
                      <NewsDiv>
                          <H3News>{promo.h3}</H3News>
                          <ImgSliderFoodNews src={promo.ImgFoodNews} type="food-2/jpg"/>
                          <H1News>{promo.h1news}<br/>{promo.h1news2}</H1News>
                          <PNews>{promo.pnews}.</PNews>
                          <LinkAddressNews>{promo.linknews}</LinkAddressNews>
                      </NewsDiv>
                      <SideImg></SideImg>
                  </SectionNews>
              </NewsContianer>
                )
            })}
  
            </Slider>
            </div>
        );
    }
}

export default News

/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {Icon} from "react-icons-kit"
import {motion} from "framer-motion"
import {NewsContianer,
    SectionNews,
    NewsDiv,
    H3News,
    ImgFoodNews,
    ImgSliderFoodNews,
    H1News,
    PNews,
    LinkAddressNews,
    SideImg,
} from "../../components/infoPromo/promoElements"
import FoodNews from "../../images/Foods/food-2.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

const promos=[
    {
        h3:"Welcome to our",
        ImgFoodNews:FoodNews,
        h1news:"Healty Food",
        h1news2:"Collection!",
        pnews:"Proin varius, orci mattis dapibus efficitur,dolor",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Shop now!"
    },
    {
        h3:"Welcome to our",
        ImgFoodNews:FoodNews,
        h1news:"Healty Food",
        h1news2:"Collection!",
        pnews:"Proin varius, orci mattis dapibus efficitur,dolor",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Shop now!"
    },
    {
        h3:"Welcome to our",
        ImgFoodNews:FoodNews,
        h1news:"Healty Food",
        h1news2:"Collection!",
        pnews:"Proin varius, orci mattis dapibus efficitur,dolor",
        pnews2:"lectus pharetra felis, Ut dapibus ante porttitor,",
        pnews3:"id bibendum diam sodales!",
        linknews: "Shop now!"
    },
]

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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
                        <PNews>{promo.pnews}<br/>{promo.pnews2}<br/>{promo.pnews3}</PNews>
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
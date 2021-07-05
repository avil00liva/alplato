import React from 'react'
import FoodNews from "../../images/Foods/food-2.jpg"
import {
NewsContianer,
SectionNews,
NewsDiv,
H3News,
ImgFoodNews,
H1News,
PNews,
LinkAddressNews,
SideImg,
} from "./promoElements"

const News = () => {
    return (
        <>
            <NewsContianer>
                <SectionNews>
                    <NewsDiv>
                        <H3News>Welcome to our</H3News>
                        <ImgFoodNews src={FoodNews} type="food-2/jpg"/>
                        <H1News>Healty Food <br />Collection!</H1News>
                        <PNews>Proin varius, orci mattis dapibus efficitur,dolor <br />
                        lectus pharetra felis, Ut dapibus ante porttitor,<br />
                        id bibendum diam sodales.</PNews>
                        <LinkAddressNews>Shop now!</LinkAddressNews>
                    </NewsDiv>
                    <SideImg></SideImg>
                </SectionNews>
            </NewsContianer>
        </>
    )
}

export default News

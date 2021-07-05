import React from 'react'
import Plate1 from "../../images/Foods/food-5.jpg"
import Plate2 from "../../images/Foods/food-1.jpg"
import Plate3 from "../../images/Foods/food-4.jpg"
import Background from "../../images/Foods/cards-container-bg.jpg"
import {
CardsContainer,
H1Cards,
CardsWrapper,
FoodCards,
FoodCardImg,
H2Card,
PCard
} from "./cardsElements"

const Cards = () => {
    return (
        <>
            <CardsContainer style={{backgroundImage: `url(${Background})`}}>
                <H1Cards>Platos del día</H1Cards>
                <CardsWrapper>
                    <FoodCards>
                        <FoodCardImg src={Plate1}/>
                        <H2Card>Plato 1</H2Card>
                        <PCard>Lorem ipsum dolor sit amet consectetur adipisicing.</PCard>
                    </FoodCards>
                    <FoodCards>
                        <FoodCardImg src={Plate2}/>
                        <H2Card>Plato 2</H2Card>
                        <PCard>Lorem ipsum dolor sit amet consectetur adipisicing.</PCard>
                    </FoodCards>
                    <FoodCards>
                        <FoodCardImg src={Plate3}/>
                        <H2Card>Plato 3</H2Card>
                        <PCard>Lorem ipsum dolor sit amet consectetur adipisicing.</PCard>
                    </FoodCards>
                </CardsWrapper>
            </CardsContainer>
        </>
    )
}

export default Cards

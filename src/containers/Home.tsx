import React from "react";
import ContentContainer from "../components/ContentContainer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function Main(): JSX.Element {
    return (
        <ContentContainer>
            <PageTitle>Home Page</PageTitle>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                >
                    {
                        [1,2,3,4,5].map((slide, key) => (
                            <SwiperSlide key={key}>
                                <Link to="/">
                                    <Image src={"https://via.placeholder.com/1300x500.png?text=Unit "+slide}/>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </ContentContainer>
    );
}

export default Main;
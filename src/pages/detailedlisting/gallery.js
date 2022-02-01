import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const gallery = () => {
    return (
        <Container fluid>


            <Container className='d-flex align-items-center'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    zoom={true}

                >
                    <SwiperSlide>
                        <StaticImage
                            src="../images/squere.jpg"
                            alt="cysterna"
                            width={900}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage
                            src="../images/squere.jpg"
                            alt="cysterna"
                            width={900}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage
                            src="../images/squere.jpg"
                            alt="cysterna"
                            width={900}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage
                            src="../images/squere.jpg"
                            alt="cysterna"
                            width={900}
                        />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Container>
    )

};

export default gallery;

import React from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
export default function RecipeCard({ list }) {
    return (
        <div className="overflow-hidden">

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[80%] mx-auto "
            >
                {

                    list.map((item, i) => (
                        <SwiperSlide className=" bg-[#000] rounded-2xl shadow-orange" key={item.id}>
                            <div className="aspect-[10/11] bg-[red] rounded-2xl bg-center bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${item.thumb})`
                                }}
                            ></div>
                            <div className="h-[46px] flex items-center justify-center font-semibold uppercase text-orange text-md">{item.title}</div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

    );
}
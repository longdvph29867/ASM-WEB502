import React from "react";
import Slider from "react-slick";
import ItemProduct from "./ItemProduct";

type Props = {
  productsSame: Product[];
};

const ProductsSame: React.FC<Props> = ({ productsSame }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <h2 className=" text-3xl md:text-4xl font-semibold mb-12">
        Sản phẩm cùng loại
      </h2>
      {productsSame.length < 4 ? (
        <>
          <div className="lg:-mx-6 -mx-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {productsSame.map((product, index) => (
              <div key={index} className="py-6 lg:px-6 px-2">
                <ItemProduct product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="lg:-mx-6 -mx-2">
            <Slider {...settings} className="">
              {productsSame.map((product, index) => (
                <div key={index} className="py-6 lg:px-6 px-2">
                  <ItemProduct product={product} />
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsSame;

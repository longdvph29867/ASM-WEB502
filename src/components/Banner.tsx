// type Props = {}
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBanner1 from "../assets/img/hero-right-3.webp";
import imgBanner2 from "../assets/img/hero-right-2.webp";
import imgBanner3 from "../assets/img/hero-right.webp";
import imgBannerBg from "../assets/img/bg-banner.svg";
import Slider from "react-slick";
import "animate.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => {
      // Chèn lớp animate.css trước khi chuyển đổi slide
      const currentSlideText = document.getElementById(
        `slick-slide-text${current}`
      );
      const currentSlideImg = document.getElementById(
        `slick-slide-img${current}`
      );
      const nextSlideText = document.getElementById(`slick-slide-text${next}`);
      const nextSlideImg = document.getElementById(`slick-slide-img${next}`);
      if (currentSlideText) {
        currentSlideText.classList.remove(
          "animate__animated",
          "animate__fadeInLeft"
        );
        (currentSlideImg as HTMLElement).classList.remove(
          "animate__animated",
          "animate__fadeInUp"
        );
      }
      if (nextSlideText) {
        nextSlideText.classList.add(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__fast"
        );
        (nextSlideImg as HTMLElement).classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__fast"
        );
      }
    },
  };
  return (
    <div>
      <div className="bg-[#E3FFE6] relative">
        <img
          src={imgBannerBg}
          alt=""
          className="absolute w-full h-full object-cover left-0 top-0"
        />
        <Slider {...settings} className="">
          <div>
            <div className="relative left-0 top-0 w-full h-full pb-[42%]">
              <div className="absolute h-full w-full top-0 left-0">
                <div className="container mx-auto h-full flex justify-end">
                  <img
                    src={imgBanner2}
                    alt=""
                    className="h-full absolute"
                    id="slick-slide-img0"
                  />
                  <div id="slick-slide-text0" className="h-full w-full">
                    <div className="flex justify-center items-start h-full flex-col">
                      <span className="text-base sm:text-xl text-slate-700">
                        Trong mùa này, hãy tìm điều tốt nhất
                      </span>
                      <h1 className="mt-1 ls:leading-10 sm:mt-2 lg:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800">
                        Bộ sưu tập độc quyền <br /> cho mọi người
                      </h1>
                      <a
                        className="mt-2 sm:mt-4 lg:mt-12 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 sm:py-5 sm:px-9 bg-slate-800 text-slate-50 shadow-xl"
                        href="/"
                      >
                        <span>Xem ngay</span>
                        <span>
                          <svg
                            className="w-5 h-5 ml-2.5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 22L20 20"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative left-0 top-0 w-full h-full pb-[42%]">
              <div className="absolute h-full w-full top-0 left-0">
                <div className="container mx-auto h-full flex justify-end">
                  <img
                    src={imgBanner1}
                    alt=""
                    className="h-full absolute"
                    id="slick-slide-img1"
                  />
                  <div id="slick-slide-text1" className="h-full w-full">
                    <div className="container mx-auto flex justify-center items-start h-full flex-col">
                      <span className="text-base sm:text-xl text-slate-700">
                        Khám phá những điều tuyệt vời nhất
                      </span>
                      <h1 className="mt-1 ls:leading-10 sm:mt-2 lg:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800">
                        Khám phá xu hướng <br /> mới nhất
                      </h1>
                      <a
                        className="mt-2 sm:mt-4 lg:mt-12 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 sm:py-5 sm:px-9 bg-slate-800 text-slate-50 shadow-xl"
                        href="/"
                      >
                        <span>Xem ngay</span>
                        <span>
                          <svg
                            className="w-5 h-5 ml-2.5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 22L20 20"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative left-0 top-0 w-full h-full pb-[42%]">
              <div className="absolute h-full w-full top-0 left-0">
                <div className="container mx-auto h-full flex justify-end">
                  <img
                    src={imgBanner3}
                    alt=""
                    className="h-full absolute"
                    id="slick-slide-img2"
                  />
                  <div id="slick-slide-text2" className="h-full w-full">
                    <div className="container mx-auto flex justify-center items-start h-full flex-col">
                      <span className="text-base sm:text-xl text-slate-700">
                        Hãy tìm kiếm những niềm vui tuyệt vời
                      </span>
                      <h1 className="mt-1 ls:leading-10 sm:mt-2 lg:mt-6 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800">
                        Chọn lựa phong cách <br /> tuyệt vời
                      </h1>
                      <a
                        className="mt-2 sm:mt-4 lg:mt-12 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 sm:py-5 sm:px-9 bg-slate-800 text-slate-50 shadow-xl"
                        href="/"
                      >
                        <span>Xem ngay</span>
                        <span>
                          <svg
                            className="w-5 h-5 ml-2.5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 22L20 20"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

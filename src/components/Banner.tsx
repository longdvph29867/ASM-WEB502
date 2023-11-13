// type Props = {}
import imgBanner1 from "../assets/img/hero-right-3.webp";
import imgBannerBg from "../assets/img/bg-banner.svg";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="bg-[#E3FFE6] relative">
          <img src={imgBannerBg} alt="" />
          <div className="absolute left-0 top-0 w-full h-full ">
            <div className="container mx-auto h-full flex justify-end">
              <img src={imgBanner1} alt="" className="h-full" />
              <div className="absolute left-0 top-0 h-full w-full">
                <div className="container mx-auto flex justify-center items-start h-full flex-col">
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
    </div>
  );
};

export default Banner;

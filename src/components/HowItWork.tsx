import img1 from "../assets/img/HIW1img.webp";
import img2 from "../assets/img/HIW2img.webp";
import img3 from "../assets/img/HIW3img.webp";
import img4 from "../assets/img/HIW4img.webp";

const HowItWork = () => {
  return (
    <div>
      <div className="mt-28">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
              <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                <img src={img1} alt="" />
              </div>
              <div className="text-center mt-auto space-y-5">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                  Step 1
                </span>
                <h3 className="text-base font-semibold">Lọc &amp; Khám phá</h3>
                <span className="block text-slate-600 text-sm leading-6">
                  Lọc và đề xuất giúp bạn dễ dàng tìm thấy dễ dàng
                </span>
              </div>
            </div>
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
              <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                <img src={img2} alt="" />
              </div>
              <div className="text-center mt-auto space-y-5">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100">
                  Step 2
                </span>
                <h3 className="text-base font-semibold">Thêm vào giỏ hàng</h3>
                <span className="block text-slate-600 text-sm leading-6">
                  Dễ dàng chọn đúng mặt hàng và thêm vào giỏ hàng
                </span>
              </div>
            </div>
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
              <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                <img src={img3} alt="" />
              </div>
              <div className="text-center mt-auto space-y-5">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100">
                  Step 3
                </span>
                <h3 className="text-base font-semibold">Chuyển phát nhanh</h3>
                <span className="block text-slate-600 text-sm leading-6">
                  Nhà vận chuyển sẽ xác nhận và gửi hàng nhanh chóng tới bạn
                </span>
              </div>
            </div>
            <div className="relative flex flex-col items-center max-w-xs mx-auto">
              <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                <img src={img4} alt="" />
              </div>
              <div className="text-center mt-auto space-y-5">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100">
                  Step 4
                </span>
                <h3 className="text-base font-semibold">Tận hưởng sản phẩm</h3>
                <span className="block text-slate-600 text-sm leading-6">
                  Hãy vui vẻ và tận hưởng những sản phẩm chất lượng 5 sao
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

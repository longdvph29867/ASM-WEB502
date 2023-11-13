
// type Props = {}
import facebook from '../assets/img/facebook.svg'
import twitter from '../assets/img/twitter.svg'
import youtube from '../assets/img/youtube.svg'
import telegram from '../assets/img/telegram.svg'
import imglogo from '../assets/img/logo140.svg'



const Footer = () => {
  return (
  <div className="relative py-16 lg:pt-24 lg:pb-20 border-t border-neutral-200">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
        <div className="grid gap-3">
          <a className=" pb-4 inline-block text-slate-600 flex-shrink-0" href="#">
            <img alt="" className="block h-8 sm:h-10 w-auto" src={imglogo} />
          </a>
          <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2">
            <div className="w-5 ">
              <img alt="" src={facebook} />
            </div>
            <span className="text-sm">Facebook</span>
          </a>
          <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2">
            <div className="w-5 ">
              <img alt="" src={youtube} />
            </div>
            <span className="text-sm">Youtube</span>
          </a>
          <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2">
            <div className="w-5 ">
              <img alt="" src={telegram} />
            </div>
            <span className="text-sm">Telegram</span>
          </a>
          <a href="#" className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2">
            <div className="w-5 ">
              <img alt="" src={twitter} />
            </div>
            <span className="text-sm">Twitter</span>
          </a>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700">Về Ciseco.</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Thông tin</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Danh sách cửa hàng</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Cơ Hội Nghề Nghiệp</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700">Trợ giúp</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">FAQ</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Chính sách trả hàng</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Chính sách bảo mật</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Tiếp cận</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700">Tài khoản</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Hồ sơ</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Tư cách thành viên</a>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-black" href="#" target="_blank">Phiếu giảm giá</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Footer
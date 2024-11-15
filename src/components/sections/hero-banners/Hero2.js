import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-3-normal">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-video mb-50 d-none">
                        <Link
                          className="ltn__video-icon-2 ltn__video-icon-2-border"
                          href="https:www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play"></i>
                        </Link>
                      </div>
                      <h6 className="slide-sub-title animated text-white">
                        <Image
                          width={29}
                          height={27}
                          src="/img/coffee/beans1-min.png"
                          alt="#"
                        />{" "}
                        100% genuine Products
                      </h6>
                      <h1 className="slide-title animated text-white">
                        Our Most <br /> Favorite Coffee
                      </h1>
                      <div className="slide-brief animated">
                        <p className="text-white">
                          Our Special beans with signature form across area in Indonesia
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/shop"
                          className="theme-btn-1 btn btn-effect-1 text-uppercase"
                        >
                          Explore Products
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <Image
                      src="/img/coffee/beans1-min.png"
                      alt="#"
                      width={1100}
                      height={801}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-3-normal">
          <div className="ltn__slide-item-inner  text-right text-end">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title ltn__secondary-color animated">
                        {"//"} Fresh from farm
                      </h6>
                      <h1 className="slide-title animated text-white">
                        Tasty & Special <br /> Organic Beans
                      </h1>
                      <div className="slide-brief animated">
                        <p className="text-white">
                          Fresh from best farm in Various area in East Java.
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/shop"
                          className="theme-btn-1 btn btn-effect-1 text-uppercase"
                        >
                          Explore Products
                        </Link>
                        <Link
                          href="/about"
                          className="btn btn-transparent btn-effect-3 text-white"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img slide-img-left">
                    <Image
                      src="/img/coffee/beans2-min.png"
                      alt="#"
                      width={694}
                      height={605}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

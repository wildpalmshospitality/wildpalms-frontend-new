import Image, { StaticImageData } from "next/image";
import Fancybox from "@/components/common/Fancybox";

import bigCarousel_1 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (1).jpeg"
import bigCarousel_2 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (2).jpeg"
import bigCarousel_3 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (3).jpeg"
import bigCarousel_4 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (4).jpeg"

import smallCarousel_1 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (4).jpeg"
import smallCarousel_2 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (5).jpeg"
import smallCarousel_3 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (6).jpeg"
import smallCarousel_4 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (7).jpeg"

const largeThumb: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37"];

interface DataType {
  big_carousel: StaticImageData[];
  small_carousel: StaticImageData[];
}

const gallery_data: DataType = {
  big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4],
  small_carousel: [smallCarousel_1, smallCarousel_2, smallCarousel_3, smallCarousel_4],
}

const { big_carousel, small_carousel } = gallery_data;

const MediaGallery = ({ style }: any) => {
  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className={` bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                See all Photos
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {largeThumb.map((thumb: any, index: any) => (
                    <a key={index} className="d-block" data-fancybox="img2" href={`/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (${thumb}).jpeg`}></a>
                  ))}
                </Fancybox>
              </div>

              <div className="carousel-inner">
                {big_carousel.map((carousel, index) => (
                  <div key={index} className="carousel-item active">
                    <Image src={carousel} alt="" className="w-100 border-20" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#media_slider"
                data-bs-slide="prev">
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#media_slider"
                data-bs-slide="next">
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
            {small_carousel.map((carousel, i) => (
              <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`} className="active"
                aria-current="true" aria-label="Slide 1">
                <Image src={carousel} alt="" className="w-100 border-10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaGallery

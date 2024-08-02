"use client"
import NiceSelect from "@/ui/NiceSelect"
import MediaGallery from "./MediaGallery"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import Sidebar from "./Sidebar"
import CommonBanner from "../prop1/Banner"
import CommonPropertyOverview from "../../ListingDetails/listing-details-common/CommonPropertyOverview"
import CommonPropertyFeatureList from "../../ListingDetails/listing-details-common/CommonPropertyFeatureList"
import CommonAmenities from "../../ListingDetails/listing-details-common/CommonAmenities"
import CommonPropertyVideoTour from "../../ListingDetails/listing-details-common/CommonPropertyVideoTour"
import CommonPropertyFloorPlan from "../../ListingDetails/listing-details-common/CommonPropertyFloorPlan"
import CommonNearbyList from "../../ListingDetails/listing-details-common/CommonNearbyList"
import CommonSimilarProperty from "../../ListingDetails/listing-details-common/CommonSimilarProperty"
import CommonProPertyScore from "../../ListingDetails/listing-details-common/CommonProPertyScore"
import CommonLocation from "../../ListingDetails/listing-details-common/CommonLocation"
import CommonReviewForm from "../../ListingDetails/listing-details-common/CommonReviewForm"

const ListingDetailsOneArea = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
         <div className="container">
            <CommonBanner />
            <MediaGallery />
            <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
               <h4 className="sub-title-one mb-40 lg-mb-20">Property Overview</h4>
               <CommonPropertyOverview />
            </div>
            <div className="row">
               <div className="col-xl-8">
                  <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
                     <h4 className="mb-20">Overview</h4>
                     <p className="fs-20 lh-lg">This villa, named WP-CM, just a stone's throw away from the serene Candolim Beach, offers a luxurious stay for up to 9 guests with its 3 bedrooms. Rated 5 stars by guests, it promises an unforgettable experience. Whether you're here for relaxation or adventure, WP-CM has something for everyone. Its popularity among visitors highlights its exceptional quality and service. Book your stay today for just 25000 per day and create lasting memories.</p>
                  </div>
                  <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
                     <h4 className="mb-20">Property Features</h4>
                     <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.</p>
                     <div className="accordion-style-two mt-45">
                        <CommonPropertyFeatureList />
                     </div>
                  </div>
                  <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities />
                  </div>
                  <div className="property-video-tour mb-50">
                     <CommonPropertyVideoTour />
                  </div>
                  <CommonPropertyFloorPlan style={false} />
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty />
                  <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
                     <CommonProPertyScore />
                  </div>
                  <div className="property-location mb-50">
                     <CommonLocation />
                  </div>

                  <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
                     <div className="position-relative z-1">
                        <div className="d-sm-flex justify-content-between align-items-center mb-10">
                           <h4 className="m0 xs-pb-30">Reviews</h4>
                           <NiceSelect className="nice-select"
                              options={[
                                 { value: "01", text: "Newest" },
                                 { value: "02", text: "Best Seller" },
                                 { value: "03", text: "Best Match" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />
                        </div>
                        <Review style={true} />
                     </div>
                  </div>
                  <div className="review-form bg-white shadow4 border-20 p-40">
                     <CommonReviewForm />
                  </div>
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsOneArea

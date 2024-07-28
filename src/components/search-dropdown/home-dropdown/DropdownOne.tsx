import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_0';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left">
                  <div className="label">I’m looking for...</div>
                  <NiceSelect className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "house", text: "House" },
                        { value: "cottage", text: "Cottage" },
                        { value: "flat", text: "Flat" },
                        { value: "villas", text: "Villa" },
                        { value: "luxury-villa", text: "Luxury Villa" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-4"} col-lg-4`}>
               <div className="input-box-one border-left">
                  <div className="label">Location</div>
                  <NiceSelect className={`nice-select location ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "candolim", text: "Candolim, Goa" },
                        { value: "vagator", text: "Vagator, Goa" },
                        { value: "arpora", text: "Arpora, Goa" },
                        { value: "assagao", text: "Assagao, Goa" },
                        { value: "nerul", text: "Nerul, Goa" },
                        { value: "siolim", text: "Siolim, Goa" },
                        { value: "morjim", text: "Morjim, Goa" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left border-lg-0">
                  <div className="label">Price Range</div>
                  <NiceSelect
                     className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "1", text: "₹0 - ₹10,000" },
                        { value: "2", text: "₹10,000 - ₹25,000" },
                        { value: "3", text: "₹25,000 - ₹55,000" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-2"}`}>
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Search Now" : "Search"}</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;

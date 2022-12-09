import ResearchCart from "./ResearchCart";

const Portfolio = () => {

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };
  return (
    <div className="dizme_tm_section" id="portfolio">
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Research</span>
            <h3 className="flex flex-col mt-11">My Amazing Works</h3>
            <p className="">
            We are interested in building practical, reliable, secure, and high-performance systems. Our research contributions have been published at top-tier systems, architecture, and security conferences, some of them are being transferred into products and have been featured by CACM, the Register, CBR, PCWorld, ZDNet, and many other media agencies.
            </p>
            <br />
            <p>
            Our research is supported in part by NSF, Army Research, Western Digital, NetApp, Google, Intel, and IBM Research.
            </p>
          </div>
          <ResearchCart/>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

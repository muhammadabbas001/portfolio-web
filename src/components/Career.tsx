import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. iOS Engineer</h4>
                <h5>Wow Earn</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Integrated high quality Chat, Video & Audio Call and Ucard features. Improved business logic for better app performance and reduced technical debt.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. iOS Engineer</h4>
                <h5>Vigorous Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Implemented Clean Architecture in iOS applications. Led a cross-functional team to successfully deliver 7 iOS applications. Streamlined the iOS release process using CI/CD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Engineer</h4>
                <h5>Inov8 Limited</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed and implemented the RASST payment module. Enhanced the Meezan Bank app's sign-up flow. Meezan Bank app achieved 5M+ installs on App Stores.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Engineer</h4>
                <h5>iParagons</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Improved the company's revenue by developing a location recommendation system using recombee. Handled the complete TestFlight & App Store distribution process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import React from "react"

return (
  <div>
    {/* Content wrapper start */}
    <div className="content-wrapper">
      {/* Row start */}
      <div className="row justify-content-center">
        <div className="col-sm-4 col-12">
          {/* Pricing plan start */}
          <div className="pricing-plan shade-blue">
            <div className="pricing-header">
              <h4 className="pricing-title">Basic</h4>
              <div className="pricing-cost">$29.00</div>
              <div className="pricing-save">Save $5.00</div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>5GB Linux Web Space</li>
                <li>5 MySQL Databases</li>
                <li>500 Emails</li>
                <li className="text-muted"><del>24/7 Tech Support</del></li>
                <li className="text-muted"><del>Daily Backups</del></li>
              </ul>
              <div className="pricing-footer">
                <a href="#" className="btn  btn-light btn-lg">Select Plan</a>
              </div>
            </div>
          </div>
          {/* Pricing plan end */}
        </div>
        <div className="col-sm-4 col-12">
          {/* Pricing plan start */}
          <div className="pricing-plan shade-blue">
            <div className="pricing-header">
              <h4 className="pricing-title">Business</h4>
              <div className="pricing-cost">$59.00</div>
              <div className="pricing-save">Save $11.00</div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>10GB Linux Web Space</li>
                <li>10 MySQL Databases</li>
                <li>1000 Emails</li>
                <li>24/7 Tech Support</li>
                <li className="text-muted"><del>Daily Backups</del></li>
              </ul>
              <div className="pricing-footer">
                <a href="#" className="btn  btn-light btn-lg">Select Plan</a>
              </div>
            </div>
          </div>
          {/* Pricing plan end */}
        </div>
        <div className="col-sm-4 col-12">
          {/* Pricing plan start */}
          <div className="pricing-plan shade-green">
            <div className="pricing-header">
              <h4 className="pricing-title">Enterprise</h4>
              <div className="pricing-cost">$99.00</div>
              <div className="pricing-save">Save $29.00</div>
            </div>
            <div className="pricing-body">
              <ul className="pricing-features">
                <li>50GB Linux Web Space</li>
                <li>100 MySQL Databases</li>
                <li>Unlimited Emails</li>
                <li>24/7 Tech Support</li>
                <li>Daily Backups</li>
              </ul>
              <div className="pricing-footer">
                <a href="#" className="btn btn-light btn-lg">Select Plan</a>
              </div>
            </div>
          </div>
          {/* Pricing plan end */}
        </div>
      </div>
      {/* Row end */}
    </div>
    {/* Content wrapper end */}
  </div>
  )

export default wrapper


import React from "react";
import { CompanyServiceIml } from "../../actions/admin-actions";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import imgB1 from "../../assets/image/l1/png/smal-logo1.png";


const Brands = () => {
  const { t, i18n } = useTranslation()
  const [companys, setCompanys] = useState([]);
  useEffect(() => {
    CompanyServiceIml.getAllCompanys().then((response) => { setCompanys(response.data.data) });
  }, [])

  const companyList = companys.map(company => {
    return <a href="https://www.topcv.vn/cong-ty/cong-ty-tnhh-khu-du-lich-vinh-thien-duong-alma/3387.html" class="company-item" style={{"border":"1px solid #f4f4f4", "margin":"20px","height": "100px", "width":"167px", "alignItems": "center", "justifyContent": "center", "display": "flex"}}>
      <img src={company.image ? company.image : imgB1} alt="Công ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA)" class="lazy img-responsive" style={{"display": "block",  "width":"auto", "max-height": "100%", "padding-top":"auto", "padding-bottom":"auto"}}/>
      </a>
  });
  return (
    <>
      <div className="dark-mode-texts pt-13 pt-lg-24 pb-12 pb-lg-23">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-9 text-center text-lg-left">
                <h5 className="font-size-6 font-weight-normal text-black">
                  {t('company.top')}
                </h5>
              </div>
            </div>
          </div>
          <div className="row align-items-center" style={{"display": "flex", "justify-content": "flex-start"}}>
            {companyList}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;

import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-top">
        <div>
        
  <p>Contact Foddieloo</p>
          <a href='/contact'>
          <button className="btn">Contact</button>
          </a>
        </div>

        <div>
          <p>Follow us on Social Media</p>
          <i className="icons">
            <Icon icon="cib:facebook-f" inline={true} />
          </i>

          <i className="icons">
       
            <Icon icon="akar-icons:linkedin-v2-fill" inline={true} />
          </i>
          <i className="icons">
            <Icon icon="bi:twitter" inline={true} />
          </i>
          <i className="icons">
            <Icon icon="ant-design:github-filled" inline={true} />
          </i>
        </div>

        <div>
          <p>Never miss out on our most popular deals</p>
          <input placeholder="enter your email address" />
        </div>
      </ul>
    </div>
  );
}

export default Footer;

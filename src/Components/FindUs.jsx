import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const FindUs = () => {
  return (
    <div className="py-5">
      <h1 className="font-semibold mb-3 ">Find Us On</h1>
      <div>
        <div className="join flex join-vertical *:bg-base-100">
          <button className="btn join-item justify-start">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn join-item justify-start">
          <LiaLinkedin></LiaLinkedin> Linkedin

          </button>
          <button className="btn join-item justify-start">
          <FaWhatsapp></FaWhatsapp>WhatsApp
            </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

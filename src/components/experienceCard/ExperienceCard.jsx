import React, { useState, useEffect, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    try {
      if (imgRef && imgRef.current && imgRef.current.complete) {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(imgRef.current, 2);
        const color1 = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`;
        const color2 = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`;

        const gradient = `linear-gradient(to bottom, ${color1}, ${color2})`;
        setColorArrays(gradient);
      } else {
        console.log(
          "Image reference is not valid or the image is not fully loaded."
        );
      }
    } catch (err) {
      console.log("Error:", err);
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };

  const totalExperience = (date) => {
    const startDate = new Date(date);

    const currentDate = new Date();

    const monthsDifference =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());

    const yearsOfExperience = Math.floor(monthsDifference / 12);
    const remainingMonths = monthsDifference % 12;

    return `(${yearsOfExperience} Years and ${remainingMonths} Months)`;
  };

  return (
    <div className="experience-card">
      <div style={{ background: colorArrays }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        <p className="subTitle experience-text-desc">
          {totalExperience(cardInfo.joinDate)}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}

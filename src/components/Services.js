import React, { Component } from "react";
import { GiVacuumCleaner, GiLargePaintBrush, GiHouseKeys } from "react-icons/gi";
import { BiHomeSmile } from "react-icons/bi";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiVacuumCleaner />,
        title: "Tools for the Job",
        info:
          "We remain mindful of what cleaning chemical to use and when and where. We strive to use the best tools for making your property clean and refreshed."
      },
      {
        icon: <GiLargePaintBrush />,
        title: "Unmatched Cleaning",
        info:
          "We promise to do our best to make sure you are satisfied with how clean, organized, and refreshed your home will be after our cleaning services are complete."
      },
      {
        icon: <GiHouseKeys />,
        title: "Honest & Trutworthy",
        info:
          "We take pride in our job and with that pride comes responsibility, we will honor your privacy request and provide a trustworthy and honest service."
      },
      {
        icon: <BiHomeSmile />,
        title: "Friendly Home",
        info:
          "We make customer satisfaction our number one priority, we gaurentee complete satisfaction with our friendly home service."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
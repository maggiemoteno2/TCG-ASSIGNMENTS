import React, { Component } from "react";
import DetailsForm from "./../DetailsForm";
import { NavLink, Link } from "react-router-dom";

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      descriptions: [
        {
          id: 1,
          name: "Birthday",
          description:
            "Come celebrate with us on the 14th of January 6:00 in the evening at Gold reef city",
          isShow: false,
        },
        {
          id: 2,
          name: "Wedding",
          description:
            "Looking forward to sharing with you the sun,the sea and the memories with u of the wedding day,Saturday the 25th of June at Jamaica 15:00 afternoon",
          isShow: false,
        },
        {
          id: 3,
          name: "Prom night",
          description: "Prom night is here!!! congratulations class of 2020 come join us for the first prom night of the year 5pm  Tuesday 23rd  April at Johannesburg Gold reef City",
          isShow: false,
        },
      ],
    };
  }
  toggleShowDescription = (eventId) => {
    const { descriptions } = this.state;
    descriptions[eventId - 1].isShow = true;
    this.setState({ descriptions });
    console.log(descriptions);
  };

  render() {
    const { descriptions } = this.state;
    const events = descriptions.map((event) => (
      <div key={event.id}>
        <h2 onClick={() => this.toggleShowDescription(event.id)}>
          {event.name}
        </h2>
        {event.isShow === true ? (
          <h2 className="details">
            {event.description}
            <DetailsForm />
          </h2>
        ) : null}
      </div>
    ));
    return <div className="events">{events}</div>;
  }
}

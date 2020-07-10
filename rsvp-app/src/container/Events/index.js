import React, { Component } from "react";
import DetailsForm from "./../DetailsForm";
import { NavLink, Link } from "react-router-dom";

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      occasions: [
        {
          id: 1,
          name: "Birthday",
          description:
            "Lulu is turning 21!!!!!!!!!!!!!      Come celebrate with us on the 14th of January 6:00 in the evening at Gold reef city",
          isShow: false,
          image:'https://cdn.pixabay.com/photo/2019/11/29/11/52/happy-kwanzaa-4661172_960_720.jpg'
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
    const { occasions } = this.state;
    occasions[eventId - 1].isShow = true;
    this.setState({ occasions });
    console.log(occasions);
  };

  render() {
    const { occasions } = this.state;
    const events = occasions.map((event) => (
      <div key={event.id}>
        <h2 onClick={() => this.toggleShowDescription(event.id)}>
          {event.name}
        </h2>
        {event.isShow === true ? (
          <h2 >
            {event.description}
            <div className="detailsForm">
            <DetailsForm />
            </div>
            </h2>
          
         
        ) : null}
      </div>
    ));
    return <div className="events">{events}</div>;
  }
}

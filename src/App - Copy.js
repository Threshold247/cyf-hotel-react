import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer array={array} />
    </div>
  );
};

export default App;

const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="hotel"
      />
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="row">
      <GlasGow />
      <Manchester />
      <London />
    </div>
  );
};

const GlasGow = () => {
  return (
    <div className="card">
      <img
        src="https://peoplemakeglasgow.com/templates/people/helper/timthumb.php?w=200&h=115&src=images/Neighbourhoods/South/Fairfield-Shipyard-Offices--McAteer.jpg"
        alt="Glasgow"
        className="card-img-top"
      />
      <div className="card-body">
        <p>This is Glasgow</p>
        <a
          className="btn btn-primary"
          href="https://peoplemakeglasgow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go there{" "}
        </a>
      </div>
    </div>
  );
};

const Manchester = () => {
  return (
    <div className="card">
      <img
        src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FBWH_external_2015_Ben_Blackall_1310760329.jpg&action=ProductDetail"
        alt="Manchester"
        className="card-img-top"
      />
      <div className="card-body">
        <p>This is Manchester</p>
        <a
          className="btn btn-primary"
          href="https://visitmanchester.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go there{" "}
        </a>
      </div>
    </div>
  );
};

const London = () => {
  return (
    <div className="card">
      <img
        src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/lastminutelondoneye640x360.jpg?mw=640&hash=369C7DBB3A75160763BFD8572303D124F316A65C"
        alt="London"
        className="card-img-top"
      />
      <div className="card-body">
        <p>This is London</p>
        <a
          className="btn btn-primary"
          href="https://visitlondon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go there{" "}
        </a>
      </div>
    </div>
  );
};
const array = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = props => {
  const { array } = props;
  return (
    <footer>
      <ul>
        {array.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </footer>
  );
};

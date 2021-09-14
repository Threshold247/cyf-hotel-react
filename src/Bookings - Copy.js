import React from "react";
import Search from "./Search.js";

//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />/{/*}  <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;

const SearchResults = () => {
  const headerArray = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room Id",
    "Check in Date",
    "Check out Date"
  ];

  return (
    <div>
      <table className="table table striped table-bordered">
        <thead>
          <tr>
            {headerArray.map((heading, index) => (
              <th scope="col" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {FakeBookings.map(({ id, title }) => (
              <th scope="row">{id}</th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
//{FakeBookings.map(({id,title,firstName,surname,email,number,roomId,checkInDate,checkOutDate,index}) =>
//             <th scope ="row" key={index}><td>{id}</td></th>)<th scope="row"></th>
//              {FakeBookings.map((data =>
//              <td>console.log(data)</td>)

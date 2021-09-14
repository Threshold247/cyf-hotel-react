import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const headerArray = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room Id",
    "Check in Date",
    "Check out Date",
    "Nights Stayed",
    "Customer Profile"
  ]; //table header
  const { bookings } = props; //table data

  //setup color 1 and color 2
  const blank = "";
  const blue = "#03adfc";
  const [colorChg, setColorChg] = useState([]);

  const [state, setState] = useState("");

  function changeNumber() {
    setState(state + 1);
  }

  function handleColorChg(id) {
    //this function sets up useState variable
    //if the list includes the id remove it from the list/array using filter method
    //(else)if the id is excluded add it to the list/array using concat method

    if (colorChg.includes(id)) {
      setColorChg(colorChg.filter(el => el !== id));
    } else {
      setColorChg(colorChg.concat(id));
    }
  }
  function nightStayed(start, end) {
    //this function works out the difference in days by using Moment.js
    //specified to work out days by referencing "days" in .diff() method

    const startDate = moment(start);
    const endDate = moment(end);
    const DiffInDays = startDate.diff(endDate, "days");
    return DiffInDays;
  }

  const centerMyText = { textAlign: "center" }; //setup a centering variable for style
  return (
    <div style={{ verticalAlign: "middle" }}>
      <table className="table table-striped table-bordered">
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
          {bookings.map(
            ({
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            }) => (
              <tr
                key={id}
                style={
                  colorChg.includes(id)
                    ? { backgroundColor: blue }
                    : { backgroundColor: blank }
                }
                onDoubleClick={() => handleColorChg(id)}
              >
                <td style={centerMyText}>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td style={centerMyText}>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td style={centerMyText}>
                  {nightStayed(checkOutDate, checkInDate)}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-sm btn-primary"
                    onClick={changeNumber}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <p>Test</p>
      <CustomerProfile />
    </div>
  );
};

export default SearchResults;

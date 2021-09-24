import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import Button from "@material-ui/core/Button";


const SearchResults = ({bookings}) => {
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


  //setup color 1 and color 2
  const blank = "";
  const blue = "#03adfc";
  const [colorChg, setColorChg] = useState([]);

  const [profile,setProfile]=useState("Customer Profile")



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

  //this function works out the difference in days by using Moment.js
  //specified to work out days by referencing "days" in .diff() method
  function nightStayed(start, end) {

    const startDate = moment(start);
    const endDate = moment(end);
    const DiffInDays = startDate.diff(endDate, "days");
    return DiffInDays;
  }

	const centerMyText = { textAlign: "center" }; //setup a centering variable for style

  const showProfile = (id) => {
    console.log("Button Clicked",id);
    const test =(bookings.filter(booking => booking.id ===id));
    console.log(test);
    setProfile(test.map(({id,title}) => (`${id},${title}`)));
	}

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
                  <Button
                    variant='contained'
                    color = 'primary'
                    onClick ={()=> showProfile(id)}
                  >
                    Show Profile
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <CustomerProfile profile={profile} />
    </div>
  );
};

export default SearchResults;

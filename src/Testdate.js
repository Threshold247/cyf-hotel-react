import React from "react";
import moment from "moment";

const Test =(props) => {
	const {bookings}=props;
	
	function stayed(start,end) {
	const startDate  = moment(start);
	const endDate = moment(end);
	const difference = startDate.diff(endDate,'days');
	return difference;
	}
	return (
		<div>	
			<ul>
			{bookings.map((data, index)=> 
			(<li key={index}>{stayed(data.checkOutDate,data.checkInDate)}</li>)
			)}			
			</ul>
		</div>
		
	)
}

export default Test;
import React, { useState } from "react";
import './Date.css'

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className="date">
            <h6 className="text-muted">Posted on {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h6>
    </div>
  );
};
export default DateTime
import TawkTo from "tawkto-react";
import React from "react";

const Bot = () => {
  let propertyId = "64b65c5c94cf5d49dc6448f0";
  let tawkId = "1h5k5hjjh";
  React.useEffect(() => {
    var tawk = new TawkTo(propertyId, tawkId);

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);
  return;
  <></>;
};

export default Bot;

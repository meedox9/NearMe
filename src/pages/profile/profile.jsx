import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "./profile.css";
function profile() {
  return (
    <div>
      <GooglePlacesAutocomplete apiKey="AIzaSyDtlcbH_klvsg3ffoVE_6H2tylL4UxtatI" />
      <h3>
        {" "}
        This is a demo to show the progress of the search bar functionality,
        please stay tuned for final iteration!!
      </h3>
    </div>
  );
}

export default profile;

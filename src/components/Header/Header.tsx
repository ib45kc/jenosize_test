import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { useStoreActions } from "../../store";
import { RouteComponentProps, useHistory } from "react-router-dom";

export interface HeaderProps {
  logoImage: string;
}

export const Header = (
  { logoImage }: HeaderProps,
  props: RouteComponentProps
) => {
  const [query, setQuery] = useState<string>("");
  const updateData = useStoreActions((x) => x.restaurant.updateData);
  const history = useHistory();
  const handlePlaceSearch = () => {
    let map = document.createElement("div");
    map.setAttribute("id", "map");
    document.body.appendChild(map);
    var service = new google.maps.places.PlacesService(map);
    const request = {
      query: query,
      type: "food",
    };
    service.textSearch(
      request,
      (
        results: google.maps.places.PlaceResult[],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          updateData(results);
          history.push("PlaceMenu");
        } else {
          updateData(results);
          history.push("PlaceMenu");
        }
      }
    );
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePlaceSearch();
    }
  };
  const handleChange = (e: React.ChangeEvent) => {
    //@ts-ignore
    setQuery(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-4 mb-4 bg-white">
      <Image src={logoImage} className="img-fluid" width="150" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className={"ml-2"} style={{ height: 150 }}>
        <Nav className="justify-content-start flex-fill">
          <Nav.Link onClick={() => history.push("Home")}>Home</Nav.Link>
          <Nav.Link onClick={() => history.push("PlaceMenu")}>
            PlaceMenu
          </Nav.Link>
          <Nav.Link onClick={() => history.push("Contact")}>Contact</Nav.Link>
        </Nav>
        <Nav className="align-self-end mt-2">
          <div>
            <label className={""}>Search</label>
            <InputGroup>
              <FormControl
                id="query-search"
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="search-text"
                type="text"
                placeholder="Search"
              />
              <InputGroup.Append>
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faSearch}
                  flip={"horizontal"}
                />
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

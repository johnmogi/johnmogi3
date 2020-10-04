import React from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBHamburgerToggler,
  MDBCollapse,
  MDBIcon,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
// import { NavLink } from "react-router-dom";

export class Header extends React.Component {
  state = {
    collapse1: "",
  };

  toggleSingleCollapse = (collapseId) => () => {
    this.setState({
      [collapseId]: !this.state[collapseId],
    });
  };
  componentDidMount() {
    document.querySelector("nav").style.height = "75px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: "0.2rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleSingleCollapse("collapse2")}
      />
    );
    return (
      <div >
          <MDBNavbar style={navStyle} color="bg-white" light fixed="top" dark expand="md" scrolling transparent>
          <MDBContainer>
            <MDBNavbarBrand>

          <MDBNavLink link className="nav-link" to="/home" exact>
              <span className="white-text logo">JohnMogi</span>
            </MDBNavLink>
            <span className="white-text"> איפיון | עיצוב | תכנות </span>
            </MDBNavbarBrand>
            <MDBCollapse isOpen={this.state.collapse2} navbar >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink link className="nav-link" to="/home" exact>
                    בית
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link className="nav-link" to="/about" exact>
                    אודות
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link className="nav-link" to="/contact" exact>
                    צרו קשר
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>

              <MDBNavbarNav left>
                {" "}
                <MDBNavItem>
                  {" "}
                  <a id="phone"
                    href="tel:0509382456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn rounded size="lg" color="success">
                      050-9382456
                      <MDBIcon icon="phone-square" className="ml-2" />
                    </MDBBtn>
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <MDBHamburgerToggler
              onClick={this.toggleSingleCollapse("collapse2")}
              isOpen={false}
              id="hamburger2"
            />
          </MDBContainer>
        </MDBNavbar>

        {collapseID && overlay}
      </div>
    );
  }
}

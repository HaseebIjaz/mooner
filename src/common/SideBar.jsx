import React from "react";
import { Grid, makeStyles, Typography, Container } from "@material-ui/core";

import { NavLink, useLocation } from "react-router-dom";

// Left Sidebar SVG Icons //
import UserManagement from "../assets/svg/userManagement.svg";
import ServiceProvider from "../assets/svg/serviceProvider.svg";
import Documents from "../assets/svg/document.svg";
import Currency from "../assets/svg/currency.svg";
import Wallet from "../assets/svg/wallet.svg";
import FAQs from "../assets/svg/Group.svg";
import Password from "../assets/svg/password.svg";
import Catagory from "../assets/svg/category.svg";
import SignOut from "../assets/svg/signout.svg";
import Ticket from "../assets/svg/notes.svg";
import Questionaire from "../assets/svg/questionaire.svg";
import Announcement from "../assets/svg/announcement.svg";
import Banner from "../assets/svg/banner.svg";
import SP from "../assets/svg/sp.svg";
import MarchanddistStore from "../assets/svg/marchantdiseStore.svg";
import CollectionManagement from "../assets/svg/collectionManagement.svg";
import Subscribtion from "../assets/svg/subscribtion.svg";
import Radius from "../assets/svg/radius.svg";
import Country from "../assets/svg/country.svg";
import SubAdmins from "../assets/svg/subAdmins.svg";
import Reports from "../assets/svg/report.svg";

import { connect } from "react-redux";
import { logoutUserAction } from "../redux/actions/auth/auth.action";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    flexGrow: 1,
    padding: mainTheme.spacing(0),
    margin: mainTheme.spacing(0),
    maxWidth: "100%",
  },
  sidebarContainer: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  mainGridContainer: {
    maxWidth: "100%",
  },
  navHeading: {
    color: "white",
    marginBottom: mainTheme.spacing(4),

    fontWeight: "bold",
    fontSize: "18.2857px",
    lineHeight: "24px",
    letterSpacing: "0.2em",
    position: "sticky",
    top: 0,
    [mainTheme.breakpoints.only("xl")]: {
      marginLeft: mainTheme.spacing(2),
      paddingTop: mainTheme.spacing(5),
      paddingBottom: mainTheme.spacing(4),
      marginTop: mainTheme.spacing(0),
      backgroundColor: "#20253B",
      width: "100px",
    },
    [mainTheme.breakpoints.only("lg")]: {
      marginLeft: mainTheme.spacing(1),
      marginTop: mainTheme.spacing(0),
      paddingTop: mainTheme.spacing(4),
      paddingBottom: mainTheme.spacing(3),
      backgroundColor: "#20253B",
    },
  },
  navWrapper: {
    display: "flex",
    marginTop: mainTheme.spacing(2),
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "auto",
    [mainTheme.breakpoints.up("xl")]: {
      marginRight: mainTheme.spacing(5),
    },
  },
  links: {
    cursor: "pointer",
    height: "22px",
    width: "25px",
    margin: "15px 0px",
    [mainTheme.breakpoints.up("xl")]: {
      height: "22px",
      width: "25px",
    },
    [mainTheme.breakpoints.down("lg")]: {
      height: "17px",
      width: "17px",
    },
  },
  logOut: {
    marginTop: mainTheme.spacing(2),
    [mainTheme.breakpoints.up("xl")]: {
      marginTop: mainTheme.spacing(7),
      marginBottom: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("lg")]: {
      marginTop: mainTheme.spacing(7),
      marginBottom: mainTheme.spacing(0),
    },
  },
  myDiv: {
    color: "#20253B",
  },
  scrollbar: {
    position: "fixed",
    width: "10.16%",
    paddingLeft: "20px",
    overflowX: "hidden",
    overflowY: "scroll",
    minHeight: "100%",
    [mainTheme.breakpoints.up("xl")]: {
      height: "100%",
    },
    [mainTheme.breakpoints.down("lg")]: {
      height: "100%",
    },
  },
}));

const SideBar = ({ logoutUser }) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainGridContainer}>
        <Grid item xs={12} lg={12} xl={12} className={classes.sidebarContainer}>
          <Container className={classes.scrollbar}>
            <Typography className={classes.navHeading}>mooner</Typography>
            <div className={classes.navWrapper}>
              <NavLink
                to="/mooner/details/user_management"
                className={
                  location.pathname === "/mooner/details/user_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={UserManagement}
                  className={classes.links}
                  alt="UserManagement"
                  title="User Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/sp_management"
                className={
                  location.pathname === "/mooner/details/sp_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={SP}
                  className={classes.links}
                  alt="ServiceProvider"
                  title="Service Provider"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/questionaire"
                className={
                  location.pathname === "/mooner/details/questionaire"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Questionaire}
                  className={classes.links}
                  alt="questionaire"
                  title="Questionaire"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/document_management"
                className={
                  location.pathname === "/mooner/details/document_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Documents}
                  className={classes.links}
                  alt="Documents"
                  title="Document Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/mln"
                className={
                  location.pathname === "/mooner/details/mln"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Currency}
                  className={classes.links}
                  alt="MLN Payouts"
                  title="MLN Payouts"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/mnr"
                className={
                  location.pathname === "/mooner/details/mnr"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Wallet}
                  className={classes.links}
                  alt="Wallet"
                  title="wallet"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/fqa"
                className={
                  location.pathname === "/mooner/details/fqa"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={FAQs}
                  className={classes.links}
                  alt="FAQs"
                  title="FAQs"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/change_password"
                className={
                  location.pathname === "/mooner/details/change_password"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Password}
                  className={classes.links}
                  alt="Password"
                  title="Change Password"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/ticket_management"
                className={
                  location.pathname === "/mooner/details/ticket_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Ticket}
                  className={classes.links}
                  alt="Ticket Management"
                  title="Ticket Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/categories"
                className={
                  location.pathname === "/mooner/details/categories"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Catagory}
                  className={classes.links}
                  alt="Category"
                  title="Category Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/announcemet"
                className={
                  location.pathname === "/mooner/details/announcemet"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Announcement}
                  className={classes.links}
                  alt="announcement"
                  title="Announcement Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/aproved_banner"
                className={
                  location.pathname === "/mooner/details/aproved_banner"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Banner}
                  className={classes.links}
                  alt="banner"
                  title="Banner Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/merchandise_store_management"
                className={
                  location.pathname ===
                  "/mooner/details/merchandise_store_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={MarchanddistStore}
                  className={classes.links}
                  alt="Merchandise Store"
                  title="Merchandise Store"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/cancellation_management"
                className={
                  location.pathname ===
                  "/mooner/details/cancellation_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={CollectionManagement}
                  className={classes.links}
                  alt="Cancellation Management"
                  title="Cancellation Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/subscription_management"
                className={
                  location.pathname ===
                  "/mooner/details/subscription_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Subscribtion}
                  className={classes.links}
                  alt="Subscribtion Management"
                  title="Subscribtion Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/radius_management"
                className={
                  location.pathname === "/mooner/details/radius_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Radius}
                  className={classes.links}
                  alt="Radius Management"
                  title="Radius Management"
                />
              </NavLink>
              <NavLink
                to="/mooner/details/country_management_list"
                className={
                  location.pathname === "/mooner/details/country_management_list"
                    ? "active-sidebar"
                    : ""
                }
              >
              <img
                src={Country}
                className={classes.links}
                alt="Country Management"
                title="Country Management"
              />
              </NavLink>
              <NavLink
                to="/mooner/details/sub_admins"
                className={
                  location.pathname === "/mooner/details/sub_admins"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={SubAdmins}
                  className={classes.links}
                  alt="Sub Admins"
                  title="Sub Admins"
                />
              </NavLink>

              <NavLink
                to="/mooner/details/report_management"
                className={
                  location.pathname === "/mooner/details/report_management"
                    ? "active-sidebar"
                    : ""
                }
              >
                <img
                  src={Reports}
                  className={classes.links}
                  alt="Report Management"
                  title="Report Management"
                />
              </NavLink>
              <img
                src={SignOut}
                className={`${classes.links} ${classes.logOut}`}
                alt="SignOut"
                onClick={() => {
                  logoutUser();
                }}
              />
              <h4 className={classes.myDiv}>none</h4>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, { logoutUser: logoutUserAction })(SideBar);

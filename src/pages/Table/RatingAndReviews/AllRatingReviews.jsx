import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import Search from "@material-ui/icons/Search";

import TableLeftArrow from "../../../assets/svg/tableLeftArrow.svg";
import TableRightArrow from "../../../assets/svg/tableRightArrow.svg";
import Pagination from "../../../assets/svg/pagination.svg";

import Actions from "../../../assets/svg/actions.svg";
import View from "../../../assets/svg/view.svg";
import Edit from "../../../assets/svg/edit.svg";
import Delete from "../../../assets/svg/delete.svg";

import StatusCard from "../../../common/StatusCard";

import UserCountCard from "../../../common/usersCuntcard";
import Topbar from "../../topbar";


const useStyles = makeStyles((mainTheme) => ({
  root: {
    display: "flex",
    paddingRight: mainTheme.spacing(0),
    marginRight: mainTheme.spacing(0),
    marginLeft: mainTheme.spacing(2),
  },
  profileContainer: {
    // marginLeft: mainTheme.spacing(5),
    [mainTheme.breakpoints.only("xl")]:{
        // marginLeft: mainTheme.spacing(2),
        marginTop: mainTheme.spacing(9),
    },
  },
  TopContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: mainTheme.spacing(5),
  },
  container: {
    position: "absolute",
    backgroundColor: "transparent",
  },
  collapse: {
    position: "relative",
    right: "171px",
  },
  paper: {
    margin: mainTheme.spacing(0),
  },
  actionContent: {
    backgroundImage: `url(../../assets/images/blue.PNG)`,
  },
  FlexWrapper: {
    display: "flex",
    padding: mainTheme.spacing(0.5),
  },
  actionImage: {
    cursor: "pointer",
  },
  links: {
    textDecoration: "none",
  },
  actionsLabel: {
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.2em",
    color: "#20253B",
    marginLeft: mainTheme.spacing(2),
    cursor: "pointer",
  },
  header: {
    display: "flex",
  },
  title: {
    marginTop: mainTheme.spacing(7),
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#20253B",
    [mainTheme.breakpoints.only("lg")]:{
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.2em",
      color: "#20253B",
      fontWeight: '600',
      marginTop: mainTheme.spacing(7.6),
      marginLeft: mainTheme.spacing(1),
    }
  },
}));

const AllRatingReviews = () => {
  const classes = useStyles();
  const history = useHistory();
  const { location:{state} } = history;


  const COLUMNS = [
    
    {
      Header: "Name",
      accessor: "seeker_name",
    },
    {
      Header: "Catagory",
      accessor: "category",
    },
    {
      Header: "Seeker Id",
      accessor: "seeker_id",
    },
    {
      Header: "Stars",
      accessor: "star",
    },
    {
      Header: " ",
      accessor: "",
      Cell: function renderActions() {
        const [isChecked, setIsChecked] = useState(false);
        const handleClose = () => {
          setIsChecked(null);
        };
        return (
          <>
            <Button
              onClick={(event) => {
                setIsChecked(event.currentTarget);
              }}
            >
              <img src={Actions} className="actions" />
            </Button>
            <div className={classes.container}>
              <Menu
                id="simple-menu"
                anchorEl={isChecked}
                keepMounted
                open={Boolean(isChecked)}
                onClose={handleClose}
              >
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={View} className={classes.actionImage} />
                    {/* <NavLink
                      to="booking/change_status"
                      className={classes.links}
                    > */}
                        <Typography className={classes.actionsLabel}>
                            View
                        </Typography>
                    {/* </NavLink> */}
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={Edit} className={classes.actionImage} />
                    {/* <NavLink
                      to="booking/refund_payment"
                      className={classes.links}
                    > */}
                      <Typography className={classes.actionsLabel}>
                            Edit
                      </Typography>
                    {/* </NavLink> */}
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={Delete} className={classes.actionImage} />
                    <Typography className={classes.actionsLabel}>
                      Delete
                    </Typography>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,

    prepareRow,
    page,
  } = useTable(
    {
      columns,
      data : state,
    },
    useGlobalFilter,
    usePagination
  );

  

  return (
    <Container maxWidth="xl">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Topbar module="SP Management" item="Edit"  bckLink="/mooner/details/sp_management" />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.header}>
            <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
              <Grid container spacing={2} className={classes.header}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.title}> Rating & Reviews </Typography>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <div className="globalFilterContainer">
                    <div className="icon">
                      <Search />
                    </div>
                    <input
                      type="text"
                      className="globalFilter"
                      placeholder="search"
                    />
                    {/* <div className="circleContainer">
                                            <img src={Filter} className="filter" />
                                        </div>     */}
                  </div>
                </Grid>
              </Grid>
              <table className="reportTable" {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th key={column.id} {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="tableBody" {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        key={row.id}
                        className="roundBorder"
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td key={cell.id} {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              xl={2}
              className={classes.profileContainer}
            >
              <StatusCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllRatingReviews;

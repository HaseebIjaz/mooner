import React, { useMemo, useState } from "react";
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

import Search from "@material-ui/icons/Search";

import TableLeftArrow from "../../assets/svg/tableLeftArrow.svg";
import TableRightArrow from "../../assets/svg/tableRightArrow.svg";
import Pagination from "../../assets/svg/pagination.svg";

import Edit from "../../assets/svg/edit.svg";
import Delete from "../../assets/svg/delete.svg";

import Active from "../../assets/svg/green.svg";
import InActive from "../../assets/svg/red.svg";
import Actions from "../../assets/svg/actions.svg";
import Status from "../../assets/svg/status.svg";
import Crowl from "../../assets/svg/crowl.svg";

import Topbar from "../topbar";
import StatusCard from "../../common/StatusCard";

import UserCountCard from "../../common/usersCuntcard";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    display: "flex",
    paddingRight: mainTheme.spacing(0),
    marginRight: mainTheme.spacing(0),
    marginLeft: mainTheme.spacing(2),
    [mainTheme.breakpoints.down("sm")]:{
      marginLeft: mainTheme.spacing(0),
    }
  },
  profileContainer: {
    // marginLeft: mainTheme.spacing(1),
    [mainTheme.breakpoints.down("md")]:{
      display: "none",
    }
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
  },
}));

const AllTips = () => {
  const classes = useStyles();

  const DATA = [
    {
      id: 1,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
    {
      id: 2,
      seeker: "Harry Johnson",
      catagory: "Hair Style",
      date: "14/08/20",
      time: "22:05:48 SST",
      price: "$800",
      status: "active",
    },
  ];

  const COLUMNS = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Seeker",
      accessor: "seeker",
    },
    {
      Header: "Catagory",
      accessor: "catagory",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Time",
      accessor: "time",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: function renderStatus(props) {
        return props.value === "active" ? (
          <img src={Active} />
        ) : (
          <img src={InActive} />
        );
      },
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
              {/* <Menu
                id="simple-menu"
                anchorEl={isChecked}
                keepMounted
                open={Boolean(isChecked)}
                onClose={handleClose}
              >
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={Status} className={classes.actionImage} />
                    <NavLink
                      to="booking/change_status"
                      className={classes.links}
                    >
                      <Typography className={classes.actionsLabel}>
                        Change Status
                      </Typography>
                    </NavLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={Edit} className={classes.actionImage} />
                    <NavLink
                      to="booking/refund_payment"
                      className={classes.links}
                    >
                      <Typography className={classes.actionsLabel}>
                        Refund Payment
                      </Typography>
                    </NavLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className={classes.FlexWrapper}>
                    <img src={Crowl} className={classes.actionImage} />
                    <NavLink to="booking/crowl_back" className={classes.links}>
                      <Typography className={classes.actionsLabel}>
                        Crawl Back
                      </Typography>
                    </NavLink>
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
              </Menu> */}
            </div>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,

    prepareRow,
    page,
    nextPage,
    pageOptions,
    state,
    gotoPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, globalFilter } = state;
  const arrayPageIndex =
    pageIndex - 2 < 0
      ? pageOptions.slice(0, pageIndex + 3)
      : pageOptions.slice(pageIndex - 2, pageIndex + 3);

  return (
    <Container maxWidth="xl">
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container>
            <Grid item xs={12}>
              <Topbar module="Tips Management" item="View"  bckLink="/mooner/details/tips_management" />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.header}>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
              <Grid container className={classes.header}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.title}>Tips</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="globalFilterContainer">
                    <div className="icon">
                      <Search />
                    </div>
                    <input
                      type="text"
                      value={globalFilter || ""}
                      onChange={(e) => setGlobalFilter(e.target.value)}
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
              sm={false}
              md={false}
              lg={3}
              xl={2}
              className={classes.profileContainer}
            >
              <StatusCard />
              <UserCountCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="paginationContainer">
        <img
          src={TableLeftArrow}
          onClick={() => previousPage()}
          className={canPreviousPage ? "previousbtn" : "disabledPreviousBtn"}
        />
        {arrayPageIndex.map((i) => (
          <div className="pagination__item" active={pageIndex === i} key={i}>
            <div
              key={i}
              className={`paginationLink ${
                pageIndex === i ? "paginationLinkActive" : ""
              }`}
              onClick={() => gotoPage(i)}
            >
              {i + 1}
            </div>
          </div>
        ))}
        {pageIndex + 3 <= arrayPageIndex.length && (
          <img src={Pagination} className="paginationDot" />
        )}
        <img
          src={TableRightArrow}
          onClick={() => nextPage()}
          className={canNextPage ? "nextbtn" : "disabledPreviousBtn"}
        />
      </div>
    </Container>
  );
};

export default AllTips;

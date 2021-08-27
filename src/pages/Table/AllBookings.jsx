import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  Button,
  CircularProgress,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
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
import { connect } from "react-redux";
import { getUserBookingList,deleteBooking } from "../../redux/actions/booking/booking.action";
import ConformationModal from "../../common/modals/ConformationModal";
const useStyles = makeStyles((mainTheme) => ({
  root: {
    display: "flex",
    paddingRight: mainTheme.spacing(0),
    marginRight: mainTheme.spacing(0),
    marginLeft: mainTheme.spacing(2),
  },
  profileContainer: {
    [mainTheme.breakpoints.down("xs")]:{
      marginRight: mainTheme.spacing(3),
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
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.2em",
      color: "#20253B",
      fontWeight: "600",
      marginTop: mainTheme.spacing(7.6),
      marginLeft: mainTheme.spacing(1),
    },
  },
}));

const AllBookings = ({ getUserBookingList, match, loading, bookingData,deleteBooking }) => {
  const { id } = match.params;
  useEffect(() => {
    let formData = new FormData();
    formData.append("user_id", id);
    getUserBookingList(formData);
  }, []);
  const classes = useStyles();
  const COLUMNS = [
    {
      Header: "Seeker",
      accessor: "seeker",
    },
    {
      Header: "Catagory",
      accessor: "category_name",
    },
    {
      Header: "Date",
      accessor: (d) => {
        const date = d.start_date.slice(0, 10);
        return(
          <div> {date} </div> 
        );
      }
    },
    {
      Header: "Time",
      accessor: (d) => {
        const time = d.start_date.substring(11);
        const newTime = time.slice(0, 8);
        return(
          <div> {newTime} SST </div> 
        );
      }
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Status",
      accessor: "order_status",
      Cell: function renderStatus(props) {
        return props.value === "Active" ? (
          <img src={Active} />
        ) : (
          <img src={InActive} />
        );
      },
    },
    {
      Header: " ",
      accessor: "id",
      Cell: function renderActions(props) {
        const [isChecked, setIsChecked] = useState(false);
        const [open, setOpen] = useState(false);
        const [id, setId] = useState(null);
      
        const handleOpen = (id) => {
          setOpen(true);
          setIsChecked(null);
          setId(id);
        };
      
        const handleModalClose = () => {
          setOpen(false);
        };
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
                    <img src={Status} className={classes.actionImage} />
                    <NavLink
                      to={`/mooner/booking/change_status/${props.value}`}
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
                    <Typography className={classes.actionsLabel} onClick={() => {handleOpen(props.value)}}>
                      Delete
                    </Typography>
                  </div>
                </MenuItem>
              </Menu>
              <ConformationModal 
                isVisible={open}
                id={open && id}
                onClose={handleModalClose}
                actionName={open && deleteBooking}
              />
            </div>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => , []);
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
      data:bookingData,
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
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Topbar
                module="User Management"
                item="View"
                bckLink="/mooner/details/user_management"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.header}>
            <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
              <Grid container spacing={2} className={classes.header}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={6}>
                  <Typography className={classes.title}>Bookings</Typography> 
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} xl={6}>
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
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress />
                </div>
              ) : (
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
              )}
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
const mapStateToProps = ({ booking, loader }) => {
  return {
    bookingData: booking.booking,
    loading: loader.loading,
  };
};
export default connect(mapStateToProps, { getUserBookingList,deleteBooking })(AllBookings);

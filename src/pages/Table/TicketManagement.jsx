import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  makeStyles,
  Typography,
  Container,
  CircularProgress,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";

import Search from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Actions from "../../assets/svg/actions.svg";
import TableLeftArrow from "../../assets/svg/tableLeftArrow.svg";
import TableRightArrow from "../../assets/svg/tableRightArrow.svg";
import Pagination from "../../assets/svg/pagination.svg";
import Filter from "../../assets/svg/filter.svg";

import Edit from "../../assets/svg/edit.svg";
import Delete from "../../assets/svg/delete.svg";
import View from "../../assets/svg/view.svg";
import Active from "../../assets/svg/green.svg";
import Pending from "../../assets/svg/panding.svg";

import InActive from "../../assets/svg/red.svg";
import { NavLink } from "react-router-dom";
import ConformationModal from "../../common/modals/ConformationModal";
import { getAllTickets, deleteTicket } from "../../redux/actions/ticket/ticket.action";
import TablePagination from "../../common/pagination/Pagination";


const useStyles = makeStyles((mainTheme) => ({
  container: {
    position: "absolute",
    backgroundColor: "#fff",
  },
  collapse: {},
  paper: {
    margin: mainTheme.spacing(0),
  },
  actionContent: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  FlexWrapper: {
    display: "flex",
    padding: mainTheme.spacing(2),
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
  categoryHeading: {
    marginTop: mainTheme.spacing(6),
    display: "flex",
  },
  title: {
    fontSize: "27px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "##000000",
    opacity: "0.5",
    marginRight: "7px",
    fontWeight: '700',
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: "15px",
    }
  },
  title2: {
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#000000",
    marginLeft: "7px",
    fontWeight: '600',
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: "18px",
      marginLeft: "2px",
    }
  },
  registertypo: {
    color: "#20253B",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "0.2em",
    marginTop: mainTheme.spacing(5),
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: '14px',
    }
  },
  middleGridwrapper: {
    display: "flex",
    flexDirection: "row",
  },
  middleUpperdiv: {
    position: "relative",
  },
  Eggplateimg: {
    width: "150px",
    height: "140px",
  },
  cameraIcondiv: {
    width: "50px",
    height: "45px",
    backgroundColor: "#FEDB29",
    position: "absolute",
    top: "54%",
    left: "111px",
    borderRadius: "35%",
    justifyContent: "center",
  },
  Cameraicon: {
    marginTop: "10px",
    marginLeft: "11px",
  },
  middleRightdiv: {
    marginTop: "9%",
    marginLeft: "20px",
  },
  rightUpperdiv: {
    display: "flex",
    flexDirection: "row",
  },
  categoryname: {
    fontFamily: "Gilroy-Bold",
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#000000",
    fontWeight: "50px",
  },
  editimg: {
    width: "20px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer",
  },
  distributors: {
    marginTop: "10px",
    fontFamily: "Gilroy-Medium",
    fontSize: "14px",
    lineHeight: "16px",
    /* identical to box height */
    letterSpacing: "0.2em",
    color: "#000000",
    opacity: "0.7",
  },
  rightGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  managecategory: {
    width: "36%",
    height: "60px",
    borderRadius: "24px",
    fontSize: "15px",
    fontWeight: '600',
    textTransform: "Capitalize",
    marginTop: mainTheme.spacing(4),
    marginBottom: mainTheme.spacing(5),
    [mainTheme.breakpoints.only("lg")]: {
      width: '60%',
    }
  },
  link: {
    textDecoration: "none",
  },
}));

const TicketManagement = ({ getAllTickets, ticketData, loading, count, deleteTicket }) => {
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getAllTickets(1)
  }, []);
  useEffect(() => {
    setTotalPages(Math.ceil(count / 10));
  }, [ticketData]);
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/mooner/create_ticket",
    });
  }

  const classes = useStyles();
  const DATA = [
    {
      name: 'Anna',
      id: '1458',
      category: 'Haircut',
      department: 'Lorem',
      comment: 'Lorem ipsum dolor sit...',
      status: 'Active'
    },
    {
      name: 'Anna',
      id: '1458',
      category: 'Haircut',
      department: 'Lorem',
      comment: 'Lorem ipsum dolor sit...',
      status: 'Inactive'
    },
    {
      name: 'Anna',
      id: '1458',
      category: 'Haircut',
      department: 'Lorem',
      comment: 'Lorem ipsum dolor sit...',
      status: 'Active'
    },
    {
      name: 'Anna',
      id: '1458',
      category: 'Haircut',
      department: 'Lorem',
      comment: 'Lorem ipsum dolor sit...',
      status: 'Inactive'
    },
  ];

  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
    },
    // {
    //     Header: "id",
    //     accessor: "id",
    // },
    {
      Header: "Category",
      accessor: "category",
    },
    // {
    //     Header: "Department",
    //     accessor: "department",
    // },
    {
      Header: "Message",
      accessor: "message",
      Cell: function renderComments(props) {
        return props.value === null ? (
          <span style={{ marginLeft: '35px', fontSize: "20px" }}>-</span>
        ) : (
          <span>{props.value}</span>
        );
      },
    },
    {
      Header: "Comment",
      accessor: "comments",
      Cell: function renderComments(props) {
        return props.value === null ? (
          <span style={{ marginLeft: '35px', fontSize: "20px" }}>-</span>
        ) : (
          <span>{props.value}</span>
        );
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: function renderStatus(props) {
        return (
          
         props.value === "Active" && 
          <img src={Active} style={{ marginLeft: '35px' }} />
          ||
          props.value === "Closed" &&
          <img src={InActive} style={{ marginLeft: '35px' }} />
          ||
          props.value === "Pending" &&
          <img src={Pending} style={{ marginLeft: '35px', height: "11px", width: '11px' }} />
        );
      },
    },
    {
      Header: " ",
      accessor: "id",
      Cell: function renderActions(props) {

        const [isChecked, setIsChecked] = useState(null);
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
                  <NavLink to={`/mooner/view_ticket/${props.value}`} className={classes.links}>
                    <div className={classes.FlexWrapper}>
                      <img src={View} className={classes.actionImage} />
                      <Typography className={classes.actionsLabel}>
                        View
                          </Typography>
                    </div>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to={`/mooner/edit_ticket/${props.value}`} className={classes.links}>
                    <div className={classes.FlexWrapper}>
                      <img src={Edit} className={classes.actionImage} />
                      <Typography className={classes.actionsLabel}>
                        Edit
                          </Typography>
                    </div>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <div className={classes.FlexWrapper} onClick={() => { handleOpen(props.value) }}>
                    <img src={Delete} className={classes.actionImage} />
                    <Typography className={classes.actionsLabel}>
                      Delete
                      </Typography>
                  </div>
                </MenuItem>
              </Menu>
              <ConformationModal
                isVisible={open}
                id={open && id}
                onClose={handleModalClose}
                actionName={open && deleteTicket}
              />
            </div>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  // const data=useMemo(()=> DATA,[])
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
      data: ticketData,
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
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid Container spacing={5} className={classes.header}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.categoryHeading}>
            <Typography className={classes.title2}>
              Ticket Management
            </Typography>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={classes.rightGrid}
          >
            <Button 
                variant="contained"
                color="secondary"
                size="large"
                className={classes.managecategory}
                onClick={handleClick}
            >
                Create Ticket
            </Button>
          </Grid> */}
        </Grid>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
        <>  
        { ticketData && ticketData.length > 0 ?
          <table className="reportTable" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
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
                  <tr key={row.id} className="roundBorder" {...row.getRowProps()}>
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
        :
        <div style={{margin: '30px 0px', textAlign: 'center', opacity: 0.3}}> No Record Found  </div> 
        }
        </>
        )}

      </Grid>
      {
       ticketData && ticketData.length > 0  &&
      <TablePagination
        totalPages={totalPages}
        count={count}
        getPageDataAction={getAllTickets}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      }
    </Container>
  );
};
const mapStateToProps = ({ ticket, loader }) => {
  return {
    ticketData: ticket.data,
    count: ticket.count,
    loading: loader.loading
  };
};
export default connect(mapStateToProps, { getAllTickets, deleteTicket })(
  TicketManagement
);

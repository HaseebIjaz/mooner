import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import {
  Grid,
  makeStyles,
  Typography,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";

import { connect } from "react-redux";
import Search from "@material-ui/icons/Search";

import Actions from "../../../assets/svg/actions.svg";
import Filter from "../../../assets/svg/filter.svg";
import Delete from "../../../assets/svg/delete.svg";
import TablePagination from "../../../common/pagination/Pagination";
import ConformationModal from "../../../common/modals/ConformationModal";

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
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#000000",
    marginLeft: "7px",
    fontWeight: "600",
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.2em",
      color: "#20253B",
      fontWeight: "600",
      marginTop: mainTheme.spacing(7.6),
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("xs")]: {
      marginTop: mainTheme.spacing(7.6),
      textAlign: "center",
    },
  },
  subtitle: {
    marginTop: mainTheme.spacing(3),
    marginBottom: mainTheme.spacing(3),
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#000000",
    marginLeft: "7px",
    fontWeight: "600",
    [mainTheme.breakpoints.only("lg")]: {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.2em",
      color: "#20253B",
      fontWeight: "600",
      marginTop: mainTheme.spacing(3),
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("xs")]: {
      marginTop: mainTheme.spacing(3),
      textAlign: "center",
    },
  },
}));

const ReceivedUsdList = () => {

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const classes = useStyles();
  const DATA = [
    {
        id: 1,
        amount: '$85',
        token_generated: '55',
        date: '14/8/20',
        time: '22:05:48 SST',
        method: 'Visa'
    },
    {
        id: 1,
        amount: '$85',
        token_generated: '55',
        date: '14/8/20',
        time: '22:05:48 SST',
        method: 'Master'
    },
  ]
  const COLUMNS = [
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Token Generated",
      accessor: "token_generated",
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
        Header: "Method",
        accessor: "method",
    },
    {
      Header: "",
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
                  <div
                    className={classes.FlexWrapper}
                    onClick={() => {
                      handleOpen(props.value);
                    }}
                  >
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
                // actionName={open && deleteSPAction}
                actionName={open && handleModalClose}
              />
            </div>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const { getTableProps, headerGroups, getTableBodyProps, prepareRow, page } =
    useTable(
      {
        columns,
        data
      },
      usePagination
    );
  return (
    <Grid maxWidth="xl">
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container className={classes.header}>
          <Grid item xs={12} sm={4} md={5} lg={5} xl={6}>
            <Typography className={classes.title}>
              Received USD
            </Typography>
          </Grid>
          <Grid items xs={12} sm={8} md={7} lg={7} xl={6}>
            <div className="globalFilterContainer">
              <div className="icon">
                <Search />
              </div>
              <input
                type="text"
                value={filterValue}
                onChange={handleFilterChange}
                className="globalFilter"
                placeholder="search"
              />
              <div className="circleContainer">
                <img src={Filter} className="filter" />
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography className={classes.subtitle}>
            Payment History
        </Typography>
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
      {/* <TablePagination
        totalPages={totalPages}
        count={count}
        getPageDataAction={allSpListAction}
        searchPaginationAction={filterValue && searchServiceProviderAction}
        searchString={filterValue && filterValue}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </Grid>
  );
};
const mapStateToProps = () => {

} 
export default connect(mapStateToProps, {

})(ReceivedUsdList);

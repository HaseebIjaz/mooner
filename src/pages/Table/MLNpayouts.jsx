import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

import { 
    Grid, 
    Container, 
    makeStyles, 
    Typography, 
    Button,
    Menu,
    MenuItem, 
} from "@material-ui/core";

import Search from "@material-ui/icons/Search";

import Actions from "../../assets/svg/actions.svg";
import View from "../../assets/svg/view.svg";
import Filter from "../../assets/svg/filter.svg";

import { getMlnListAction } from "../../redux/actions/mln/mln.actions"

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
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
    fontWeight: '600',
    [mainTheme.breakpoints.only("xl")]:{
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.down("lg")]:{
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.2em",
      color: "#20253B",
      fontWeight: '600',
      marginTop: mainTheme.spacing(7.6),
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.down("xs")]:{
      textAlign: 'center'
    },
  },
  subTitle:{
    marginTop: mainTheme.spacing(4),
    marginBottom: mainTheme.spacing(4),
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#20253B",
    fontWeight: '600'
  },
  button: {
    float: "right",
    width: "20%",
    height: "55px",
    borderRadius: "24px",
    fontSize: "15px",
    textTransform: "Capitalize",
    marginBottom: mainTheme.spacing(2),
    marginTop: mainTheme.spacing(2),
    [mainTheme.breakpoints.only("lg")]: {
      width: "22%",
      height: "50px",
      borderRadius: "10px",
    },
    [mainTheme.breakpoints.down("md")]: {
      width: "22%",
      height: "50px",
      borderRadius: "10px",
      marginRight: mainTheme.spacing(5),
      marginTop: mainTheme.spacing(2),
      marginBottom: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("xs")]: {
      width: "42%",
      height: "50px",
      borderRadius: "10px",
      float: "left",
      marginLeft: mainTheme.spacing(13),
      marginTop: mainTheme.spacing(2),
      marginBottom: mainTheme.spacing(2),
    },
  },
}));



const MlnPayouts = ({getMlnListAction, mlnListData, loading, count, next, previous }) => {
  const classes = useStyles();

  useEffect(() => {
    getMlnListAction(1);
  }, []);

  useEffect(() => {
    if (count > 10) {
      setTotalPages(Math.ceil(count / 10));
    } else setTotalPages(1);
  }, [mlnListData]);

  const [totalPages, setTotalPages] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
        Header: "Level",
        accessor: "level",
    },
    {
        Header: "Referrals",
        accessor: "referrals",
    },
    {
        Header: "Earning (Token)",
        accessor: "earned_tokens",
    },
    {
        Header: "Profit (Token)",
        accessor: "profit",
    },

    {
        Header: " ",
        accessor: "id",
        Cell: function renderActions(props) {
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
                    <NavLink to={`/mooner/referrals/${props.value}`} className={classes.links}>
                      <div className={classes.FlexWrapper}>
                        <img src={View} className={classes.actionImage} />
                        <Typography className={classes.actionsLabel}>
                          View Referrals
                        </Typography>
                      </div>
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>
            </>
          );
        },
    }    
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
      data: mlnListData
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={2} className={classes.header}>
          <Grid item xs={12} sm={4} md={5} lg={5} xl={6}>
            <Typography className={classes.title}>MLN payouts</Typography>
          </Grid>
          <Grid  xs={12} sm={8} md={7} lg={7} xl={6}>
            <div className="globalFilterContainer">
              <div className="icon">
                <Search />
              </div>
              <input
                type="text"
                className="globalFilter"
                placeholder="search"
              />
              <div className="circleContainer">
                <img src={Filter} className="filter" />
              </div>
            </div>
          </Grid>
        </Grid>
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
      </Grid>
      <TablePagination
        totalPages={totalPages}
        count={count}
        getPageDataAction={getMlnListAction}
        searchPaginationAction={filterValue && ""}
        searchString={filterValue && filterValue}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
    </>
  );
};

const mapStateToProps = ({mln}) => {
  return {
    mlnListData: mln.mlnList,
    loading: mln.loading,
    count: mln.total,
    next: mln.next,
    previous: mln.previous,
  };
};
export default connect(mapStateToProps, { 
  getMlnListAction
})(MlnPayouts);

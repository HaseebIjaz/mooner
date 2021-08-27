import React, { useState } from "react";
import { useHistory } from "react-router";
import TableBase from ".";

import {
  Typography,
  Button,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

import Actions from "../../../assets/svg/actions.svg";
import Delete from "../../../assets/svg/delete.svg";

const useStyles = makeStyles((mainTheme) => ({
  title: {
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color:
      mainTheme &&
      mainTheme.palette &&
      mainTheme.palette.primary &&
      mainTheme.palette.primary.main,
    marginLeft: mainTheme.spacing(3),
    marginTop: mainTheme.spacing(2),
    marginBottom: mainTheme.spacing(2),
    fontWeight: "600",
    [mainTheme.breakpoints.only("lg")]:{
        fontSize: "20px",
    }
  },
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
  btnWrapper: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
  editBtn: {
    width: "97%",
    height: "60px",
    borderRadius: "24px",
    textTransform: "Capitalize",
    marginTop: mainTheme.spacing(1),
    marginBottom: mainTheme.spacing(4),
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.2em",
    color: "#20253B",
    backgroundColor: "white",
    boxShadow: "none",
    [mainTheme.breakpoints.only("lg")]:{
      width: "93%",
      height: "50px",
    }
  },
}));

const UserBankWallet = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { modulename } = props;

  const DATA = [
    {
      bank_name: "HSBC",
      Country: "Canada",
      name: "Harry Johnson",
      exp_date: "08/22",
      number: "1234-456...",
      amount: "$85888",
      type: "Visa",
    },
    {
      bank_name: "HSBC",
      Country: "Canada",
      name: "Harry Johnson",
      exp_date: "08/22",
      number: "1234-456...",
      amount: "$85888",
      type: "Master",
    },
  ];

  const COLUMNS = [
    {
      Header: "Bank Name",
      accessor: "bank_name",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Exp.Date",
      accessor: "exp_date",
    },
    {
      Header: "Number",
      accessor: "number",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Type",
      accessor: "type",
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

  const handleClick = () => {
    if(modulename) {
      history.push({
        pathname: "/mooner/bank_Details",
        search: `?modulename=${modulename}`,
      });
    }
    if(!modulename) {
      history.push({
        pathname: "/mooner/bank_Details",
      });
    }
  };

  return (
    <>
      <Typography className={classes.title}>Bank / Wallet Details</Typography>
      <TableBase DATA={DATA} COLUMNS={COLUMNS} />
      <div className={classes.btnWrapper}>
        <Button
          variant="contained"
          size="large"
          className={classes.editBtn}
          onClick={handleClick}
        >
          View All
        </Button>
      </div>
    </>
  );
};

export default UserBankWallet;

import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Grid, Container, makeStyles, CircularProgress } from "@material-ui/core";
import UserDetail from "../Table/UserDetailTables/userDetailTable";
import TopBar from "../topbar";

import { connect } from "react-redux";
import ReferrlsUsers from "../Table/ReferralsUsers";
import CommonCard from "../../common/CommonCard";
import SingleMlnUser from "../Table/UserDetailTables/MlnUser";
import { getSingleMlnUserAction } from "../../redux/actions/mln/mln.actions"
import MlnReferalsUser from "../Table/UserDetailTables/MlnReferalsUser";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    display: "flex",
    paddingRight: mainTheme.spacing(0),
    marginRight: mainTheme.spacing(0),
    height: "auto",
    [mainTheme.breakpoints.only("xl")]: {
        height: '100vh'
    }
  },
  tablesContent: {
    display: "flex",
  },
}));

const ViewReferral = ({ getSingleMlnUserAction, mlnUserData, referalsData, loading }) => {
  const { id } = useParams();
  useEffect(() => {
    getSingleMlnUserAction(id);
  }, []);

  const classes = useStyles();
  console.log("referalsData", referalsData);

  return (
    <Container maxWidth="xl">
      <Grid Container spacing={0} className={classes.root}>
        <Grid item xs={12}>
          <TopBar module="MLN Payoyuts" item="User Details" bckLink="/mooner/details/mln" />
          <Grid Container spacing={2} className={classes.tablesContent}>
            <Grid item xs={10}>
            {
                // loading ? 
                // <div style={{ textAlign: "center" }}>
                //   <CircularProgress />
                // </div>
                
              // :
                 mlnUserData ?
                <SingleMlnUser DATA={mlnUserData} />
                :
                <div style={{ margin: "30px 0px", textAlign: "center", opacity: 0.3 }}>
                  {" "}
                  No user exist{" "}
                 </div>
              }
              {
                referalsData === "No referrals available" ?
                <MlnReferalsUser DATA={[]} />
                :
                <MlnReferalsUser DATA={referalsData} />
              }
            </Grid>
            <Grid item xs={2}>
                <br />
                <CommonCard
                    message="Set Profit Margin"
                    btnText="Edit"
                    link=""
                />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({mln}) => {
  return {
    mlnUserData: mln.singleUserMln,
    referalsData: mln.referals,
    loading: mln.loading,
    
  };
};
export default connect(mapStateToProps, { 
  getSingleMlnUserAction
})(ViewReferral);


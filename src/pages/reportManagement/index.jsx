import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress
} from "@material-ui/core";

import StatusCard from "../../common/reportsCards/StatusCard";
import ModuleCard from "../../common/reportsCards/ModuleCard";
import TipsCard from "../../common/reportsCards/TipsCard";

import Usage from "../../assets/reportSVG/usage.svg";
import User from "../../assets/reportSVG/user.svg";
import Trending from "../../assets/reportSVG/trending.svg";
import Assessment from "../../assets/reportSVG/assessment.svg";
import Doolar from "../../assets/reportSVG/dollar.png";
import BugReport from "../../assets/reportSVG/bugreport.svg";
import Equalizer from "../../assets/reportSVG/equalizer.svg";
import Facebook from "../../assets/reportSVG/facebook.svg";
import Bookings from "../../assets/reportSVG/bookings.svg";
import Check from "../../assets/reportSVG/check.svg";
import Pdf from "../../assets/reportSVG/pdf.png";
import {getReport} from "../../redux/actions/reports/report.actions";
import { connect } from "react-redux";
const useStyles = makeStyles((mainTheme) => ({
  title: {
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "0.2em",
    color: "#000000",
    marginLeft: "7px",
    fontWeight: "600",
    marginTop: mainTheme.spacing(4),
    marginBottom: mainTheme.spacing(4),
    [mainTheme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [mainTheme.breakpoints.down("xs")]: {
      marginBottom: mainTheme.spacing(4),
      textAlign: "center",
      fontSize: "18px",
    },
  },
  CardWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  field: {
    width: "95%",
    borderRadius: "15px",
    height: "55px",
    backgroundColor: "#fff",
    fontSize: "14px",
    marginTop: mainTheme.spacing(4),
    marginBottom: mainTheme.spacing(4),
    "& .MuiOutlinedInput-input": {
      [mainTheme.breakpoints.down("lg")]: {
        padding: "15.5px 15px",
      },
    },
    [mainTheme.breakpoints.down("lg")]: {
      width: "90%",
      height: "54px",
    },
  },
  removeOutline: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: 0,
      },
      "&:hover fieldset": {
        border: 0,
      },
      "& fieldset": {
        border: 0,
      },
    },
  },
  textStyle: {
    "& .MuiInputBase-input": {
      fontSize: "16px",
      lineHeight: "19px",
      letterSpacing: "0.2em",
      color: "#20253B",
      opacity: "0.8",
      backgroundColor: "#fff",
      borderRadius: "20px",
      // height: '5px',
    },
  },
}));

const ReportManagement = ({getReport,reportData,loading}) => {
  const classes = useStyles();
  useEffect(()=>{
    getReport()
  },[])
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sm={4} md={6} lg={4} xl={6}>
          <Typography className={classes.title}> Report </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={8} xl={6}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <TextField
                type="date"
                id="outlined-basic"
                variant="outlined"
                placeholder="DD/MM/YYYY"
                className={[classes.field, classes.removeOutline]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <FormControl
                variant="outlined"
                className={[classes.field, classes.removeOutline]}
              >
                <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                <Select
                  //   onChange={handleChangeCountry}
                  //   value={country}
                  name="country"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="subCategories"
                  className={classes.textStyle}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={"global"}>Pak</MenuItem>
                  <MenuItem value={"regional"}>UK</MenuItem>
                  <MenuItem value={"local"}>USA</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loading?(
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ):(
<div className={classes.CardWrapper}>
        <StatusCard
          title="Summary"
          Images={{
            box1: { image1: Usage },
            box2: { image2: User },
            box3: { image3: User },
            box4: { image4: "" },
          }}
          amount={{
            amount1: "$5.76 Gb",
            amount2: reportData && reportData.service_provider,
            amount3: reportData && reportData.service_seeker,
            amount4: "",
          }}
          tagline={{
            tagline1: "App Usage",
            tagline2: "Service Providers",
            tagline3: "users",
            tagline4: "",
          }}
        />
        <StatusCard
          title="Stats"
          Images={{
            box1: { image1: Trending },
            box2: { image2: Assessment },
            box3: { image3: Trending },
            box4: { image4: Doolar },
          }}
          amount={{
            amount1: "$144,489",
            amount2: "$100,000",
            amount3: "$129,555",
            amount4: "$111,126",
          }}
          tagline={{
            tagline1: "Total Paid Out",
            tagline2: "Reffer & MLN",
            tagline3: "App Revenue",
            tagline4: "Mooner App",
          }}
        />

        <StatusCard
          title="Complain"
          Images={{
            box1: { image1: BugReport },
            box2: { image2: Trending },
            box3: { image3: Trending },
            box4: { image4: "" },
          }}
          amount={{
            amount1: reportData && reportData.complains,
            amount2: reportData && reportData.pending_complains,
            amount3: reportData && reportData.completed_complains,
            amount4: "",
          }}
          tagline={{
            tagline1: "Total Complaints",
            tagline2: "Pending Complain",
            tagline3: "Completed Complain",
            tagline4: "",
          }}
        />

        <StatusCard
          title="Subscription"
          Images={{
            box1: { image1: Equalizer },
            box2: { image2: Trending },
            box3: { image3: Trending },
            box4: { image4: "" },
          }}
          amount={{
            amount1: "1,500",
            amount2: "1,450",
            amount3: "50",
            amount4: "",
          }}
          tagline={{
            tagline1: "Total Subscription",
            tagline2: "Subscribers",
            tagline3: "Outstanding payment",
            tagline4: "",
          }}
        />

        <StatusCard
          title="Refund & Reviews"
          Images={{
            box1: { image1: Trending },
            box2: { image2: Doolar },
            box3: { image3: Trending },
            box4: { image4: Assessment },
          }}
          amount={{
            amount1: "90",
            amount2: "60",
            amount3: "30",
            amount4: reportData && reportData.review,
          }}
          tagline={{
            tagline1: "Total Refund",
            tagline2: "Completed Refund",
            tagline3: "Pending Refund",
            tagline4: "Total Reviews",
          }}
        />

        <StatusCard
          title="Social Media, Ticket & Breakdown"
          Images={{
            box1: { image1: Facebook },
            box2: { image2: Trending },
            box3: { image3: "" },
            box4: { image4: "" },
          }}
          amount={{
            amount1: "8,500",
            amount2: "110",
            amount3: "",
            amount4: "",
          }}
          tagline={{
            tagline1: "Link Shares",
            tagline2: "Report Count",
            tagline3: "",
            tagline4: "",
          }}
        />

        <StatusCard
          title="Inactive MLN Provider"
          Images={{
            box1: { image1: Trending },
            box2: { image2: Assessment },
            box3: { image3: Trending },
            box4: { image4: Doolar },
          }}
          amount={{
            amount1: "250",
            amount2: "55",
            amount3: "25",
            amount4: "125",
          }}
          tagline={{
            tagline1: "Inactive SP",
            tagline2: "Expiring Account ",
            tagline3: "Compliant With SS",
            tagline4: "Incompliant SS",
          }}
        />

        <StatusCard
          title="Generate Report"
          Images={{
            box1: { image1: Pdf },
            box2: { image2: "" },
            box3: { image3: Trending },
            box4: { image4: "" },
          }}
          amount={{
            amount1: "Download PDF",
            amount2: "",
            amount3: "Download XLS",
            amount4: "",
          }}
          tagline={{
            tagline1: "",
            tagline2: "",
            tagline3: "",
            tagline4: "",
          }}
        />

        <ModuleCard
          title="Booking & Providers"
          Images={{
            box1: { image1: Bookings },
            box2: { image2: Check },
          }}
          amount={{
            amount1:reportData && reportData.bookings,
            amount2: reportData && reportData.completed_services,
          }}
          tagline={{
            tagline1: "Bookings",
            tagline2: "Completed Services",
          }}
        />

        <TipsCard 
            title="Tips"
            Images={{
              box1: { image1: Bookings },
              box2: { image2: Check },
            }}
            amount={{
              amount1: "450",
              amount2: "89",
            }}
            tagline={{
              tagline1: "Tips To SP",
              tagline2: "Tips To Admin",
            }}
        />

        <ModuleCard
          title="Inactive MLN Seeker "
          Images={{
            box1: { image1: Bookings },
            box2: { image2: Check },
          }}
          amount={{
            amount1: "450",
            amount2: "89",
          }}
          tagline={{
            tagline1: "Seeker With Provier",
            tagline2: "Seeker Without Provier",
          }}
        />

        <ModuleCard
          title=" Cancellation "
          Images={{
            box1: { image1: Doolar },
            box2: { image2: Trending },
          }}
          amount={{
            amount1: reportData && reportData.bookings_canceled,
            amount2: "110",
          }}
          tagline={{
            tagline1: "Order Cancellation",
            tagline2: "Completed Cancellation",
          }}
        />
      </div>
        )}
      
    </Container>
  );
};
const mapStateToProps = ({ report,loader }) => {
  return {
    reportData: report.data,
    loading: loader.loading
  };
};
export default connect(mapStateToProps, { getReport })(
  ReportManagement
);



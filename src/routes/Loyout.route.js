import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import GreatingCard from "../common/notfound";

import Categories from "../pages/Category/Categories";
import Createcategory from "../pages/Category/Createcategory";
import UserTable from "../pages/Table/UserTable";
import QuestionAireTable from "../pages/Table/QuestionAireTable";
import FQATable from "../pages/Table/FQATable";
import CategorylistTable from "../pages/Table/Categorylists";
import RightPenal from "../pages/rightPenal";
import SubCategories from "../pages/SubCategory/SubCategories";
import SubCategorylist from "../pages/Table/SubCategory";
import AllMLN from "../pages/Table/AllMLN";
import MlnPayouts from "../pages/Table/MLNpayouts";
import Announcement from "../pages/Announcement";
import StickyNoticeTable from "../pages/Table/announcement/StickyNoticeTable";
import PopupTable from "../pages/Table/announcement/PopupTable";
import BannerTable from "../pages/Table/announcement/BannerTable";
import AprovedBanner from "../pages/Table/BannerAproval/AprovedBanner";
import DisaprevedBanner from "../pages/Table/BannerAproval/DisaprevedBanner";
import DocMangement from "../pages/Table/DocumentManagement/DocMangement";
import PendingDocument from "../pages/Table/DocumentManagement/PendingDocument";
import ChangePassword from "../pages/ChangePassword";
import AllServiceSeekers from "../pages/Table/passwordChange/SS/AllServiceSeekers";
import AllServiceProvider from "../pages/Table/passwordChange/SP/AllServiceProvider";
import AllSubAdmins from "../pages/Table/passwordChange/SubAdmin/AllSubAdmins";
import TicketManagement from "../pages/Table/TicketManagement";
import MNRModule from "../pages/MNR";
import TipsManagement from "../pages/TipManagement"
import SPManagementTable from "../pages/Table/SpManagement/AllSpList"
import MerchantdiseTable from "../pages/Table/merchandiseTable/MerchantdiseTable";
import Marchantdise from "../pages/marchandiseStore";
import CancellationManagement from "../pages/cancellationManagement";
import CancellationManagementList from "../pages/Table/CancellationManagementTable";
import ReportManagement from "../pages/reportManagement";
import SubAdminList from "../pages/Table/subAdmin/SubAdminList";
import SubcriptionManagement from "../pages/subcriptionManagement";
import EditSubscriptionPlan from "../pages/subcriptionManagement/EditPlan";
import RadiusManagement from "../pages/radiusManagement";
import RadiusManagementList from "../pages/Table/RadiusManagementList";
import CountryManagementTable from "../pages/Table/CountryManagementTable";
import PageNotFound from "../common/PageNotFound";
import SendTokenList from "../pages/Table/MNR/SendTokenList";
import ReceivedUsdList from "../pages/Table/MNR/ReceivedUsdList";


const useStyles = makeStyles((mainTheme) => ({
  root: {
    display: "flex",
    marginLeft: mainTheme.spacing(3),
    [mainTheme.breakpoints.down("sm")]:{
      marginLeft: mainTheme.spacing(1),
    },
  },
  profileContainer: {
    [mainTheme.breakpoints.up("xl")]: {
      marginLeft: mainTheme.spacing(3),
    },
    [mainTheme.breakpoints.only("lg")]: {
      marginLeft: mainTheme.spacing(1.5),
    },
    [mainTheme.breakpoints.down("md")]: {
      display: "none",
    },
    marginRight: "0px",
    padding: "0px",
  },
  TopContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: mainTheme.spacing(5),
    minWidth: "100%",
  },
  header: {
    display: "flex",
    minWidth: '100%',
    width: '100%',
  },
}));

const LoyoutRoutes = () => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Grid Container className={classes.root}>
        <Grid xs={12} sm={12} md={12} lg={8} xl={8}>
          <Grid Container spacing={2} className={classes.TopContent}>
            <Grid xs={12}>
              <GreatingCard />
            </Grid>
          </Grid>
          <Grid container className={classes.header}>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              
              <Route path={`${path}/categories`} component={Categories} />
              <Route
                path={`${path}/create_category`}
                component={Createcategory}
              />
              <Route
                path={`${path}/sub_category/:id`}
                component={SubCategories}
              />
              <Route
                exact
                path={`${path}/list_subcategory/:id`}
                component={SubCategorylist}
              />

              <Route path={`${path}/user_management`} component={UserTable} />
              <Route
                path={`${path}/questionaire`}
                component={QuestionAireTable}
              />
              <Route path={`${path}/fqa`} component={FQATable} />
              <Route path={`${path}/CLT/:id`} component={CategorylistTable} />
              <Route path={`${path}/mln`} component={MlnPayouts} />
              <Route path={`${path}/announcemet`} component={Announcement} />
              <Route
                path={`${path}/sticky_notice`}
                component={StickyNoticeTable}
              />
              <Route path={`${path}/popup`} component={PopupTable} />
              <Route path={`${path}/banner`} component={BannerTable} />
              <Route path={`${path}/aproved_banner`} component={AprovedBanner} />
              <Route path={`${path}/disaproved_banner`} component={DisaprevedBanner} />
              <Route path={`${path}/document_management`} component={DocMangement} />
              <Route path={`${path}/pending_document`} component={PendingDocument} />
              <Route path={`${path}/change_password`} component={ChangePassword} />
              <Route path={`${path}/all_service_seekers`} component={AllServiceSeekers} />
              <Route path={`${path}/all_service_provider`} component={AllServiceProvider} />
              <Route path={`${path}/all_sub_admins`} component={AllSubAdmins} />
              <Route path={`${path}/ticket_management`} component={TicketManagement} />
              <Route path={`${path}/mnr`} component={MNRModule} />
              <Route path={`${path}/tips_management`} component={TipsManagement} />
              <Route path={`${path}/sp_management`} component={SPManagementTable} />
              <Route path={`${path}/merchandise_store_management`} component={MerchantdiseTable} />
              <Route path={`${path}/merchandise_store`} component={Marchantdise} />
              <Route path={`${path}/cancellation_management`} component={CancellationManagement} />
              <Route path={`${path}/cancellation_management_list`} component={CancellationManagementList} />
              <Route path={`${path}/report_management`} component={ReportManagement} />
              <Route path={`${path}/sub_admins`} component={SubAdminList} />
              <Route path={`${path}/subscription_management`} component={SubcriptionManagement} />
              <Route path={`${path}/subscription_plan/:From`} component={EditSubscriptionPlan} />
              <Route path={`${path}/radius_management`} component={RadiusManagement} />
              <Route path={`${path}/radius_management_list`} component={RadiusManagementList} />
              <Route path={`${path}/country_management_list`} component={CountryManagementTable} />
              <Route path={`${path}/send_token_list`} component={SendTokenList} />
              <Route path={`${path}/received_usd_list`} component={ReceivedUsdList} />
              {/* <Route path={`${path}/404`} component={PageNotFound} />
              <Redirect from='*' to={`${path}/404`} /> */}
              {/* <Route component={PageNotFound} /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          lg={4}
          xl={4}
          className={classes.profileContainer}
        >
          <RightPenal />
        </Grid>
      </Grid>
    </Switch>
  );
};

export default LoyoutRoutes;

import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  makeStyles
} from "@material-ui/core";

import Topbar from "../../topbar";
import {useHistory, useParams} from 'react-router-dom';
import { MyCustomStyle } from "../../Announcement/MyStyles";
import { connect } from "react-redux";

import {getPendingDoceByIdAction} from "../../../redux/actions/document/document.action"

const myStyle = makeStyles((mainTheme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#F0F3F8",
      height: "auto",
      [mainTheme.breakpoints.down("xl")]:{
        height: '100vh'
      }
    },
}));


const ViewPenddingDocument = ({getPendingDoceByIdAction, documentData}) => {
  const { id } = useParams();
  useEffect(() => {
    getPendingDoceByIdAction(id);
  }, [id])

  const classes = MyCustomStyle();
  const partialStyle = myStyle();
  const history = useHistory();

  const [category, setCategory] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handlechangeBack = () => {
    history.push({
        pathname: '/mooner/details/pending_document'
    })
  }
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module=" Pending Document " item=" View " bckLink="/mooner/details/pending_document" />
          </Grid>
        </Grid>
        <div className={partialStyle.root}>
          <Typography className={classes.Title} gutterBottom>
            Document Details
          </Typography>
          <Grid Container spacing={2} className={classes.mainContainer}>
            <Grid xs={10}>
              {/* <form className={classes.form} noValidate autoComplete="off"> */}
              <Grid Container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.mainRow}
                >
                  <Typography className={classes.label} gutterBottom>
                    Doc Name
                  </Typography>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Doc Name"
                    className={[classes.disableField, classes.disableRemoveOutline]}
                    disabled={true}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                        Credential
                    </Typography>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="credential"
                        className={[classes.disableField, classes.disableRemoveOutline]}
                        disabled={true}
                    />
                </Grid>
              </Grid>
              <Grid Container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                        Expiration Date
                    </Typography>
                    <TextField
                        type="date"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="DD/MM/YYYY"
                        value= {documentData.expiration_date}
                        className={[classes.disableField, classes.disableRemoveOutline]}
                        disabled={true}
                    />
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                    Category
                  </Typography>
                  <FormControl
                      variant="outlined"
                      className={[classes.disableField, classes.disableRemoveOutline]}
                    >
                      <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                      <Select
                        onChange={handleChangeCategory}
                        valu={documentData.category_name}
                        name="userType"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="subCategories"
                        className={classes.disableTextStyle}
                        disabled={true}
                      >
                        <MenuItem className={classes.dropdownMenuStyle} value={documentData.category_name}>
                          {documentData.category_name}
                        </MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.mainRow}
                >
                </Grid>
              </Grid>
              
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={handlechangeBack}
                >
                  Back
                </Button>
              {/* </form> */}
            </Grid>
            <Grid xs={2}>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = ({document}) => {
  return {
    documentData: document.pendingDocData
  };
};
export default connect(mapStateToProps, { 
  getPendingDoceByIdAction
})(ViewPenddingDocument);
import React, { useState } from "react";
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
} from "@material-ui/core";

import {useHistory} from 'react-router-dom';
import { MyCustomStyle } from "../../assets/styles/MyStyles";
import Topbar from "../topbar";


const ViewCanclellationManagement = () => {
  const classes = MyCustomStyle();
  const history = useHistory();

  const handlechangeBack = () => {
    history.push({
        pathname: "/mooner/details/cancellation_management_list",
    })
  }

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module=" Cancellation Management " item=" View " bckLink="/mooner/details/cancellation_management_list" />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Cancellation Details
          </Typography>
          <Grid container spacing={2} className={classes.mainContainer}>
            <Grid xs={12}>
              <Grid container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                  <Typography className={classes.label} gutterBottom>
                    SP Name
                  </Typography>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="sp name"
                    className={[classes.disableField, classes.disableRemoveOutline]}
                    disabled={true}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                        SS Name
                    </Typography>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="ss name"
                        className={[classes.disableField, classes.disableRemoveOutline]}
                        disabled={true}
                    />
                </Grid>
              </Grid>

              <Grid container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
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
                        // onChange={handleChangeCategory}
                        // valu={category}
                        name="userType"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="subCategories"
                        className={classes.disableTextStyle}
                        disabled={true}
                      >
                        <MenuItem className={classes.dropdownMenuStyle} value={"global"}>
                          Food
                        </MenuItem>
                        <MenuItem className={classes.dropdownMenuStyle} value={"regional"}>
                          Driver
                        </MenuItem>
                        <MenuItem className={classes.dropdownMenuStyle} value={"local"}>
                          Hair Style
                        </MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                  <Typography className={classes.label} gutterBottom>
                        Booking ID
                    </Typography>
                    <TextField
                        type="number"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="booking id"
                        className={[classes.disableField, classes.disableRemoveOutline]}
                        disabled={true}
                    />
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                  <Typography className={classes.label} gutterBottom>
                    Date
                  </Typography>
                  <TextField
                    type="date"
                    id="outlined-basic"
                    variant="outlined"
                    className={[classes.disableField, classes.disableRemoveOutline]}
                    disabled={true}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                        Time
                    </Typography>
                    <TextField
                        type="time"
                        id="outlined-basic"
                        variant="outlined"
                        className={[classes.disableField, classes.disableRemoveOutline]}
                        disabled={true}
                    />
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
            </Grid>
            <Grid xs={2}>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ViewCanclellationManagement;

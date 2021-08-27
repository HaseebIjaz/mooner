import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  makeStyles,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import * as Yup from "yup";
import Topbar from "../topbar";
import UserCountCard from "../../common/usersCuntcard";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { MyCustomStyle } from "../../assets/styles/MyStyles";

import { getUserDetail } from "../../redux/actions/booking/booking.action";
import { updateUserProfileAction } from "../../redux/actions/users/users.actions";

const SpValidationschema = Yup.object().shape({
  username: Yup.string().required("* Fielld is required"),
  email: Yup.string().email().required("* Fielld is required"),
  phone: Yup.string()
    .min(9, "cell phone must be between 9 to 15 characters")
    .max(15, "mobile phone must be between 9 to 15 characters")
    .required("* Fielld is required"),
  firstname: Yup.string().required("* Fielld is required"),
  lastname: Yup.string().required("* Fielld is required"),
  status: Yup.string().required("* Field is required"),
});

const statusOptions = {
  true: "Active",
  false: "Inactive",
};

const UserDetails = ({ getUserDetail, updateUserProfileAction, userData, match }) => {
  const { id } = match.params;
  const classes = MyCustomStyle();
  useEffect(() => {
    getUserDetail(id);
  }, []);

  const handleSubmit = (values) => {
    const payload = {
        id:id, 
        username: values.username,
        profile:{
            cell_phone:values.phone,
        },
        email:values.email,
        first_name:values.firstname,
        last_name:values.lastname,
        is_active: values.status === "Active" ? true : false,
    }
    updateUserProfileAction(payload);
  };

  

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar
              module="Edit"
              item="User Details"
              bckLink="/mooner/details/user_management"
            />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Formik
            enableReinitialize={true}
            initialValues={{
              username: userData && userData.user_details && userData.user_details[0] && userData.user_details[0].username ? userData.user_details[0].username :  "",
              email: userData && userData.user_details && userData.user_details[0] && userData.user_details[0].email ? userData.user_details[0].email : "",
              phone: userData && userData.user_details && userData.user_details[0] && userData.user_details[0].phone ? userData.user_details[0].phone : "",
              firstname:userData && userData.user_details && userData.user_details[0] && userData.user_details[0].first_name ? userData.user_details[0].first_name : "",
              lastname: userData && userData.user_details && userData.user_details[0] && userData.user_details[0].last_name ? userData.user_details[0].last_name : "",
              reference_id: userData && userData.user_details && userData.user_details[0] && userData.user_details[0].reference_id ? userData.user_details[0].reference_id : "",
              status: userData && userData.user_details && userData.user_details[0] ? statusOptions[userData.user_details[0].status] : '',
            }}
            validationSchema={SpValidationschema}
            onSubmit={handleSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit} autocomplete="off">
                <Typography className={classes.Title} gutterBottom>
                  Edit User
                </Typography>
                <Grid container className={classes.mainContainer}>
                  <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Username
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          name="username"
                          id="outlined-basic"
                          placeholder="user name"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.username && touched.username ? (
                          <div className="error-text">{errors.username}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Email
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                          id="outlined-basic"
                          placeholder="email"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.email && touched.email ? (
                          <div className="error-text">{errors.email}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Phone
                        </Typography>
                        <TextField
                          type="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          name="phone"
                          id="outlined-basic"
                          placeholder="phone"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                          // onKeyDown={ e => handleNumberFields(e) }
                          // InputProps={{ inputProps: { min: 1} }}
                        />
                        {errors.phone && touched.phone ? (
                          <div className="error-text">{errors.phone}</div>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          First Name
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstname}
                          name="firstname"
                          id="outlined-basic"
                          placeholder="first name"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.firstname && touched.firstname ? (
                          <div className="error-text">{errors.firstname}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Last Name
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastname}
                          name="lastname"
                          id="outlined-basic"
                          placeholder="last name"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.lastname && touched.lastname ? (
                          <div className="error-text">{errors.lastname}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Reference Id
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.reference_id}
                          name="reference_id"
                          id="outlined-basic"
                          placeholder="reference id"
                          variant="outlined"
                          className={[
                            classes.disableField,
                            classes.disableRemoveOutline,
                          ]}
                          disabled={true}
                        />
                      </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Status
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status}
                            name="status"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="status"
                            displayEmpty
                            className={
                              values.status === "Active"
                                ? classes.changeColor
                                : classes.changeColorRed
                            }
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
                            <MenuItem
                              style={{ color: "green" }}
                              value={"Active"}
                            >
                              Active
                            </MenuItem>
                            <MenuItem
                              style={{ color: "red" }}
                              value={"Inactive"}
                            >
                              Inactive
                            </MenuItem>
                          </Select>
                          {errors.status && touched.status ? (
                            <div
                              className="error-text"
                              style={{ marginTop: "10px" }}
                            >
                              {errors.status}
                            </div>
                          ) : null}
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                    >
                      Edit User
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={7} md={4} lg={3} xl={2}>
                    <UserCountCard />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = ({booking}) => {
  return {
    userData: booking.userData,
  };
};
export default connect(mapStateToProps, { 
  getUserDetail,
  updateUserProfileAction
})(
  UserDetails
);

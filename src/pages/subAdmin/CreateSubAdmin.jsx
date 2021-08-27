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
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { MyCustomStyle } from "../../assets/styles/MyStyles";
import PlusIcon from "../../assets/svg/close.svg";

const SpValidationschema = Yup.object().shape({
  name: Yup.string().required("* Fielld is required"),
  email: Yup.string().email().required("* Fielld is required"),
  phone: Yup.string()
    .min(9, "cell phone must be between 9 to 15 characters")
    .max(15, "mobile phone must be between 9 to 15 characters")
    .required("* Fielld is required"),
  password: Yup.string().required("* Fielld is required"),
  role: Yup.string().required("* Fielld is required"),
  avatarUpload: Yup.mixed().required("* image is required"),
  status: Yup.string().required("* Field is required"),
});

const CreateSubAdmin = () => {
  const classes = MyCustomStyle();

  const handleNumberFields = (e) => {
    if (
      (e.keyCode < 48 || e.keyCode > 57) &&
      e.keyCode != 8 &&
      e.keyCode != 38 &&
      e.keyCode != 40
    ) {
      return e.preventDefault();
    }
  };
  const handleSubmit = (values) => {
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar
              module="Sub Admin"
              item="Create"
              bckLink="/mooner/details/sub_admins"
            />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Sub Admin
          </Typography>
          <Grid container spacing={2} className={classes.mainContainer}>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  name: "",
                  phone: "",
                  status: "",
                  email: "",
                  password: "",
                  role: "",
                  avatarUpload: null,
                }}
                validationSchema={SpValidationschema}
                onSubmit={handleSubmit}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form onSubmit={handleSubmit} autocomplete="off">
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Name
                        </Typography>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                          id="outlined-basic"
                          placeholder="name"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.name && touched.name ? (
                          <div className="error-text">{errors.name}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
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
                          onKeyDown={ e => handleNumberFields(e) }
                          // InputProps={{ inputProps: { min: 1} }}
                        />
                        {errors.phone && touched.phone ? (
                          <div className="error-text">{errors.phone}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
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
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
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
                        lg={3}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Pawwword
                        </Typography>
                        <TextField
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                          id="outlined-basic"
                          placeholder="password"
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        />
                        {errors.password && touched.password ? (
                          <div className="error-text">{errors.password}</div>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Role
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.role}
                            name="role"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="role"
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
                            <MenuItem
                              className={classes.dropdownMenuStyle}
                              value={"global"}
                            >
                              Dummy role
                            </MenuItem>
                            <MenuItem
                              className={classes.dropdownMenuStyle}
                              value={"regional"}
                            >
                              Dummy role
                            </MenuItem>
                            <MenuItem
                              className={classes.dropdownMenuStyle}
                              value={"local"}
                            >
                              Dummy role
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {errors.role && touched.role ? (
                          <div className="error-text">{errors.role}</div>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        lg={3}
                        xl={3}
                        className={classes.mainRow}
                      >
                        <div className={classes.imageWrapper}>
                          <Typography className={classes.label}>
                            Image
                          </Typography>
                          <div className={classes.inputImage}>
                            <Typography className={classes.imageName}>
                              Image
                            </Typography>
                            <label htmlFor="avatarUpload">
                              <img
                                src={PlusIcon}
                                className={classes.linkImage}
                              />
                            </label>
                            <input
                              type="file"
                              onChange={(e) => {
                                setFieldValue(
                                  "avatarUpload",
                                  e.target.files[0]
                                );
                              }}
                              accept="image/*"
                              name="avatarUpload"
                              id="avatarUpload"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {errors.avatarUpload && touched.avatarUpload ? (
                          <div className="error-text">
                            {errors.avatarUpload}
                          </div>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(CreateSubAdmin);

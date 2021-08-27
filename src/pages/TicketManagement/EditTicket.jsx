import React, { useState, useEffect } from "react";
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
  makeStyles,
  TextareaAutosize
} from "@material-ui/core";

import Topbar from "../topbar";
import { useHistory } from 'react-router-dom';
import { MyCustomStyle } from "../../assets/styles/MyStyles";
import { connect } from "react-redux";
import { getTicket,updateTicket } from "../../redux/actions/ticket/ticket.action";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const EditTicket = ({ match, ticketData, getTicket,updateTicket,loading }) => {
  const { id } = match.params;
  const classes = MyCustomStyle();

 
  useEffect(() => {
    getTicket(id);
  }, [])
 
  const editTicketSchema = Yup.object().shape({
    comments: Yup.string().required("* comment is required"),
    message: Yup.mixed().optional("* message icon is required"),
    category: Yup.mixed().optional("* category icon is required"),
    status: Yup.mixed().optional("* status icon is required"),
  });
  const handleSubmit = (values) => {
    updateTicket(values,id)
  };
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module=" Ticket Management " item=" Edit Ticket " bckLink="/mooner/details/ticket_management" />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Ticket Details
          </Typography>
          <Grid Container spacing={2} className={classes.mainContainer}>
          <Grid xs={12}>
              {/* <form className={classes.form} noValidate autoComplete="off"> */}
              <Formik
              enableReinitialize 
                initialValues={{
                  comments: ticketData.comments ? ticketData.comments :"",
                  status: ticketData.status ? ticketData.status : "",
                  category: ticketData.category ? ticketData.category : "",
                  message: ticketData.message ? ticketData.message :""
                }}
                validationSchema={editTicketSchema}
                onSubmit={handleSubmit}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit} autocomplete="off">
                    <Grid Container spacing={2} className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Category
                    </Typography>
                        <FormControl
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="category"
                            value={values.category}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="subCategories"
                            className={classes.textStyle}
                          >
                            <MenuItem className={classes.dropdownMenuStyle} value={"General"}>
                              General
                        </MenuItem>
                            <MenuItem className={classes.dropdownMenuStyle} value={"Bugs Reporting"}>
                              Bugs Reporting
                        </MenuItem>
                            <MenuItem className={classes.dropdownMenuStyle} value={"Accounts"}>
                              Accounts
                        </MenuItem>
                          </Select>
                        </FormControl>
                        {errors.category && touched.category ? (
                          <div className="error-text">{errors.category}</div>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid Container spacing={2} className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
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
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="status"
                            value={values.status}
                            label="staus"
                            className={
                              values.status === "Active" && classes.changeColor || values.status === "Closed" && classes.changeColorRed || values.status === "Pending" && classes.changeColorYellow
                                
                            }
                          >
                            <MenuItem style={{ color: "green" }} value={"Active"}>
                              Active
                            </MenuItem>
                            <MenuItem style={{ color: "#B1991C" }} value={"Pending"}>
                              Pending
                            </MenuItem>
                            <MenuItem style={{ color: "red" }} value={"Closed"}>
                              Closed
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {errors.status && touched.status ? (
                          <div className="error-text">{errors.status}</div>
                        ) : null}
                      </Grid>
                      {/* <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                  className={classes.mainRow}
                >
                    <Typography className={classes.label} gutterBottom>
                        Department
                    </Typography>
                    <FormControl
                      variant="outlined"
                      className={[classes.field, classes.removeOutline]}
                    >
                      <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                      <Select
                        onChange={handleChangeDept}
                        value={dept}
                        name="userType"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="subCategories"
                        className={classes.textStyle}
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                          },
                          getContentAnchorEl: null
                        }}
                      >
                        <MenuItem className={classes.dropdownMenuStyle} value={"global"}>
                          Dept A
                        </MenuItem>
                        <MenuItem className={classes.dropdownMenuStyle} value={"regional"}>
                          Dept B
                        </MenuItem>
                        <MenuItem className={classes.dropdownMenuStyle} value={"local"}>
                          Dept C
                        </MenuItem>
                      </Select>
                    </FormControl>
                </Grid> */}
                    </Grid>
                    <Grid Container spacing={2} className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Message
                    </Typography>
                        <TextareaAutosize
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          aria-label="minimum height"
                          rowsMin={8}
                          placeholder="comment"
                          className={classes.textArea}
                        />
                          {errors.message && touched.message ? (
                          <div className="error-text">{errors.message}</div>
                        ) : null}
                      </Grid>
                    
                    </Grid>
                    <Grid Container spacing={2} className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Comment
                    </Typography>
                        <TextareaAutosize
                          name="comments"
                          onChange={handleChange}
                          onBlur={handleBlur}
                   
                          value={values.comments}
                          aria-label="minimum height"
                          rowsMin={8}
                          placeholder="comment"
                          className={classes.textArea}
                        />
                          {errors.comments && touched.comments ? (
                          <div className="error-text">{errors.comments}</div>
                        ) : null}
                      </Grid>
                  
                    </Grid>
                  
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                    // onClick={handleChangeBack}
                    >
                      {loading?"Loading":"Update"}
                </Button>
                  </Form>
                )}
              </Formik>

              {/* </form> */}
            </Grid>
          
          </Grid>
        </div>
      </Container>
    </>
  );
};
const mapStateToProps = ({ ticket, loader }) => {
  return {
    ticketData: ticket.dataById,
    loading: loader.loading
  };
};
export default connect(mapStateToProps, { getTicket,updateTicket })(
  EditTicket
);

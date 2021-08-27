import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createfaqAction } from "../../redux/actions/faq/faq.actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Topbar from "../topbar";
import { MyCustomStyle } from "../../assets/styles/MyStyles";

const validationScheme = Yup.object({
  question: Yup.string().max(250,"character must be less than 250").required("*Question is required"),
  answer: Yup.string().max(250,"character must be less than 250").required("*Answer is required"),
});
const CrateFAQ = ({ createfaqAction,loading }) => {
  const handleSubmit = (values) => {
    createfaqAction(values);
  };
  const classes = MyCustomStyle();

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module="FAQs" item="Add" bckLink="/mooner/details/fqa" />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Add FAQs
          </Typography>

          <Formik
            initialValues={{
              question: "",
              answer: "",
            }}
            validationSchema={validationScheme}
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
              <Form onSubmit={handleSubmit}>
                <Grid container className={classes.mainContainer}>
                  <Grid xs={12}>
                    <Grid
                      container
                      className={classes.mainContainer}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          <br />
                          Question
                        </Typography>
                        <TextareaAutosize
                          name="question"
                          aria-label="minimum height"
                          rowsMin={6}
                          placeholder="type"
                          className={classes.textArea}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          values={values.question}
                        />

                        {errors.question && touched.question ? (
                          <div
                            style={{
                              color: "red",
                            }}
                          >
                            {errors.question}
                          </div>
                        ) : null}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      className={classes.mainContainer}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          <br />
                          Answer
                        </Typography>
                        <TextareaAutosize
                          name="answer"
                          aria-label="minimum height"
                          rowsMin={7}
                          placeholder="type"
                          className={classes.textArea}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          values={values.answer}
                        />
                        {errors.answer && touched.answer ? (
                          <div
                            style={{
                              color: "red",
                            }}
                          >
                            {errors.answer}
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
                      {loading ?"Loading":"Save"}
                    </Button>
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
const mapStateToProps = (state) => {
  return {
    loading: state.loader.loading
  };
};
export default connect(mapStateToProps, { createfaqAction })(CrateFAQ);

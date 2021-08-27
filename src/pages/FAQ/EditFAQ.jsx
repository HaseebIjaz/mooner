import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { updatefaqAction, getfaqByIdAction } from "../../redux/actions/faq/faq.actions";
import Topbar from "../topbar";
import { useHistory } from "react-router-dom";
import { MyCustomStyle } from "../../assets/styles/MyStyles";
import CommonCard from "../../common/CommonCard";

const validationScheme = Yup.object({
  question: Yup.string().required("*Question is required"),
  answer: Yup.string().required("*Answer is required"),
});

const EditFAQs = ({ updatefaqAction, getfaqByIdAction, faqByIdData,loading}) => {

  useEffect(() => {
    getIdFromParams();
  }, []);
  const [id, setid]=useState(null);
  const getIdFromParams = () => {
    const {location} = history;
    const { pathname } = location;
    let name = pathname;
    let nameArr = name.split('/');
    let fid = nameArr[nameArr.length - 1];
    setid(fid);
    getfaqByIdAction(fid);
  }

  const handleSubmit = (values) => {
    const payload= {
      id: id,
      question: values.question,
      answer: values.answer,
    }
    updatefaqAction(payload, history);
  };

  const classes = MyCustomStyle();
  const history = useHistory();

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module="FAQs" item="Edit" bckLink="/mooner/details/fqa" />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Add FAQs
          </Typography>

          <Formik
            enableReinitialize={true}
            initialValues={{
              question: faqByIdData && faqByIdData.question ? faqByIdData.question  : "",
              answer: faqByIdData && faqByIdData.answer ? faqByIdData.answer : "",
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
                          value={values.question}
                        />
                      </Grid>
                    </Grid>

                    {errors.question && touched.question ? (
                      <div
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.question}
                      </div>
                    ) : null}

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
                          value={values.answer}
                        />
                      </Grid>
                    </Grid>
                    {errors.answer && touched.answer ? (
                      <div
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.answer}
                      </div>
                    ) : null}
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                    >
                     {loading?"Loading":"Update"}
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
const mapStateToProps = ({faq,loader}) => {
  return {
    faqByIdData: faq.FAQById,
    loading: loader.loading
  };
};
export default connect(mapStateToProps, { updatefaqAction, getfaqByIdAction })(EditFAQs);

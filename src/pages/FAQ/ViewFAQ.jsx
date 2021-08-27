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
import { getfaqByIdAction } from "../../redux/actions/faq/faq.actions";
import Topbar from "../topbar";
import {useHistory} from 'react-router-dom';
import { MyCustomStyle } from "../../assets/styles/MyStyles";
import CommonCard from "../../common/CommonCard";

const ViewFAQs = ({faqByIdData,getfaqByIdAction}) => {
  const classes = MyCustomStyle();
  const history = useHistory();


  useEffect(() => {
    getIdFromParams();
  }, []);
  const getIdFromParams = () => {
    const {location} = history;
    const { pathname } = location;
    let name = pathname;
    let nameArr = name.split('/');
    let id = nameArr[nameArr.length - 1];
    getfaqByIdAction(id);
  }
  
  const handleBack = () => {
    history.push({
      pathname: '/mooner/details/fqa'
    })
  }
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module="FAQs" item="View" bckLink="/mooner/details/fqa" />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            View FAQs
          </Typography>
          <Grid container spacing={2} className={classes.mainContainer}>
            <Grid xs={12} sm={10}>
                <Grid container spacing={2} className={classes.mainContainer}>
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
                            <br/>
                            Question
                        </Typography>
                        <TextareaAutosize
                            name="Content"
                            aria-label="minimum height"
                            rowsMin={6}
                            placeholder="type"
                            value={faqByIdData && faqByIdData.question}
                            className={classes.blockTextArea}
                            disabled={true}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.mainContainer}>
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
                            <br/>
                            Answer
                        </Typography>
                        <TextareaAutosize
                            name="Content"
                            aria-label="minimum height"
                            rowsMin={7}
                            placeholder="type"
                            value={faqByIdData && faqByIdData.answer}
                            className={classes.blockTextArea}
                            disabled={true}
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={handleBack}
                >
                    Back
                </Button>
            </Grid>
            <Grid xs={12} sm={2}>
                <CommonCard
                    message="Create FAQs"
                    btnText= "Add"
                    link= '/mooner/create_fqa'
                />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = ({ faq }) => {
  return {
    faqByIdData: faq.FAQById,
  };
};
export default connect(mapStateToProps,{getfaqByIdAction})(ViewFAQs);

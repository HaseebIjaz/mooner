import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  makeStyles,
  TextareaAutosize,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  getAllCategoriesAction,
  getCategoriesByIdAction,
  getSubcategoryChildAction,
} from "../../redux/actions/category/category.action";
import {
  getQuestionAireByIdAction,
  updateeQuestionAireAction,
} from "../../redux/actions/questionaire/questionaire.actions";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Topbar from "../topbar";
import { useHistory } from "react-router";
import { MyCustomStyle } from "../../assets/styles/MyStyles";
import CommonCard from "../../common/CommonCard";

const EditQuestionAire = ({
  categoryData,
  loading,
  getAllCategories,
  getCategoryByIb,
  categoryByIdData,
  userData,
  getQById,
  questionByIdData,
  updateQuestion,
  getSubcategoryChild,
  sub_Childs,
}) => {
  const history = useHistory();
  const getIdFromParams = () => {
    const { location } = history;
    const { pathname } = location;
    let name = pathname;
    let nameArr = name.split("/");
    let questionaireId = nameArr[nameArr.length - 1];
    getQById(questionaireId);
  };
  const passInitialValues = () => {
    setValue(
      questionByIdData && questionByIdData.question_type
        ? questionByIdData.question_type
        : "text"
    );
    setCatagories(questionByIdData && questionByIdData.parent_category);
    setSubCatagories(
      questionByIdData.parent_category != questionByIdData.sub_category &&  questionByIdData.sub_category != null ? questionByIdData.sub_category : ""
    );
    setSubCatagoriesChild(
      questionByIdData && questionByIdData.sub_category_child
    );
    let formData = new FormData();
    formData.append(
      "tn_parent",
      questionByIdData && questionByIdData.parent_category
    );
    getCategoryByIb(formData);
  };
  const getSubChild = () => {
    if (questionByIdData && questionByIdData.sub_category) {
      let formData = new FormData();
      formData.append(
        "tn_parent",
        questionByIdData && questionByIdData.sub_category
      );
      getSubcategoryChild(formData);
    }
  };
  useEffect(() => {
    getIdFromParams();
    getAllCategories();
  }, []);
  useEffect(() => {
    passInitialValues();
    getSubChild();
  }, [questionByIdData]);
  useEffect(() => {
    getCatagories();
  }, [categoryData]);

  useEffect(() => {
    getSubCatagories();
  }, [categoryByIdData]);

  useEffect(() => {
    assignChildToArray();
  }, [sub_Childs]);

  const classes = MyCustomStyle();

  const [catagories, setCatagories] = useState("");
  const [subCatagories, setSubCatagories] = useState("");
  const [subCatagoriesChild, setSubCatagoriesChild] = useState("");
  const [value, setValue] = useState("text");
  const [catagoriesList, setCatagoriesList] = useState([]);
  const [subCatagoriesList, setSubCatagoriesList] = useState([]);
  const [subChildList, setSubChildList] = useState([]);
  const [catagoryError, setCategoryError] = useState(false);
  const [subCategoryError, setsubCategoryError] = useState(false);
  const [genralError, setGenralError] = useState(false);
  const [subCategoryChildError, setSubcategoryChildError] = useState(false);

  // *  Yup Validation Schema ////////

  const TypevalidationSchema = Yup.object().shape({
    response: Yup.string()
      .max(250, "Question length should be less then 250 characters")
      .required("* response is required"),
    rOneText: Yup.string().required("* Field is required"),
    rTwoText: Yup.string().required("* Field is required"),
    userType: Yup.string().required("* Field is required"),
  });
  const simpleValidationSchema = Yup.object().shape({
    question: Yup.string()
      .max(250, "Question lenght should be less then 250 characters")
      .required("* question is required"),
    userType: Yup.string().required("* Field is required"),
  });
  const handleSubmit = (values) => {
    if (catagories === "") {
      setCategoryError(true);
      return;
    }
    if (subCatagoriesList && subCatagories === "") {
      setsubCategoryError(true);
      return;
    }
    if (subChildList && subCatagoriesChild === "") {
      setSubcategoryChildError(true);
      return;
    }
    if (
      value === "radio" &&
      values.rTwoText.toLowerCase() === values.rOneText.toLowerCase()
    ) {
      setGenralError(true);
      return;
    }
    if (value === "text") {
      const id = questionByIdData && questionByIdData.id;
      let formData = new FormData();
      formData.append("user", userData.id);
      formData.append("parent_category", catagories);
      formData.append("sub_category", !subCatagories ? catagories : subCatagories);
      formData.append(
        "sub_category_child",
        subCatagoriesChild ? subCatagoriesChild : ""
      );
      formData.append("question_for", values.userType);
      formData.append("question_type", value);
      formData.append("question_text", values.question);
      formData.append("r_text_one", "");
      formData.append("r_text_two", "");
      updateQuestion(formData, id, history);
    }
    if (value === "radio") {
      const id = questionByIdData && questionByIdData.id;
      let formData = new FormData();
      formData.append("user", userData.id);
      formData.append("parent_category", catagories);
      formData.append("sub_category", !subCatagories ? catagories : subCatagories);
      formData.append(
        "sub_category_child",
        subCatagoriesChild ? subCatagoriesChild : ""
      );
      formData.append("question_for", values.userType);
      formData.append("question_type", value);
      formData.append("question_text", values.response);
      formData.append("r_text_one", values.rOneText);
      formData.append("r_text_two", values.rTwoText);
      updateQuestion(formData, id, history);
    }
  };

  const getCatagories = () => {
    let items = categoryData
      .filter((Allcategories) => Allcategories.behaviour === "Default")
      .map((res, i) => {
        return { value: res.id, label: res.name };
      });
    setCatagoriesList(items && items.length > 0 ? items : "");
  };

  const getSubCatagories = () => {
    let item =
      categoryByIdData &&
      categoryByIdData.map((res, i) => {
        return { value: res.id, label: res.name };
      });
    setSubCatagoriesList(item && item.length > 0 ? item : "");
  };

  const assignChildToArray = () => {
    let item =
      sub_Childs &&
      sub_Childs.map((res, i) => {
        return { value: res.id, label: res.name };
      });
    setSubChildList(item && item.length > 0 ? item : "");
  };

  const handleChangeType = (event) => {
    setValue(event.target.value);
  };
  const handleChangeCategories = (event) => {
    setCatagories(event.target.value);
    setCategoryError(false);
    setSubCatagoriesList([]);
    setSubCatagoriesChild("");
    setSubCatagories("");
    let formData = new FormData();
    formData.append("tn_parent", event.target.value);
    getCategoryByIb(formData);
    if (subCatagoriesList.lenght > 0) {
      setSubCatagories(questionByIdData.sub_category);
    } else {
      setSubCatagories("");
    }
  };
  const handleChangeSubCategories = (event) => {
    setSubCatagories(event.target.value);
    setsubCategoryError(false);
    setSubChildList([]);
    setSubCatagoriesChild("");
    let formData = new FormData();
    formData.append("tn_parent", event.target.value);
    getSubcategoryChild(formData);
  };

  const handleChangeSubCategoriesChild = (event) => {
    setSubCatagoriesChild(event.target.value);
    setSubcategoryChildError(false);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar
              module="Questionnaire"
              item="Edit"
              bckLink="/mooner/details/questionaire"
            />
          </Grid>
        </Grid>
        <div className={classes.root}>
          <Typography className={classes.Title} gutterBottom>
            Questionnaire
          </Typography>
          <Grid container className={classes.mainContainer}>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  question:
                    questionByIdData &&
                    questionByIdData.question_type === "text"
                      ? questionByIdData.question_text
                      : "",
                  response:
                    questionByIdData &&
                    questionByIdData.question_type === "radio"
                      ? questionByIdData.question_text
                      : "",
                  rOneText:
                    questionByIdData &&
                    questionByIdData.question_type === "radio"
                      ? questionByIdData.r_text_one
                      : "",
                  rTwoText:
                    questionByIdData &&
                    questionByIdData.question_type === "radio"
                      ? questionByIdData.r_text_two
                      : "",
                  userType: questionByIdData
                    ? questionByIdData.question_for
                    : "",
                }}
                validationSchema={
                  value === "text"
                    ? simpleValidationSchema
                    : TypevalidationSchema
                }
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
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={4}
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
                          className={[classes.field, classes.removeOutline]}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={catagories}
                            onChange={handleChangeCategories}
                            label="categories"
                            className={classes.textStyle}
                            displayEmpty
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
                            {catagoriesList &&
                              catagoriesList.map((res, index) => (
                                <MenuItem
                                  key={index}
                                  className={classes.dropdownMenuStyle}
                                  value={res.value}
                                >
                                  {res.label}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                        {catagoryError && (
                          <div className="error"> Field is required </div>
                        )}
                      </Grid>
                      {subCatagoriesList && (
                        <Grid
                          item
                          xs={12}
                          sm={4}
                          md={4}
                          lg={4}
                          xl={4}
                          className={classes.mainRow}
                        >
                          <Typography className={classes.label} gutterBottom>
                            Subcategories
                          </Typography>
                          <FormControl
                            variant="outlined"
                            className={[classes.field, classes.removeOutline]}
                          >
                            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={subCatagories}
                              onChange={handleChangeSubCategories}
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
                              {subCatagoriesList &&
                                subCatagoriesList.map((res, index) => (
                                  <MenuItem
                                    key={index}
                                    className={classes.dropdownMenuStyle}
                                    value={res.value}
                                  >
                                    {res.label}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                          {subCategoryError && (
                            <div className="error"> Field is required </div>
                          )}
                        </Grid>
                      )}
                      {subChildList && (
                        <Grid
                          xs={12}
                          sm={4}
                          md={4}
                          lg={4}
                          xl={4}
                          className={classes.mainRow}
                        >
                          <Typography className={classes.label} gutterBottom>
                            Subchild
                          </Typography>
                          <FormControl
                            variant="outlined"
                            className={[classes.field, classes.removeOutline]}
                          >
                            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={subCatagoriesChild}
                              onChange={handleChangeSubCategoriesChild}
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
                              {subChildList &&
                                subChildList.map((res, index) => (
                                  <MenuItem
                                    key={index}
                                    className={classes.dropdownMenuStyle}
                                    value={res.value}
                                  >
                                    {res.label}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                          {subCategoryChildError && (
                            <div className="error"> Field is required </div>
                          )}
                        </Grid>
                      )}
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        lg={4}
                        xl={4}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.label} gutterBottom>
                          Select Type
                        </Typography>
                        <FormControl
                          variant="outlined"
                          className={[classes.field, classes.removeOutline]}
                        >
                          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                          <Select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userType}
                            name="userType"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="subCategories"
                            className={classes.textStyle}
                            displayEmpty
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
                              value={"seeker"}
                            >
                              Service Seeker
                            </MenuItem>
                            <MenuItem
                              className={classes.dropdownMenuStyle}
                              value={"provider"}
                            >
                              Service Provider
                            </MenuItem>
                            <MenuItem
                              className={classes.dropdownMenuStyle}
                              value={"business"}
                            >
                              Business
                            </MenuItem>
                          </Select>
                          {errors.userType && touched.userType ? (
                            <div
                              className="error-text"
                              style={{ marginTop: "10px" }}
                            >
                              {errors.userType}
                            </div>
                          ) : null}
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={8}
                        xl={4}
                        className={classes.mainRow}
                      >
                        <Typography className={classes.subtitle}>
                          {" "}
                          Questionnaire Type{" "}
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            className={classes.typeContainer}
                            aria-label="type"
                            name="type"
                            value={value != undefined ? value : "text"}
                            onChange={handleChangeType}
                          >
                            <FormControlLabel
                              value="text"
                              control={<Radio />}
                              label="Text"
                            />
                            <FormControlLabel
                              value="radio"
                              control={<Radio />}
                              label="Input"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                    {value === "text" && (
                      <Grid container className={classes.mainContainer}>
                        <Grid
                          item
                          xs={11}
                          sm={10}
                          md={10}
                          lg={8}
                          xl={8}
                          className={classes.mainRow}
                        >
                          <Typography className={classes.label} gutterBottom>
                            Questions
                          </Typography>
                          <TextareaAutosize
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.question}
                            name="question"
                            aria-label="minimum height"
                            rowsMin={8}
                            placeholder="questions"
                            className={classes.textArea}
                          />
                          {errors.question && touched.question ? (
                            <div className="error-text">{errors.question}</div>
                          ) : null}
                        </Grid>
                      </Grid>
                    )}
                    {value === "radio" && (
                      <>
                        <Grid
                          container
                          spacing={2}
                          className={classes.mainContainer}
                        >
                          <Grid
                            item
                            xs={11}
                            sm={10}
                            md={10}
                            lg={8}
                            xl={8}
                            className={classes.mainRow}
                          >
                            <Typography className={classes.label} gutterBottom>
                              Response
                            </Typography>
                            <TextareaAutosize
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.response}
                              name="response"
                              aria-label="minimum height"
                              rowsMin={8}
                              placeholder="questions"
                              className={classes.textArea}
                            />
                            {errors.response && touched.response ? (
                              <div className="error-text">
                                {errors.response}
                              </div>
                            ) : null}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          className={classes.mainContainer}
                          style={{ marginTop: "20px" }}
                        >
                          <Grid
                            item
                            xs={12}
                            sm={5}
                            md={5}
                            lg={4}
                            xl={4}
                            className={classes.mainRow}
                          >
                            <Typography className={classes.label} gutterBottom>
                              Radio 1 Text
                            </Typography>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.rOneText}
                              name="rOneText"
                              id="outlined-basic"
                              placeholder="radio 1 text"
                              variant="outlined"
                              className={[classes.field, classes.removeOutline]}
                            />
                            {errors.rOneText && touched.rOneText ? (
                              <div className="error-text">
                                {errors.rOneText}
                              </div>
                            ) : null}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={5}
                            md={5}
                            lg={4}
                            xl={4}
                            className={classes.mainRow}
                          >
                            <Typography className={classes.label} gutterBottom>
                              Radio 2 Text
                            </Typography>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.rTwoText}
                              name="rTwoText"
                              id="outlined-basic"
                              placeholder="radio 2 text"
                              variant="outlined"
                              className={[classes.field, classes.removeOutline]}
                            />
                            {errors.rTwoText && touched.rTwoText ? (
                              <div className="error-text">
                                {errors.rTwoText}
                              </div>
                            ) : null}
                            {genralError && (
                              <div className="error-text">
                                {" "}
                                Text must be Different
                              </div>
                            )}
                          </Grid>
                        </Grid>
                      </>
                    )}
                    <Button
                      onClick={handleSubmit}
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
            <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
              <CommonCard
                message="Create Question"
                btnText="Add"
                link="/mooner/add_questionaire"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = ({ category, categoryById, auth, questionaire }) => {
  return {
    userData: auth.user,
    questionByIdData: questionaire.QById,
    categoryByIdData: category.questionCatagory,
    sub_Childs: category.questionSubCategoryChild,
    categoryData: category.data,
    loading: category.loading,
  };
};
export default connect(mapStateToProps, {
  getAllCategories: getAllCategoriesAction,
  getCategoryByIb: getCategoriesByIdAction,
  getQById: getQuestionAireByIdAction,
  getSubcategoryChild: getSubcategoryChildAction,
  updateQuestion: updateeQuestionAireAction,
})(EditQuestionAire);

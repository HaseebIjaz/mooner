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
  makeStyles
} from "@material-ui/core";

import Topbar from "../../topbar";
import {useHistory} from 'react-router-dom';
import { MyCustomStyle } from "../../Announcement/MyStyles";
import BannerImage from '../../../assets/svg/bannerimg.svg';

const myStyle = makeStyles((mainTheme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#F0F3F8",
      height: "auto",
      [mainTheme.breakpoints.only("xl")]:{
        height: '100vh'
      }
    },
}));
const EditDocument = () => {
  const classes = MyCustomStyle();
  const partialStyle = myStyle();
  const history = useHistory();
  const [category, setCategory] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleBack = () => {
    history.push({
        pathname: '/mooner/details/announcemet'
    })
  }
  const handlechangeBack = () => {
    history.push({
        pathname: '/mooner/details/document_management'
    })
  }

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Topbar module=" Documents Details " item=" Edit " bckLink="/mooner/details/document_management" />
          </Grid>
        </Grid>
        <div className={partialStyle.root}>
          <Typography className={classes.Title} gutterBottom>
            Document Details
          </Typography>
          <Grid Container spacing={2} className={classes.bannerContainer}>
            <Grid items xs={12} sm={6} md={6} lg={6} xl={5}>
              <img src={BannerImage} className={classes.bannerAvatar}/>
            </Grid>
          </Grid>
          <Grid Container spacing={2} className={classes.mainContainer}>
            <Grid xs={10}>
              {/* <form className={classes.form} noValidate autoComplete="off"> */}
              <Grid Container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
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
                    className={[classes.field, classes.removeOutline]}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
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
                        className={[classes.field, classes.removeOutline]}
                    />
                </Grid>
              </Grid>
              <Grid Container spacing={2} className={classes.mainContainer}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
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
                        className={[classes.field, classes.removeOutline]}
                    />
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
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
                        onChange={handleChangeCategory}
                        value={category}
                        name="userType"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="subCategories"
                        className={classes.textStyle}
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
              </Grid>
              
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={handlechangeBack}
                >
                  Save
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

export default EditDocument;

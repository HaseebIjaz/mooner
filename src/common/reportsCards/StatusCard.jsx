import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { AmpStoriesOutlined } from "@material-ui/icons";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    width: "45%",
    height: "auto",
    borderRadius: mainTheme.spacing(4),
    marginTop: mainTheme.spacing(3),
    marginBottom: mainTheme.spacing(3),
    marginLeft: mainTheme.spacing(2),
    paddingRight: mainTheme.spacing(4),
    boxShadow: "0px 16px 32px 0px #20253B1A, 0px 4px 4px 0px #20253B14",

    [mainTheme.breakpoints.only("lg")]: {
      width: "70%",
      height: "auto",
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("md")]: {
        width: "50%",
        height: "auto",
        marginLeft: mainTheme.spacing(2),
      },
      [mainTheme.breakpoints.only("sm")]: {
        width: "57%",
        height: "auto",
        marginLeft: mainTheme.spacing(2),
      },
    [mainTheme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      marginLeft: mainTheme.spacing(0),
    },
  },

  title: {
    color: "#20253B",
    fontWeight: 600,
    fontSize: mainTheme.spacing(2.7),
    marginTop: mainTheme.spacing(1),
    marginBottom: mainTheme.spacing(2),
    marginLeft: mainTheme.spacing(3),
    marginRight: mainTheme.spacing(3),
    [mainTheme.breakpoints.down("lg")]: {
      marginLeft: mainTheme.spacing(1),
      fontSize: mainTheme.spacing(3),
    },
  },

  btn: {
    color: "#9E6DC9",
    marginLeft: mainTheme.spacing(3),
    textTransform: "capitalize",
    marginTop: mainTheme.spacing(0),
    [mainTheme.breakpoints.down("lg")]: {
      marginLeft: mainTheme.spacing(1),
      marginBottom: mainTheme.spacing(1),
    },
  },

  cardclr: {
    marginLeft: mainTheme.spacing(2),
    width: "72px",
    height: "72px",
    backgroundColor: "#FE7C7C",
    borderRadius: "24px",
    cursor: "pointer",
    [mainTheme.breakpoints.only("xs")]:{
        marginLeft: mainTheme.spacing(4)
    }
  },
  cardclrBlue:{
    marginLeft: mainTheme.spacing(2),
    width: "72px",
    height: "72px",
    backgroundColor: "#6C8CFC",
    borderRadius: "24px",
    cursor: "pointer",
    [mainTheme.breakpoints.only("xs")]:{
        marginLeft: mainTheme.spacing(4)
    }
  },
  cardclrpurple:{
    marginLeft: mainTheme.spacing(2),
    width: "72px",
    height: "72px",
    backgroundColor: "#C57DFE",
    borderRadius: "24px",
    cursor: "pointer",
    [mainTheme.breakpoints.only("xs")]:{
        marginLeft: mainTheme.spacing(4)
    }
  },
  cardclryellow:{
    marginLeft: mainTheme.spacing(2),
    width: "72px",
    height: "72px",
    backgroundColor: "#FCA92C",
    borderRadius: "24px",
    cursor: "pointer",
    [mainTheme.breakpoints.only("xs")]:{
        marginLeft: mainTheme.spacing(4)
    }
  },
  icons: {
    height: "35px",
    width: "35px",
    position: "relative",
    top: "23px",
    left: "17px",
  },
  numberValue: {
    fontSize: mainTheme.spacing(3),
    lineHeight: "28px",
    marginTop: mainTheme.spacing(2.5),
    fontWeight: '600',
    [mainTheme.breakpoints.only("xs")]:{
        textAlign: 'center'
    }
  },
  text: {
    fontSize: "14px",
    opacity: 0.7,
    lineHeight: "19px",
    [mainTheme.breakpoints.only("xs")]:{
        textAlign: 'center'
    }
  },
  cardWrapper: {
    display: "flex",
    marginTop: mainTheme.spacing(3),
    marginBottom: mainTheme.spacing(3),
  },
}));

export default function StatusCard(props) {
  const classes = useStyles();
  const { title, Images, amount, tagline } = props;
  const { amount1, amount2, amount3, amount4 } = amount;
  const {tagline1, tagline2, tagline3, tagline4} = tagline;
  console.log(Images);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>

        <div className={classes.cardWrapper}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <div className={classes.cardclr}>
                    <Box>
                      <img src={Images && Images.box1 && Images.box1.image1 && Images.box1.image1} className={classes.icons} />
                    </Box>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Typography className={classes.numberValue}>
                    {amount1}
                  </Typography>
                  <Typography className={classes.text}> { tagline1 } </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {
                        Images && Images.box2 && Images.box2.image2 && Images.box2.image2 &&
                    
                        <div className={classes.cardclrBlue}>
                            <Box>
                            <img src={Images && Images.box2 && Images.box2.image2 && Images.box2.image2} className={classes.icons} />
                            </Box>
                        </div>
                    }
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Typography className={classes.numberValue}>
                    {amount && amount.amount2}
                  </Typography>
                  <Typography className={classes.text}> {tagline && tagline.tagline2} </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.cardWrapper}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {
                        Images && Images.box3 && Images.box3.image3 && Images.box3.image3 &&

                        <div className={classes.cardclrpurple}>
                            <Box>
                            <img src={Images && Images.box3 && Images.box3.image3 && Images.box3.image3} className={classes.icons} />
                            </Box>
                        </div>
                    }
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Typography className={classes.numberValue}>
                    {amount3}
                  </Typography>
                  <Typography className={classes.text}> { tagline3 } </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {
                        Images && Images.box4 && Images.box4.image4 && Images.box4.image4 &&
                    
                        <div className={classes.cardclryellow}>
                            <Box>
                            <img src={Images && Images.box4 && Images.box4.image4 && Images.box4.image4} className={classes.icons} />
                            </Box>
                        </div>
                    }
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Typography className={classes.numberValue}>
                    {amount4}
                  </Typography>
                  <Typography className={classes.text}> {tagline4} </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

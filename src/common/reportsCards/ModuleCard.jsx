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
    width: "auto",
    height: "auto",
    borderRadius: mainTheme.spacing(4),
    marginTop: mainTheme.spacing(3),
    marginBottom: mainTheme.spacing(3),
    marginLeft: mainTheme.spacing(2),
    paddingRight: mainTheme.spacing(4),
    boxShadow: "0px 16px 32px 0px #20253B1A, 0px 4px 4px 0px #20253B14",

    [mainTheme.breakpoints.only("lg")]: {
      width: "auto",
      height: "auto",
      marginLeft: mainTheme.spacing(2),
    },
    [mainTheme.breakpoints.only("md")]: {
        width: "auto",
        height: "auto",
        marginLeft: mainTheme.spacing(2),
      },
      [mainTheme.breakpoints.only("sm")]: {
        width: "auto",
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
  },
  text: {
    fontSize: "14px",
    opacity: 0.7,
    lineHeight: "19px",
  },
  cardWrapper: {
    display: "flex",
    marginTop: mainTheme.spacing(3),
    marginBottom: mainTheme.spacing(3),
  },
}));

export default function ModuleCard(props) {
  const classes = useStyles();
  const { title, Images, amount, tagline } = props;
  const { amount1, amount2 } = amount;
  const {tagline1, tagline2 } = tagline;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>

        <div className={classes.cardWrapper}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={5}>
                  <div className={classes.cardclr}>
                    <Box>
                      <img src={Images && Images.box1 && Images.box1.image1 && Images.box1.image1} className={classes.icons} />
                    </Box>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={7}>
                  <Typography className={classes.numberValue}>
                    {amount1}
                  </Typography>
                  <Typography className={classes.text}> { tagline1 } </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className={classes.cardWrapper}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={5}>
                    {
                        Images && Images.box2 && Images.box2.image2 && Images.box2.image2 &&

                        <div className={classes.cardclrpurple}>
                            <Box>
                            <img src={Images && Images.box2 && Images.box2.image2 && Images.box2.image2} className={classes.icons} />
                            </Box>
                        </div>
                    }
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={7}>
                  <Typography className={classes.numberValue}>
                    {amount2}
                  </Typography>
                  <Typography className={classes.text}> { tagline2 } </Typography>
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

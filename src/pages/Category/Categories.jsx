import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Box, CircularProgress } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import Filter from '../../assets/svg/filter.svg';
import Edit from '../../assets/svg/Cedit.svg';
import { connect } from 'react-redux';
import { getAllCategoriesAction } from '../../redux/actions/category/category.action';
import { IMAGE_BASE_URL } from '../../api/constants';

const useStyles = makeStyles((mainTheme) => ({
  root: {
    flexGrow: 1,
    marginTop: mainTheme.spacing(3),
    marginLeft: mainTheme.spacing(2),
  },
  hoverdiv: {
    marginTop: mainTheme.spacing(3),
    marginLeft: mainTheme.spacing(7),
    display: 'felx',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover $boxgrid': {
      opacity: '1',
    },
  },

  imagegrid: {
    borderRadius: '35%',
    display: 'block',
    opacity: '1',
    backfacevisibility: 'hidden',
    transition: '.5s ease',
    width: '70px',
    height: '70px',
    '&:hover': {
      opacity: '0.3',
      visibilty: 'visible',
    },
  },
  boxgrid: {
    transition: '.9s ease',
    opacity: '0',
    position: 'relative',
    bottom: '40px',
    left: '30px',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
  },
  typogrid: {
    textAlign: 'center',
    marginLeft: mainTheme.spacing(6),
    marginTop: '3px',
    marginBottom: mainTheme.spacing(3),
    display: 'inline-block',
    width: '100px',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
  },
  title: {
    marginTop: mainTheme.spacing(7),
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '0.2em',
    color: '#20253B',
    [mainTheme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  addNewBtn: {
    marginLeft: mainTheme.spacing(6),
    width: '84px',
    height: '87px',
    backgroundColor:
      mainTheme &&
      mainTheme.palette &&
      mainTheme.palette.secondary &&
      mainTheme.palette.secondary.main,
    borderRadius: '35%',
    boxShadow: ' 0px 10px 10px rgba(32, 37, 59, 0.15)',
    marginTop: '4px',
  },
  iconWrapper: {
    textAlign: 'center',
  },
  typodiv: {
    marginTop: '12px',
  },
}));

const Categories = ({ categoryData, loading, getAllCategories }) => {
  const history = useHistory();
  useEffect(() => {
    getAllCategories();
  }, []);
  const addnewHandle = () => {
    history.push({
      pathname: '/mooner/details/create_category',
    });
  };
  const editHandle = (id) => {
    history.push({
      pathname: '/mooner/details/CLT/' + id,
    });
  };
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.header}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography className={classes.title}> Category </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div className="globalFilterContainer">
            <div className="icon">
              <Search />
            </div>
            <input type="text" className="globalFilter" placeholder="search" />
            <div className="circleContainer">
              <img src={Filter} className="filter" />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress />
            </div>
          ) : (
            categoryData.map((category, index) => {
              return (
                <>
                  <Grid item key={index}>
                    <span key={index}>
                      <div key={index} className={classes.hoverdiv}>
                        <img
                          src={`${IMAGE_BASE_URL}${category.cat_icon}`}
                          alt="Image not found"
                          className={classes.imagegrid}
                          onClick={() => editHandle(category.id)}
                        />
                        <div className={classes.boxgrid}>
                          {/* <AddIcon /> */}
                          <img
                            src={Edit}
                            alt="image not found"
                            className={classes.editImage}
                            onClick={() => editHandle(category.id)}
                          />
                        </div>
                      </div>

                      <div>
                        <Typography className={classes.typogrid}>
                          {category.name}
                        </Typography>
                      </div>
                    </span>
                  </Grid>
                </>
              );
            })
          )}

          <Grid item onClick={addnewHandle}>
            <div className={classes.addNewBtn}>
              <Box className={classes.iconWrapper}>
                <AddIcon
                  style={{
                    fontSize: '30px',
                    marginTop: '31px',
                  }}
                />
              </Box>
            </div>
            <div className={classes.typodiv}>
              <Typography className={classes.typogrid}>Add new</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
const mapStateToProps = ({ category }) => {
  return {
    categoryData: category.data,
    loading: category.loading,
  };
};
export default connect(mapStateToProps, {
  getAllCategories: getAllCategoriesAction,
})(Categories);

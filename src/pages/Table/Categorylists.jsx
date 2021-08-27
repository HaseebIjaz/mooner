import React, { useMemo, useEffect } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_BASE_URL } from '../../api/constants';
import {
  deleteCategory,
  changeImage,
  getParticularCategory,
} from '../../redux/actions/category/category.action';
import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';

import Search from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Actions from '../../assets/svg/actions.svg';
import TableLeftArrow from '../../assets/svg/tableLeftArrow.svg';
import TableRightArrow from '../../assets/svg/tableRightArrow.svg';
import Pagination from '../../assets/svg/pagination.svg';
import Filter from '../../assets/svg/filter.svg';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Edit from '../../assets/svg/Cedit.svg';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const useStyles = makeStyles((mainTheme) => ({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
  },
  collapse: {},
  paper: {
    margin: mainTheme.spacing(0),
  },
  actionContent: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  FlexWrapper: {
    display: 'flex',
    padding: mainTheme.spacing(2),
  },
  actionImage: {
    cursor: 'pointer',
  },
  links: {
    textDecoration: 'none',
  },
  actionsLabel: {
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '0.2em',
    color: '#20253B',
    marginLeft: mainTheme.spacing(2),
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
  },
  title: {
    marginTop: mainTheme.spacing(7),
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '0.2em',
    color: '#20253B',
    animation: 'slideInRight',
  },
  categoryHeading: {
    marginTop: mainTheme.spacing(8),
    display: 'flex',
    //   direction: "row",
  },
  title: {
    fontSize: '32px',
    lineHeight: '28px',
    letterSpacing: '0.2em',
    color: '#696969',
    marginRight: '7px',
    cursor: 'pointer',
    [mainTheme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  title2: {
    fontSize: '32px',
    lineHeight: '28px',
    letterSpacing: '0.2em',
    color: '#000000',
    marginLeft: '7px',

    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
    [mainTheme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  registertypo: {
    color: '#20253B',
    fontWeight: '600',
    fontSize: '20px',
    letterSpacing: '0.2em',
  },
  middleGridwrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  middleUpperdiv: {
    position: 'relative',
  },
  Eggplateimg: {
    width: '150px',
    height: '140px',
  },
  cameraIcondiv: {
    width: '50px',
    height: '45px',
    backgroundColor: '#FEDB29',
    position: 'absolute',
    top: '54%',
    left: '111px',
    borderRadius: '35%',
    justifyContent: 'center',
  },
  Cameraicon: {
    marginTop: '10px',
    marginLeft: '11px',
  },
  middleRightdiv: {
    marginTop: '9%',
    marginLeft: '20px',
  },
  rightUpperdiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  categoryname: {
    fontFamily: 'Gilroy-Bold',
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '0.2em',
    color: '#000000',
    fontWeight: '50px',

    display: 'inline-block',
    width: '180px',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
  },
  editimg: {
    width: '20px',
    height: '20px',
    marginLeft: '20px',
    cursor: 'pointer',
  },
  distributors: {
    marginTop: '10px',
    fontFamily: 'Gilroy-Medium',
    fontSize: '14px',
    lineHeight: '16px',
    /* identical to box height */
    letterSpacing: '0.2em',
    color: '#000000',
    opacity: '0.7',
  },
  rightGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  managecategory: {
    borderRadius: '30px',
    padding: '19px 42px 19px 42px',
    backgroundColor: '#FEDB29',
    textTransform: 'none',
    color: '#20253B',
    fontSize: '19px',
    '&:hover': {
      backgroundColor: '#20253B',
      color: '#FEDB29',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const Categorylists = (props) => {
  const { categoryData, deleteCategory, getParticularCategory, loading } =
    props;

  const { id } = props.match.params;
  const history = useHistory();
  useEffect(() => {
    getParticularCategory(id);
  }, []);
  const categoryHandle = () => {
    history.push({
      pathname: '/mooner/details/categories',
    });
  };
  const editHandle = (id) => {
    console.log('in edit ');
    history.push({
      pathname: '/mooner/update_category/' + id,
    });
  };
  const classes = useStyles();
  const DATA = [
    {
      id: 14587,
      type: 'Halal',
      dish: 'Vada Pao',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Vegetarian',
      dish: 'Daal',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Halal',
      dish: 'Vada Pao',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Non-Halal',
      dish: 'Cuisses de gr...',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Halal',
      dish: 'Vada Pao',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Non-Halal',
      dish: 'Cuisses de gr...',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Halal',
      dish: 'Vada Pao',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Non-Halal',
      dish: 'Cuisses de gr...',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'Halal',
      dish: 'Daal',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
    {
      id: 14587,
      type: 'vegetarian',
      dish: 'Vada Pao',
      dine: 'Take away',
      booking: '65',
      price: '$120',
      unit: '5',
    },
  ];

  const COLUMNS = [
    {
      Header: ' Sp Id',
      accessor: 'id',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Dish',
      accessor: 'dish',
    },
    {
      Header: 'Dine',
      accessor: 'dine',
    },
    {
      Header: 'Booking',
      accessor: 'booking',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Unit',
      accessor: 'unit',
    },

    {
      Header: ' ',
      accessor: '',
      Cell: function renderActions() {
        return (
          <>
            <img src={Actions} className="actions" />
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,

    prepareRow,
    page,
    nextPage,
    pageOptions,
    state,
    gotoPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, globalFilter } = state;
  const arrayPageIndex =
    pageIndex - 2 < 0
      ? pageOptions.slice(0, pageIndex + 3)
      : pageOptions.slice(pageIndex - 2, pageIndex + 3);

  const handleDelete = (id) => {
    deleteCategory(id);
  };
  const handleImageChange = (e) => {
    let formData = new FormData();
    formData.append('name', categoryData.name);
    formData.append('cat_icon', e.target.files[0]);
    formData.append(
      'category_heading_text',
      categoryData.category_heading_text
    );
    formData.append(
      'category_heading_text2',
      categoryData.category_heading_text2
    );
    props.changeImage(formData, categoryData.id);
  };

  return (
    <Container maxWidth="xl">
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={2} className={classes.header}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            className={classes.categoryHeading}
          >
            {/* <Typography className={classes.title}>FAQs</Typography> */}
            <Typography className={classes.title} onClick={categoryHandle}>
              Category
            </Typography>
            <ArrowRightIcon />
            <Typography className={classes.title2}>
              {categoryData.name}{' '}
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="globalFilterContainer">
              <div className="icon">
                <Search />
              </div>
              <input
                type="text"
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="globalFilter"
                placeholder="search"
              />
              <div className="circleContainer">
                <img src={Filter} className="filter" />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.header}>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={classes.middleGridwrapper}>
                  <div className={classes.middleUpperdiv}>
                    <img
                      src={`${IMAGE_BASE_URL}${categoryData.category_icon}`}
                      alt="image not found"
                      className={classes.Eggplateimg}
                    />
                    <div className={classes.cameraIcondiv}>
                      <label htmlFor="avatarUpload">
                        <CameraAltIcon className={classes.Cameraicon} />
                      </label>
                      <input
                        type="file"
                        onChange={handleImageChange}
                        name="cat_icon"
                        accept="image/*"
                        name="avatarUpload"
                        id="avatarUpload"
                        style={{ display: 'none' }}
                      />
                    </div>
                  </div>
                  <div className={classes.middleRightdiv}>
                    <div className={classes.rightUpperdiv}>
                      <Typography className={classes.categoryname}>
                        {categoryData.name}
                      </Typography>
                    </div>
                    <img
                      src={Edit}
                      alt="image not found"
                      className={classes.editimg}
                      onClick={() => editHandle(categoryData.id)}
                    />
                    <DeleteOutlineIcon
                      className={classes.editimg}
                      onClick={(e) => handleDelete(id)}
                    />
                    <div>
                      <Typography className={classes.distributors}>
                        34 Providers
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.rightGrid}
              >
                <Link
                  to={`/mooner/details/sub_category/${id}`}
                  className={classes.link}
                >
                  <Button className={classes.managecategory}>
                    Manage Sub Category
                  </Button>
                </Link>
              </Grid>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography className={classes.registertypo}>
            Registererd Provider
          </Typography>
        </Grid>

        <table className="reportTable" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="tableBody" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} className="roundBorder" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td key={cell.id} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
      <div className="paginationContainer">
        <img
          src={TableLeftArrow}
          onClick={() => previousPage()}
          className={canPreviousPage ? 'previousbtn' : 'disabledPreviousBtn'}
        />
        {arrayPageIndex.map((i) => (
          <div className="pagination__item" active={pageIndex === i} key={i}>
            <div
              key={i}
              className={`paginationLink ${
                pageIndex === i ? 'paginationLinkActive' : ''
              }`}
              onClick={() => gotoPage(i)}
            >
              {i + 1}
            </div>
          </div>
        ))}
        {pageIndex + 3 <= arrayPageIndex.length && (
          <img src={Pagination} className="paginationDot" />
        )}
        <img
          src={TableRightArrow}
          onClick={() => nextPage()}
          className={canNextPage ? 'nextbtn' : 'disabledPreviousBtn'}
        />
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    categoryData: state.category.particularCategory,
    loading: state.category.loading,
  };
};
export default connect(mapStateToProps, {
  deleteCategory,
  changeImage,
  getParticularCategory,
})(Categorylists);

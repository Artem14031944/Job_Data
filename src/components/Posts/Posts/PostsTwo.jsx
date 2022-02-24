import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Loading from '../Loading/Loading';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CustomizedSelects from '../../Posts/PostItem/Input/Input'

const columns = [
    { id: 'title', label: 'Title', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 250 },
    { id: 'phone', label: 'Phone', minWidth: 150 },
    { id: 'price', label: 'Price', minWidth: 80 },
    { id: 'url', label: 'Address', minWidth: 150 },
    { id: 'creation_time', label: 'Creation Time', minWidth: 120 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

export default function StickyHeadTable({ loading }) {

    
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [postsTwo, setPostsTwo] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPage] = useState(10);


    const getPostsTwo = async () => {
        let res = await axios.get(`http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/?page=${pageNumber}&page_size=${totalPages}`);
        setPostsTwo(res.data.results);
        console.log(res.data.result);
    };


    // const handleChangePage = (event, page) => {
    //     getPostsTwo();
    //     setPage(page);
    // };

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    if(loading) {
        return <Loading />
    };

    return (
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {postsTwo && postsTwo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(post => {
                return (
                    <TableRow 
                        hover role="checkbox" 
                        tabIndex={-1} 
                        key={post.id}>
                        { columns.map((column) => {
                            const value = post[column.id];
                            return (
                                <TableCell 
                                    key={column.id} 
                                    align={column.align} 
                                >
                                    <Link
                                        to={`/post/${post.id-285}/item`}
                                        style={{
                                            'textDecoration':'none', 
                                            'color':'#000'
                                        }}
                                    >
                                        { column.format && typeof value === 'number' ? column.format(value) : value }
                                    </Link>
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={postsTwo.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
            <select>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
            </select>
            <Button
                color="primary" 
                variant="outlined"
                onClick={handleChangeRowsPerPage}   
            >
                Push
            </Button>
        </Paper>
    );
};

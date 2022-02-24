import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

export default function PostItemTwo({ posts, loading, postsTwo }) {

    const classes = useStyles();

    let page = window.location.href.split('/')[4].toString();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>Phone</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Address</StyledTableCell>
                        <StyledTableCell>Creation Time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { 
                        loading ? null
                        : posts.length > 0  && 
                        <StyledTableRow key={posts[page].id}>
                            <StyledTableCell>{posts[page].title}</StyledTableCell>
                            <StyledTableCell>{posts[page].description}</StyledTableCell>
                            <StyledTableCell>{posts[page].phone}</StyledTableCell>
                            <StyledTableCell>{posts[page].price}</StyledTableCell>
                            <StyledTableCell>{posts[page].url}</StyledTableCell>
                            <StyledTableCell>{posts[page].creation_time}</StyledTableCell>
                        </StyledTableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
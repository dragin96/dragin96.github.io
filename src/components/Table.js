import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const MyTable = (props) => {
    const classes = useStyles();
    const {data} = props;
    return (<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Номер кода валюты</TableCell>
                    <TableCell align="right">Код валюты</TableCell>
                    <TableCell align="right">Номинал</TableCell>
                    <TableCell align="right">Валюта</TableCell>
                    <TableCell align="right">Курс</TableCell>
                    <TableCell align="right">Предыдущий курс</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.ID}>
                        <TableCell align="right">{row.ID}</TableCell>
                        <TableCell align="right">{row.NumCode}</TableCell>
                        <TableCell align="right">{row.CharCode}</TableCell>
                        <TableCell align="right">{row.Nominal}</TableCell>
                        <TableCell align="right">{row.Name}</TableCell>
                        <TableCell align="right">{row.Value}</TableCell>
                        <TableCell align="right">{row.Previous}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
};

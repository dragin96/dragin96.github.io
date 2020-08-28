import React, {useState} from 'react';
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {updateRequest} from "./redux/action/currency.actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MyTable} from "./components/Table";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import shallowEqual from "react-redux/es/utils/shallowEqual";
let intervalUpdate;

export const App = () => {
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.currency, shallowEqual);
    const [isUpdate, setIsUpdate] = useState(false);
    const updateTime = 10000;
    if (!tableData.data && !tableData.isLoading) {
        dispatch(updateRequest());
    }
    const setUpdateInfo = (statusRequest) => {
        console.log('start interval');
        if (statusRequest){
            intervalUpdate = setInterval(() => {
                if (statusRequest && !tableData.isLoading) {
                    dispatch(updateRequest());
                }
            }, updateTime);
        }
        else {
            clearInterval(intervalUpdate);
        }
    };

    const loadTable = !tableData.data ? <CircularProgress className='spinner'/> : <MyTable data={tableData.data.Valute}/>;
    return (
        <>
            <div className='info'>
                {tableData.data ? <div>Последнее обновление {tableData.data.Timestamp}</div> : ''}
                {tableData.data ? <div>Запрошенно {tableData.data.nowDate}</div> : ''}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isUpdate}
                            onChange={() => {
                                setIsUpdate(!isUpdate);
                                setUpdateInfo(!isUpdate)
                            }}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Обнавлять данные каждую минуту"
                />
            </div>
            {loadTable}
        </>
    )
};


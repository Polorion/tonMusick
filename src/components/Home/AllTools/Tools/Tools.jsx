import * as React from 'react';
import S from './Tools.module.scss'
import {addItem} from "../../../../store/price/price.js";
import {useDispatch} from "react-redux";

export const Tools = ({el}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(addItem({...el, id: Math.random()}))
    }
    return (
        <div className={S.body}>
            <div onClick={onClick}> {el.name}</div>

        </div>
    );
};
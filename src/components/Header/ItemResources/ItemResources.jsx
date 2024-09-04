import * as React from 'react';
import S from './ItemResources.module.scss'
import Setting from "/src/assets/setting.svg";

export const ItemResources = ({Icon, price}) => {
    return (
        <div className={S.body}>
            <div className={S.icon}>
                <Icon/>
            </div>
            <div className={S.price}> = {price}</div>

        </div>
    );
};
import * as React from 'react';
import S from './Header.module.scss'
import {ItemResources} from "./ItemResources/ItemResources.jsx";

import Disk from "/src/assets/disk.svg";
import Ton from "/src/assets/ton.svg";
import Drink from "/src/assets/drink.svg";
import Gold from "/src/assets/gold.svg";
import {useSelector} from "react-redux";
import SettingIcon from "/src/assets/setting.svg";
import {useState} from "react";


export const Header = () => {
    const [openSetting, setOpenSetting] = useState(false)
    const [check, setCheck] = useState(false)
    const price = useSelector(state => state.price.material)
    const onSave = () => {
        setOpenSetting(false)
    }
    return (
        <div className={S.body}>
            <div className={S.res}>
                <ItemResources Icon={Disk} price={price.disk}/>
                <ItemResources Icon={Ton} price={price.gold}/>
                <ItemResources Icon={Drink} price={price.energy}/>
                <ItemResources Icon={Gold} price={price.gold}/>
            </div>
            <div onClick={() => {
                setOpenSetting(prevState => !prevState)
            }} className={S.settingIcon}>
                <SettingIcon/>
            </div>
            {openSetting &&
                <div onClick={() => {
                    setOpenSetting(prevState => !prevState)
                }} className={S.bodySetting}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={S.shadowSetting}>
                        <div>своя цена на ресурсы</div>
                        <div className={S.settingItem}>
                            <Disk/>
                            <input type="number"/>
                        </div>
                        <div className={S.settingItem}>
                            <Drink/>
                            <input type="number"/>
                        </div>
                        <div className={S.settingItem}>
                            <Gold/>
                            <input type="number"/>
                        </div>
                        <div onClick={() => {
                            setCheck(prevState => !prevState)
                        }} className={`${S.checkBox} ${check && S.checked}`}>актуальный флор
                        </div>
                        <button onClick={() => {
                            onSave()
                        }} className={S.save}>сохранить
                        </button>

                    </div>
                </div>
            }
        </div>
    );
};
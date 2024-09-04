import * as React from 'react';
import S from './Header.module.scss'
import {ItemResources} from "./ItemResources/ItemResources.jsx";

import Disk from "/src/assets/disk.svg";
import Ton from "/src/assets/ton.svg";
import Drink from "/src/assets/drink.svg";
import Gold from "/src/assets/gold.svg";
import {useDispatch, useSelector} from "react-redux";
import SettingIcon from "/src/assets/setting.svg";
import {useState} from "react";
import {setDisk, setEnergy, setGold} from "../../store/price/price.js";


export const Header = () => {
    const [openSetting, setOpenSetting] = useState(false)
    const [check, setCheck] = useState(false)
    const price = useSelector(state => state.price.material)
    const [inputGold, setInputGold] = useState()
    const [inputEnergy, setInputEnergy] = useState()
    const [inputDisk, setInputDisk] = useState()
    const dispatch = useDispatch()

    const onSave = () => {
        dispatch(setGold(inputGold))
        dispatch(setEnergy(inputEnergy))
        dispatch(setDisk(inputDisk))
        setOpenSetting(false)
    }
    return (
        <div className={S.body}>
            <div className={S.res}>
                <ItemResources Icon={Disk} price={price.disk}/>
                <ItemResources Icon={Ton} price={'5.5'}/>
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
                            <input onInput={(e) => {
                                setInputGold(e.target.value)
                            }} type="number"/>
                        </div>
                        <div className={S.settingItem}>
                            <Drink/>
                            <input onInput={(e) => {
                                setInputEnergy(e.target.value)
                            }} type="number"/>
                        </div>
                        <div className={S.settingItem}>
                            <Gold/>
                            <input onInput={(e) => {
                                setInputDisk(e.target.value)
                            }} type="number"/>
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
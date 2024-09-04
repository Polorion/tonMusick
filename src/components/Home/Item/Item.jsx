import * as React from 'react';
import S from './Item.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteItem} from "../../../store/price/price.js";
import Disk from "../../../assets/disk.svg";
import Drink from "../../../assets/drink.svg";
import Gold from "../../../assets/gold.svg";
import Ton from "/src/assets/ton.svg";

export const Item = ({el}) => {
    const dispatch = useDispatch()

    const choiceElem = () => {
        switch (el.material) {
            case 'disk':
                return <Disk/>
            case 'energy':
                return <Drink/>
            case 'gold':
                return <Gold/>
        }
    }


    const price = useSelector(state => state.price.material)
    const profit = () => {
        const profitGold = el.spending.gold * price.gold
        const profitEnergy = el.spending.energy * price.energy
        const profitDisk = el.spending.disk * price.disk
        switch (el.material) {
            case 'disk':
                return (el.income * price.disk - profitEnergy - profitGold).toFixed(3) * 4
            case 'energy':
                return (el.income * price.energy - profitDisk - profitGold).toFixed(3) * 4
            case 'gold':
                return (el.income * price.gold - profitEnergy - profitDisk).toFixed(3) * 4
        }


    }
    return (

        <tr className={S.body}>
            <td>{el.name}
                <div className={S.mt} onClick={() => {
                    dispatch((deleteItem(el.id)))
                    const allTools = JSON.parse(localStorage.getItem('item'))
                    const q = allTools.filter(els => els.id !== el.id)
                    localStorage.setItem('item', JSON.stringify(q))
                    console.log(q)
                }}>Удалить
                </div>
            </td>
            <td className={S.styleBlock}>
                <div>
                    {choiceElem()}
                    {el.income}
                </div>
            </td>
            <td className={S.styleBlock}>
                <div><Disk/>{el.name === 'disk' ? '' : el.spending.disk}</div>
                <div><Drink/>{el.name === 'energy' ? '' : el.spending.energy}</div>
                <div><Gold/> {el.name === 'gold' ? '' : el.spending.gold}</div>
            </td>
            <td>
                <div className={S.ton}><Ton/>{profit()}</div>

            </td>
        </tr>
    );
};
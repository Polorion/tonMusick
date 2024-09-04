import * as React from 'react';
import S from './Home.module.scss'
import {Item} from "./Item/Item.jsx";
import {useSelector} from "react-redux";
import Disk from "/src/assets/disk.svg";
import Ton from "/src/assets/ton.svg";
import Drink from "/src/assets/drink.svg";
import Gold from "/src/assets/gold.svg";

export const Home = () => {
    const items = useSelector(state => state.price.myTools)
    const qd = (JSON.parse(localStorage.getItem('item')))

    const allGold = items.filter(el => el.material === 'gold')
    const allEnergy = items.filter(el => el.material === 'energy')
    const allDisk = items.filter(el => el.material === 'disk')
    const price = useSelector(state => state.price.material)
    const profit = () => {
        const total = items.map(el => {

            const profitGold = el.spending.gold * price.gold
            const profitEnergy = el.spending.energy * price.energy
            const profitDisk = el.spending.disk * price.disk
            switch (el.material) {
                case 'disk':
                    return (el.income * price.disk - profitEnergy - profitGold).toFixed(5) * 4
                case 'energy':
                    return (el.income * price.energy - profitDisk - profitGold).toFixed(5) * 4
                case 'gold':
                    return (el.income * price.gold - profitEnergy - profitDisk).toFixed(5) * 4
            }
        })
        return total

    }
    const allTon = profit().reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    const allGoldMine = allGold.reduce(
        (accumulator, currentValue) => accumulator + currentValue.income,
        0,
    )
    const allEnergyMine = allEnergy.reduce(
        (accumulator, currentValue) => accumulator + currentValue.income,
        0,
    )
    const allDiskMine = allDisk.reduce(
        (accumulator, currentValue) => accumulator + currentValue.income,
        0,
    )

    const allGoldDown = items.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.spending.gold
        },
        0,
    )
    const allEnergyDown = items.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.spending.energy
        },
        0,
    )
    const allDiskDown = items.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.spending.disk
        },
        0,
    )
    return (
        <div className={S.body}>
            <div className={S.title}> Мои инструменты</div>
            <table className={S.table}>
                <tbody>
                <tr>
                    <td>название</td>
                    <td>добыча</td>
                    <td>расход</td>
                    <td>доход</td>
                </tr>
                {qd ? qd.map((el, id) => {
                    return <Item key={id} el={el}/>
                }) : <div></div>}
                <tr>
                    <td>сумарно</td>
                    <td className={S.styleBlock}>
                        <div><Disk/> {allDiskMine.toFixed(1)}</div>
                        <div><Drink/> {allEnergyMine.toFixed(1)}</div>
                        <div><Gold/> {allGoldMine.toFixed(1)}</div>
                    </td>
                    <td className={S.styleBlock}>
                        <div><Disk/> {allDiskDown.toFixed(1)}</div>
                        <div><Drink/> {allEnergyDown.toFixed(1)}</div>
                        <div><Gold/> {allGoldDown.toFixed(1)}</div>
                    </td>
                    <td className={S.styleBlock}>
                        <div><Disk/> {(allDiskMine - allDiskDown).toFixed(1)}</div>
                        <div><Drink/> {(allEnergyMine - allEnergyDown).toFixed(1)}</div>
                        <div><Gold/> {(allGoldMine - allGoldDown).toFixed(1)}</div>
                        <div><Ton/> {allTon.toFixed(2)}</div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};
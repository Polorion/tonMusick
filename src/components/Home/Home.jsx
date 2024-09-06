import * as React from 'react';
import S from './Home.module.scss'
import {Item} from "./Item/Item.jsx";
import {useSelector} from "react-redux";
import Disk from "/src/assets/disk.svg";
import Ton from "/src/assets/ton.svg";
import Drink from "/src/assets/drink.svg";
import Gold from "/src/assets/gold.svg";

export const Home = () => {
    const dq = useSelector(state => state.price.myTools)
    const qd = (JSON.parse(localStorage.getItem('item')))

    const allGold = qd?.filter(el => el.material === 'gold')
    const allEnergy = qd?.filter(el => el.material === 'energy')
    const allDisk = qd?.filter(el => el.material === 'disk')
    const allDjset = qd?.filter(el => el.material === 'djset')
    const price = useSelector(state => state.price.material)
    const profit = () => {
        const total = qd?.map(el => {

            const profitGold = el.spending.gold * price.gold
            const profitEnergy = el.spending.energy * price.energy
            const profitDisk = el.spending.disk * price.disk
            switch (el.material) {
                case 'disk':
                    return (el.income * price.disk - profitEnergy - profitGold).toFixed(5) * 1
                case 'energy':
                    return (el.income * price.energy - profitDisk - profitGold).toFixed(5) * 1
                case 'gold':
                    return (el.income * price.gold - profitEnergy - profitDisk).toFixed(5) * 1
                case 'djset':
                    return (el.income - price.gold - profitEnergy - profitDisk).toFixed(5) * 1
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

    const allGoldDown = qd.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.spending.gold
        },
        0,
    )
    const allEnergyDown = qd.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue.spending.energy
        },
        0,
    )
    const allDiskDown = qd.reduce(
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
                        <div><Ton/> {allTon.toFixed(3)}</div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};
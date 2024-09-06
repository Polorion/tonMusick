import * as React from 'react';
import {useState} from 'react';
import S from './AllTools.module.scss'
import {useSelector} from "react-redux";
import {Tools} from "./Tools/Tools.jsx";
import gold from "/src/assets/goldTools.png"
import disk from "/src/assets/diskTools.png"
import energy from "/src/assets/energyTools.png"
import djset from "/src/assets/djset.png"

export const AllTools = () => {
    const [isOpen, setOpen] = useState(false)
    const [activeTools, setActiveTools] = useState([])
    const energyTools = useSelector(state => state.price.energyItem)
    const goldTools = useSelector(state => state.price.goldItem)
    const diskTools = useSelector(state => state.price.diskItem)
    const djSetTools = useSelector(state => state.price.djSet)

    const onClick = () => {
        setOpen(prevState => !prevState)
    }
    return (
        <div className={S.body}>
            <button className={S.addTools} onClick={onClick}>добавить инструмент</button>
            {isOpen && <div onClick={() => {
                setOpen(false)
            }} className={S.popup}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className={S.shadowPopup}>

                    <div className={S.choiceTools}>
                        <div onClick={() => {
                            setActiveTools(diskTools)
                        }
                        }>
                            <img src={disk} alt=""/>
                        </div>
                        <div onClick={() => {
                            setActiveTools(energyTools)
                        }
                        }>

                            <img src={energy} alt=""/>
                        </div>
                        <div onClick={() => {
                            setActiveTools(goldTools)
                        }
                        }>

                            <img src={gold} alt=""/>

                        </div>
                        <div onClick={() => {
                            setActiveTools(djSetTools)
                        }
                        }>

                            <img src={djset} alt=""/>

                        </div>
                    </div>
                    <div>
                        {
                            activeTools.map((el) => <Tools el={el} key={el.id}/>)
                        }
                    </div>
                </div>

            </div>}

        </div>
    );
};
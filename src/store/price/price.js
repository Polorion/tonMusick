import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    material: {
        gold: 0.00147,
        energy: 0.00096,
        disk: 0.00177
    },
    myTools: [],
    goldItem: [
        {
            name: 'pr compaign 0',
            id: 1,
            material: 'gold',
            income: 7.2,
            spending: {
                energy: 3,
                disk: 0.6,
                gold: 0
            },
        },
        {
            name: 'pr compaign 1',
            id: 2,
            material: 'gold',
            income: 72,
            spending: {
                energy: 30,
                disk: 6,
                gold: 0
            },
        },
        {
            name: 'pr compaign 2',
            id: 3,
            material: 'gold',
            income: 156,
            spending: {
                energy: 60,
                disk: 12,
                gold: 0
            },
        },
        {
            name: 'pr compaign 3',
            id: 4,
            material: 'gold',
            income: 312,
            spending: {
                energy: 120,
                disk: 24,
                gold: 0
            },
        }, {
            name: 'pr compaign 4',
            id: 5,
            material: 'gold',
            income: 624,
            spending: {
                energy: 240,
                disk: 48,
                gold: 0
            },
        },
    ],
    diskItem: [
        {
            name: 'dj console 0',
            id: 6,
            material: 'disk',
            income: 6,
            spending: {
                energy: 2.7,
                disk: 0,
                gold: 0.9
            },
        },
        {
            name: 'dj console 1',
            id: 7,
            material: 'disk',
            income: 60,
            spending: {
                energy: 27,
                disk: 0,
                gold: 9
            },
        },
        {
            name: 'dj console 2',
            id: 8,
            material: 'disk',
            income: 132,
            spending: {
                energy: 54,
                disk: 0,
                gold: 18
            },
        },
        {
            name: 'dj console 3',
            id: 9,
            material: 'disk',
            income: 264,
            spending: {
                energy: 108,
                disk: 0,
                gold: 36
            },
        }, {
            name: 'dj console 4',
            id: 10,
            material: 'disk',
            income: 528,
            spending: {
                energy: 216,
                disk: 0,
                gold: 72
            },
        },
    ],
    energyItem: [
        {
            name: 'energy drinks 0',
            id: 11,
            material: 'energy',
            income: 6,
            spending: {
                energy: 0,
                disk: 0.9,
                gold: 1.2
            },
        },
        {
            name: 'energy drinks 1',
            id: 12,
            material: 'energy',
            income: 60,
            spending: {
                energy: 0,
                disk: 9,
                gold: 12
            },
        },
        {
            name: 'energy drinks 2',
            id: 13,
            material: 'energy',
            income: 192,
            spending: {
                energy: 0,
                disk: 36,
                gold: 48
            },
        },
        {
            name: 'energy drinks 3',
            id: 14,
            material: 'energy',
            income: 576,
            spending: {
                energy: 0,
                disk: 90,
                gold: 120
            },
        }, {
            name: 'energy drinks 4',
            id: 15,
            material: 'energy',
            income: 1152,
            spending: {
                energy: 0,
                disk: 192,
                gold: 240
            },
        },
    ],
    djSet: [{
        name: 'djSet 1',
        id: 12112,
        material: 'djset',
        income: 0.36,
        spending: {
            energy: 72,
            disk: 30,
            gold: 36
        },

    }, {
        name: 'djSet 2',
        id: 121122,
        material: 'djset',
        income: 0.9,
        spending: {
            energy: 168,
            disk: 84,
            gold: 72
        },

    }, {
        name: 'djSet 3',
        id: 121123,
        material: 'djset',
        income: 2.1,
        spending: {
            energy: 390,
            disk: 192,
            gold: 168
        },

    },]
};


export const price = createSlice({
    name: "price",
    initialState,
    reducers: {
        addItem: (state, {payload}) => {
            state.myTools = [...state.myTools, payload]
        },
        deleteItem: (state, {payload}) => {
            state.myTools = state.myTools.filter(el => el.id !== payload)
        },
        setGold: (state, {payload}) => {
            state.material.gold = payload
        },
        setEnergy: (state, {payload}) => {
            state.material.energy = payload
        },
        setDisk: (state, {payload}) => {
            state.material.disk = payload
        },
    },
});

export const {
    addItem, deleteItem, setGold,
    setEnergy,
    setDisk
} =
    price.actions;

export default price.reducer;

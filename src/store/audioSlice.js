import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    audioName: null,
    audioData: [
        {
            idName: "heater1",
            keyName: "Q",
            audioName: "Heater 1"
        },
        {
            idName: "heater2",
            keyName: "W",
            audioName: "Heater 2"
        },
        {
            idName: "heater3",
            keyName: "E",
            audioName: "Heater 3"
        },
        {
            idName: "heater4",
            keyName: "A",
            audioName: "Heater 4"
        },
        {
            idName: "clap",
            keyName: "S",
            audioName: "Clap"
        },
        {
            idName: "open-hh",
            keyName: "D",
            audioName: "Open-HH"
        },
        {
            idName: "kick-n-hat",
            keyName: "Z",
            audioName: "Kick-n'-Hat"
        },
        {
            idName: "kick",
            keyName: "X",
            audioName: "Kick"
        },
        {
            idName: "closed-hh",
            keyName: "C",
            audioName: "Closed-HH"
        }
    ]
};

const audioSlice = createSlice({
    name: "audio",
    initialState,
    reducers: {
        update: (state, action) => {
            state.audioName = action.payload;
        }
    }
});

export const { update } = audioSlice.actions;

export default audioSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { response } from "express";

const fetchReels = createAsyncThunk("fetchReels", async ()=>{
    const response = await fetch("url");
    return response.json();
})

const reelsSlice = createSlice({
    name : "reels",
    
})
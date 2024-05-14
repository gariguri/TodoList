import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";
import {useTheme} from './ThemeProvider'

export default function MyPage(){
    const {theme,toggleTheme }=useTheme();
    // console.log(context);

    // const {theme}=useTheme()
    // return(
    //     <div style={theme==="light" ? {backgroundColor: '#e9e9e9'}:
    // {backgroundColor:'black'}}>
    //     <div style={{minHeight:600}}>
    //     MyPage
    //     </div>
    // </div>
    return(
        <div>
            <div style={{
                minHeight:600, 
                backgroundColor:(theme==="light")? "#e9e9e9" :"black"
            }}>
                Mypage
            </div>
        </div>
    )
}
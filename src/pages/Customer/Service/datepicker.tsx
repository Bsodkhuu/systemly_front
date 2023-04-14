import React from "react";
import { Calendar } from "./calendar";
export const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-container">
                
            </div>
            <Calendar/>
        </div>
    );
}
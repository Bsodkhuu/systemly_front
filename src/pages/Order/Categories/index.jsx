

import React from "react"; 
const Categories = () => {
    const data = [
        {
            cateImg: "", 
            cateName: "Engine", 
            subCatName: "Gasket timing case"
        },
        {
            cateImg: "", 
            cateName: "Engine", 
            subCatName: "Gasket timing case"
        }, 
    ];

    return(
        <div className="category"> 
        {data.map((value, index) => {
            return(
                <div className="box f_flex" key={index}>
                    <img src={value.cateImg} alt=''/>
                    <span>{value.cateName}</span>
                    &nbsp;
                    {/* <span>{value.subCatName}</span> */}
                    </div>
            );
        })}
        </div>
    );
}

export default Categories;
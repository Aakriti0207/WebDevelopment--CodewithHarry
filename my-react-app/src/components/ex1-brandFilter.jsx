import React from "react";
import { useState } from "react";

const AllBrands = [
    { id: "1", brandName: "puma"},
    { id: "2", brandName: "adiddas"},
    { id: "3", brandName: "nike"},
    { id: "4", brandName: "fila"},
    { id: "5", brandName: "reebok"}
];

// We need to render the entire AllBrands array and then place a search bar, if that search bar matches any brandName return that info instead of entire catalogue

function BrandNames() {
    const [brand, setBrand] = useState("");

    const filteredBrands = AllBrands.filter((item) =>
    item.brandName.toLowerCase().includes(brand.toLowerCase()) ||
    item.id.includes(brand)
    );

    return(
        <>
        <h2>Exercise-1</h2>
        <input
            placeholder="Search a brand name/id"
            type="text"
            onChange={(e) => setBrand(e.target.value)}
        />
        {filteredBrands.map((item) => (
            <li key={item.id}>
                {item.id} - {item.brandName}
            </li>
        ))}
        </>
    );
}
export default BrandNames;
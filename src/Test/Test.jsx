import React, { useState } from 'react';

const Test = () => {

    const [allData, setAlldata] = useState([]);
    const [serial, setserial] = useState(1);

        function AddData(){

            setserial( serial + 1);

            let data = 
                {
                    image_big: "image1",
                    image_small: "small",
                    imageText: "this is text",
                }


            let newArray = [
                {
                    data: data
                }
            ];

            let newStateArray = [...allData , newArray];
            setAlldata(newStateArray);

            console.log(allData);

        }
        



    return (
        <div>
            <button onClick={()=> AddData()}> add data button </button>
        </div>
    );
};

export default Test;
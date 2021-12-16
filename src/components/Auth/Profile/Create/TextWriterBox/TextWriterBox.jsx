import React from 'react';
import { AppendElement } from '../../../../BuildingElement/BuildingUtility';
import { InlineIcon } from "@iconify/react";
import './textWriter.css'


const TextWriterBox = ({ setIsTextBar }) => {
    const appender = new AppendElement();

    const textAppender = () => {
        appender.appendingText();
    };
    return (
        <>
            <div className={`text_writer_box`} id="text-writer__box">
                <textarea placeholder="Enter Your Text Here..." className="form-control box__input" cols="30" rows="2"></textarea>

                <span onClick={()=> textAppender()} id="cancel-icon-first">
                    <InlineIcon icon="icon-park:correct" />
                </span>

                <span onClick={()=> setIsTextBar(false)} className="cancel-icon">
                    <InlineIcon icon="la:times" />
                </span>
            </div>
        </>
    );
};

export default TextWriterBox;
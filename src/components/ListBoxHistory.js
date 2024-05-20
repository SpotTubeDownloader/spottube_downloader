import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from "primereact/rating";

import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
export default function ListBoxHistory({history}) {
    console.log(history);
    const [selectedHistory, setSelectedHistory] = useState(null);


    const songsTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 black">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${data.song.thumbnail}`}/>
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.song.title}</div>
                                <div className="text-700"><a href={data.song.link} target="blank">Open on YouTube</a></div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.sub} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.sub}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">${data.song.link}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.song.name === 'MILLE'}></Button>
                            <Tag value={data.song.name} ></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mamt">
            <DataScroller value={history} itemTemplate={songsTemplate} rows={10} inline scrollHeight="500px"/>
        </div>
    )


    // return (
    //     <div className="card flex justify-content-center">  
    //         <ListBox filter value={selectedHistory} onChange={(e) => setSelectedHistory(e.value)} options={history} optionLabel="userSub" className="w-full md:w-14rem" />
    //     </div>
    // )
}
        
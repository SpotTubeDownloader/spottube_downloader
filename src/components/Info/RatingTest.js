import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import { getRatingByUserSub, updateRatingByUserSub } from "../../service/RatingService.js";
import { useAuth0 } from "@auth0/auth0-react";
import '../../css/info.css';


export default function RatingTest({ token }) {
    const [value, setValue] = useState(null);
    const { user } = useAuth0();


    useEffect(() => {
        console.log("RatingTest");
        getRatingByUserSub(token, user.sub).then((data) => {
            setValue(data.rating);
        });
    },[]);

    const updateRating = async (value) => {
        console.log("updateRating");
        await updateRatingByUserSub(token, user.sub, value);
        setValue(value);
    }

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => updateRating(e.value)} cancel={false} />
        </div>
    );
}
        
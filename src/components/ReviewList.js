import React, { useContext, useState } from "react";
import ReviewContext from "./ReviewContext";
import StarContext from "./StarContext";
import { newArray } from "./lib";
import Star from "./star";

export default function ReviewList() {
    const [selectedReviews, setSelectedReviews] = useContext(ReviewContext);
    const [selectedStars2, setSelectedStars2] = useContext(StarContext);
    const totalStars = 10;
    var newArray1 = selectedReviews.map((e, i) => [e, selectedStars2[i]]);
    return (
        <>
            <hr></hr>
            <div class="reviewContainer">
                <div>
                    {newArray1.map((review, index) => (
                        <div key={index}>
                            <span>{review[0]}</span><br></br>
                            {newArray(totalStars).map((n, i) => (
                                <Star
                                    key={i}
                                    selected={review[1] > i}
                                />
                            ))}
                            <hr></hr>
                        </div>
                    ))}
                </div>
                <hr></hr>
            </div>
        </>
    );
}

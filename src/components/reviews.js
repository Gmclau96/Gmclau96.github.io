import React, { useState } from "react";
import ReviewContext from "./ReviewContext";
import ReviewList from "./ReviewList"
import StarContext from "./StarContext";
import Star from "./star";
import { newArray } from "./lib";

export default function Reviewing() {
    const [reviewField, setReviewField] = useState("");
    const [selectedReviews, setSelectedReviews] = useState([]);
    const [selectedStars, setSelectedStars] = useState([5]);
    const [selectedStars2, setSelectedStars2] = useState([]);
    const totalStars = 10;
    //sets review list
    const reviewing = (e, selectedReview, selectedStars) => {
        if (selectedReview == "") {
            alert("Review cannot be blank")
        } else {
            let reviewState = [...selectedReviews, selectedReview];
            setSelectedReviews(reviewState);
            document.getElementById('reviewText').value = "";
            let starState = [...selectedStars2, selectedStars];
            setSelectedStars2(starState);
        }
    };
    return (
        <>
            <input
                type="text"
                placeholder="Enter Review"
                onChange={(e) => setReviewField(e.target.value)}
                id="reviewText"
            />
            <div>
                {newArray(totalStars).map((n, i) => (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStars(i + 1)}
                    />
                ))}
                <p>
                    {" "}
                    {selectedStars} of {totalStars} stars{" "}
                </p>
            </div>
            <button type="button" class="btn btn-primary" onClick={(e) => reviewing(e, reviewField, selectedStars)}>Add review</button>
            <div>
                <StarContext.Provider value={[selectedStars2, setSelectedStars2]}>
                    <ReviewContext.Provider value={[selectedReviews, setSelectedReviews]}>
                        <ReviewList />
                    </ReviewContext.Provider>
                </StarContext.Provider>
            </div>
        </>
    );
}
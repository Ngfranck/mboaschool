import React, { useState } from 'react';

function RatingComponent() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Noter le tuteur</h2>
      <div className="flex justify-center items-center space-x-2 mb-4">
        <input type="radio" id="rating1" name="rating" value="1" onChange={handleRatingChange} />
        <label htmlFor="rating1">1</label>
        <input type="radio" id="rating2" name="rating" value="2" onChange={handleRatingChange} />
        <label htmlFor="rating2">2</label>
        <input type="radio" id="rating3" name="rating" value="3" onChange={handleRatingChange} />
        <label htmlFor="rating3">3</label>
        <input type="radio" id="rating4" name="rating" value="4" onChange={handleRatingChange} />
        <label htmlFor="rating4">4</label>
        <input type="radio" id="rating5" name="rating" value="5" onChange={handleRatingChange} />
        <label htmlFor="rating5">5</label>
      </div>
      {rating > 0 && (
        <p className="text-lg font-bold text-center">
          Vous avez noté ce tuteur {rating} étoile{rating > 1 ? 's' : ''}.
        </p>
      )}
    </div>
  );
}

export default RatingComponent;

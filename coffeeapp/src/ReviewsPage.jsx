import React, { useState } from "react";

const initialReviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    comment: "Best coffee I've ever had! Smooth and rich flavor.",
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    comment: "Great ambiance and amazing cappuccino.",
  },
  {
    id: 3,
    name: "Rohit Gupta",
    rating: 5,
    comment: "Loved the cold brew! Will definitely come back.",
  },
  {
    id: 4,
    name: "Neha Singh",
    rating: 3,
    comment: "Good coffee but service can be improved.",
  },
];

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex gap-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating && setRating(star)}
          className={`text-xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md rounded-2xl p-6 hover:scale-[1.03] hover:shadow-xl transition duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
        <span className="text-sm text-gray-400">☕</span>
      </div>

      <div className="my-2">
        <StarRating rating={review.rating} />
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment || rating === 0) return;

    const newReview = {
      id: Date.now(),
      name,
      comment,
      rating,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          ☕ Coffee Lovers Reviews
        </h1>
        <p className="text-center text-gray-500 mb-10">
          See what our customers say & share your experience
        </p>

        {/* Add Review Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 mb-10 grid gap-4"
        >
          <h2 className="text-xl font-semibold text-gray-700">Write a Review</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            placeholder="Your Experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <div className="flex items-center justify-between">
            <StarRating rating={rating} setRating={setRating} />

            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

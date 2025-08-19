"use client";

import { useEffect, useState } from "react";

const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setRandomJokes(data);
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        
        {/* Header with emoji */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          😂 Random Joke Generator 🤣
        </h1>

        {/* Joke Setup */}
        <p className="text-lg text-gray-700 mb-6">{randomJokes.setup}</p>

        {/* Buttons + Punchline */}
        {showJokes ? (
          <button
            onClick={() => setShowJokes(false)}
            className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium shadow-md hover:bg-indigo-600 transition-all"
          >
            Reveal 🎭
          </button>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-600">
              {randomJokes.punchline} 😆
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowJokes(true)}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium shadow-sm hover:bg-gray-300 transition-all"
              >
                Hide 🙈
              </button>
              <button
                onClick={() => fetchRandomJokes()}
                className="px-5 py-2 rounded-lg bg-pink-500 text-white font-medium shadow-md hover:bg-pink-600 transition-all"
              >
                Next ➡️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomJokes;

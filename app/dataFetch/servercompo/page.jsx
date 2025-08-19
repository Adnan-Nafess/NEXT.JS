import "../../globals.css";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;

  if (!userName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add <code>?name=yourname</code> to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const data = await res.json();

  const confidentPercentage = (data.probability * 100).toFixed(2);

  // 🎨 Dynamic styles
  const genderColor =
    data.gender === "male"
      ? "text-blue-600"
      : data.gender === "female"
      ? "text-pink-600"
      : "text-gray-600";

  const barColor =
    data.gender === "male"
      ? "bg-blue-500"
      : data.gender === "female"
      ? "bg-pink-500"
      : "bg-gray-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Gender Prediction
        </h1>
        <div className="space-y-4">
          {/* Name */}
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Name:</span>{" "}
            <span className="text-indigo-600">
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </span>
          </p>

          {/* Gender */}
          <p className="text-lg">
            <span className="font-semibold text-gray-700">
              Predicted Gender:
            </span>{" "}
            <span className={`capitalize ${genderColor}`}>
              {data.gender || "Unknown"}
            </span>
          </p>

          {/* Confidence with bar */}
          <div>
            <p className="text-lg mb-1">
              <span className="font-semibold text-gray-700">Confidence:</span>{" "}
              <span className="text-gray-800">{confidentPercentage}%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`${barColor} h-3 transition-all`}
                style={{ width: `${confidentPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 italic">
            Based on statistical prediction from the name.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataFetchServer;

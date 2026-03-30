import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    job: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", user)
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user, "NIMA GAPLAR");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">
              Foydalanuvchi qo'shish
            </h1>
            <p className="text-indigo-200 text-sm mt-1">
              Ma'lumotlarni to'ldiring
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ism
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                name="name"
                type="text"
                id="name"
                placeholder="Masalan: Alisher Valiyev"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Yosh
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                name="age"
                type="number"
                id="age"
                placeholder="Masalan: 25"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Job */}
            <div>
              <label
                htmlFor="job"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Lavozimi
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                name="job"
                type="text"
                id="job"
                placeholder="Masalan: Frontend Dasturchi"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Izoh
              </label>
              <textarea
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                name="comments"
                id="comments"
                rows="4"
                placeholder="Fikringizni yozing..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md cursor-pointer"
              >
                Saqlash
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Tozalash
              </button>
            </div>

            {/* Qaytish button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Orqaga qaytish
              </button>
            </div>
          </form>
        </div>

        {/* Info text */}
        <p className="text-center text-gray-500 text-xs mt-4">
          Barcha maydonlarni to'ldiring
        </p>
      </div>
    </div>
  );
};

export default Create;

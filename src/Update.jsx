import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [updateUser, setUpdateUser] = useState({
    name: "",
    age: "",
    job: "",
    comments: "",
  });

  console.log(id, "Salom Kamoliddin");

  const updateUserBtn = () => {
    axios
      .get(`http://localhost:3000/users/` + id)
      .then((respons) => setUpdateUser(respons?.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateUserBtn();
  }, []);

  console.log(updateUser, "updateUser updateUser updateUser");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Asosiy Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-white">
                Foydalanuvchini tahrirlash
              </h1>
            </div>
            <p className="text-indigo-200 text-sm mt-1 ml-10">
              Ma'lumotlarni o'zgartiring
            </p>
          </div>

          {/* Form */}
          <form className="px-6 py-6 space-y-5">
            {/* Ism */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  To'liq ism
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={updateUser.name}
                placeholder="Masalan: Alisher Valiyev"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Yosh */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Yosh
                </span>
              </label>
              <input
                type="number"
                name="age"
                value={updateUser.age}
                placeholder="Masalan: 25"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Lavozim */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Lavozimi
                </span>
              </label>
              <input
                type="text"
                name="job"
                value={updateUser.job}
                placeholder="Masalan: Frontend Dasturchi"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Izoh */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Izoh
                </span>
              </label>
              <textarea
                name="comments"
                value={updateUser.comments}
                rows="4"
                placeholder="Fikringizni yozing..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Tugmalar */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md cursor-pointer flex items-center justify-center gap-2"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Ha O'zgartirmoqchiman
              </button>

              <button
                type="button"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Yo'q
              </button>
            </div>
          </form>

          {/* Pastki qism */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
            <p className="text-center text-gray-500 text-xs">
              Barcha maydonlarni to'ldiring
            </p>
          </div>
        </div>

        {/* Orqaga qaytish linki */}
        <div className="mt-6 text-center">
          <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center gap-1 mx-auto transition-colors">
            <svg
              className="w-4 h-4"
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
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const createBtn = () => {
    navigate("/create");
  };

  const deleteBtn = (deleteId) => {
    navigate(`/delete/${deleteId}`);
  };

  const updateBtn = (updateId) => {
    navigate(`/update/${updateId}`);
  };

  const getData = () => {
    axios
      .get(`http://localhost:3000/users`)
      .then((respons) => setUsers(respons?.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Foydalanuvchilar Boshqaruvi
          </h1>
          <p className="text-gray-500">CRUD operatsiyalari bilan ishlash</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">
              Yangi foydalanuvchi qo'shish
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ism
                </label>
                <input
                  type="text"
                  placeholder="Ismni kiriting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Yosh
                </label>
                <input
                  type="number"
                  placeholder="Yoshni kiriting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Lavozimi
                </label>
                <input
                  type="text"
                  placeholder="Lavozimi kiriting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Izoh
                </label>
                <input
                  type="text"
                  placeholder="Izoh kiriting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={createBtn}
                className="bg-gradient-to-r cursor-pointer from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all shadow-md"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                    Ism
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                    Yosh
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                    Lavozimi
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                    Izoh
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-white">
                    Amallar
                  </th>
                </tr>
              </thead>

              {users.length > 0 ? (
                users.map((v, i) => {
                  return (
                    <tbody key={v.id} className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {v.id}
                        </td>

                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {v.name}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-600">
                          {v.age}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-600">
                          {v.job}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
                          {v.comments}
                        </td>

                        <td className="px-4 py-3 text-center">
                          <div className="flex gap-2 justify-center">
                            {/* Update button */}
                            <button
                              onClick={() => updateBtn(v.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
                              title="Tahrirlash"
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
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>

                            {/* Delete button */}
                            <button
                              onClick={() => deleteBtn(v.id)}
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
                              title="O'chirish"
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
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ) : (
                <div>Malumotlar yo'q ekanku</div>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

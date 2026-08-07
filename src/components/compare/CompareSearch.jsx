import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

function CompareSearch({ onCompare }) {
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userOne.trim() || !userTwo.trim()) {
      return;
    }

    onCompare(userOne.trim(), userTwo.trim());

    setUserOne("");
    setUserTwo("");
  };

  return (
    <section className="mt-12 bg-slate-800 border border-slate-700 rounded-2xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <FaExchangeAlt className="text-blue-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          Compare Two GitHub Users
        </h2>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-5"
      >
        <input
          type="text"
          placeholder="First username"
          value={userOne}
          onChange={(e) =>
            setUserOne(e.target.value)
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Second username"
          value={userTwo}
          onChange={(e) =>
            setUserTwo(e.target.value)
          }
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition"
        >
          Compare
        </button>
      </form>

    </section>
  );
}

export default CompareSearch;
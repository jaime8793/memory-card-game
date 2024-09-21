import { useEffect, useState } from "react";

function FetchCharacters() {
  const [characters, setCharacters] = useState([]);
  const url =
    "https://last-airbender-api.fly.dev/api/v1/characters/random?count=12";

  useEffect(() => {
    // Wrap the fetch call inside a function
    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCharacters(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters(); // Call the fetch function when component mounts
  }, []); // Empty dependency array, so it runs once on mount

  return (
    <div className=" w-full border border-indigo-600">
      {characters.length > 0 ? (
        <div className=" flex">
          {characters.map((character) => (
            <>
              <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    key={character.__id}
                    className="rounded-t-lg"
                    src={character.photoUrl}
                    alt={character.name}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {character.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {character.affiliation}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
}

export default FetchCharacters;

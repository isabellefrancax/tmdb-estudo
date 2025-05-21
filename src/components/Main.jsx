import { useQuery } from "@tanstack/react-query";
import Card from "./Card"
import { useState } from "react";
import { useNavigate } from "react-router";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Main() {

  const navigate = useNavigate()

  // search
  const [search, setSearch] = useState('')

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`).then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  // search
  const filteredMovies = data.results.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

  function handleGamePage(id) {
    navigate(`/movie/${id}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 flex-col">

      <div className="mt-6">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="py-2 px-6 w-full border border-gray-400 rounded bg-transparent text-white shadow-md" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {filteredMovies.map((title) => (
          <Card key={title.id} title={title.title} poster={title.poster_path} onClick={() => handleGamePage(title.id)} />
        ))}
      </div>
    </div>
  )
}
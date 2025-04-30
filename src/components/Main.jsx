import { useQuery } from "@tanstack/react-query";
import Card from "./Card"

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Main() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`).then((res) =>
            res.json(),
          ),
      })

      if (isPending) return 'Loading...'

      if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {data.results.map((title) => (
                    <Card key={title.id} title={title.title} poster={title.poster_path} />
                ))}
            </div>
        </div>
    )
}
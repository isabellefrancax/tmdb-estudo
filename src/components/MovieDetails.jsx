import { IconCalendarWeek, IconStar } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function MovieDetails() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-white p-6">
      <div className="flex flex-col space-y-6 items-center justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-72 rounded"
        />
        <h1 className="text-center text-3xl">{data.title}</h1>
        <p className="md:w-1/2 text-center">{data.overview}</p>
        <p className="flex flex-row gap-3 items-center"><span><IconCalendarWeek /></span>{data.release_date}</p>
        <p className="flex flex-row gap-3 items-center"><span><IconStar /></span>{data.vote_average}</p>
      </div>
    </div>
  );
}

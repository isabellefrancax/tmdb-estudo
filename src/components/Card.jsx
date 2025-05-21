export default function Card({ title, poster, onClick }) {
  return (
    <div onClick={onClick} className="w-60 bg-slate-600 shadow-md rounded overflow-hidden p-3 cursor-pointer">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <div>
        <h1 className="font-semibold text-center mt-3">{title}</h1>
      </div>
    </div>
  );
}

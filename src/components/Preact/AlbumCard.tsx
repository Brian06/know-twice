import type { TDiscography } from "../../types/discography";

interface AlbumCardProps {
  album: TDiscography;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="hover:outline-magenta group max-w-60 overflow-hidden rounded-2xl bg-white drop-shadow-md hover:cursor-pointer hover:outline-2">
      <div className="relative w-full overflow-hidden">
        <img
          src={album.image.src}
          alt={album.name}
          width={300}
          height={300}
          loading="lazy"
          className="aspect-auto h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-3">
        <h2 className="group-hover:text-magenta text-lg font-bold transition-all duration-500">
          {album.name}
        </h2>
        <p className="text-gray-500">{album.releaseDate.getFullYear()}</p>
      </div>
    </div>
  );
}

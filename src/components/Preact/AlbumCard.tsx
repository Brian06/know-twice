import type { TDiscography } from "../../types/discography";

interface AlbumCardProps {
  album: TDiscography;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="hover:outline-magenta group w-44 overflow-hidden rounded-2xl bg-white drop-shadow-md hover:cursor-pointer hover:outline-2 md:w-60">
      <div className="relative h-44 w-full overflow-hidden md:h-60">
        <img
          src={album.image.src}
          alt={album.name}
          width={300}
          height={300}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-3">
        <h2 className="group-hover:text-magenta truncate text-base font-bold transition-all duration-500">
          {album.name}
        </h2>
        <p className="text-sm text-gray-500">{album.releaseDate.getFullYear()}</p>
      </div>
    </div>
  );
}

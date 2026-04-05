import type { TDiscography } from '../../types/discography'

interface AlbumCardProps {
  album: TDiscography
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="group shadow-card hover:shadow-card-hover w-44 overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:scale-[1.02] md:w-60">
      <div className="relative h-44 w-full overflow-hidden md:h-60">
        <img
          src={album.image.src}
          alt={album.name}
          width={300}
          height={300}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="p-3">
        <h2 className="truncate text-base font-medium text-charcoal transition-colors duration-300 group-hover:text-magenta">
          {album.name}
        </h2>
        <p className="text-sm text-charcoal/50">{album.releaseDate.getFullYear()}</p>
      </div>
    </div>
  )
}

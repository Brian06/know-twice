import { useState, useMemo } from 'preact/hooks';
import type { TDiscography } from '../types/discography';
import Dropdown from './Dropdown';
import type { Option } from './Dropdown';

// TODO REMOVE THIS AND REVIEW THIS COMPONENT
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/discography/*.webp', { eager: true });

// Create a mapping of album names to image sources
const imageMap = new Map<string, string>();
for (const path in images) {
  const fileName = path.split('/').pop()?.replace('.webp', '') || '';
  const imageData = images[path].default;
  imageMap.set(fileName, imageData.src);
}

interface DiscographyFiltersProps {
  albums: TDiscography[];
  typeOptions: Option[];
  marketOptions: Option[];
  artistOptions: Option[];
  sortOptions: Option[];
}

export default function DiscographyFilters({
  albums,
  typeOptions,
  marketOptions,
  artistOptions,
  sortOptions,
}: DiscographyFiltersProps) {
  const [typeFilter, setTypeFilter] = useState('all');
  const [marketFilter, setMarketFilter] = useState('all');
  const [artistFilter, setArtistFilter] = useState('twice');
  const [sortFilter, setSortFilter] = useState('latest');

  // Filter and sort albums based on current filter state
  const filteredAndSortedAlbums = useMemo(() => {
    let filtered = albums.filter((album) => {
      // Type filter
      if (typeFilter !== 'all' && !album.types.includes(typeFilter as any)) {
        return false;
      }

      // Market filter
      if (marketFilter !== 'all' && album.market !== marketFilter) {
        return false;
      }

      // Artist filter
      if (artistFilter === 'twice') {
        // Show only group releases (not sub-units or solos)
        if (!album.unit.includes('twice')) {
          return false;
        }
      } else if (artistFilter === 'misamo') {
        if (!album.unit.includes('misamo')) {
          return false;
        }
      } else {
        // Solo artist - check if the artist is in the unit array
        if (!album.unit.includes(artistFilter as any)) {
          return false;
        }
      }

      return true;
    });

    // Sort albums
    const sorted = [...filtered].sort((a, b) => {
      switch (sortFilter) {
        case 'latest':
          return b.releaseDate.getTime() - a.releaseDate.getTime();
        case 'oldest':
          return a.releaseDate.getTime() - b.releaseDate.getTime();
        case 'a-z':
          return a.name.localeCompare(b.name);
        case 'z-a':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [albums, typeFilter, marketFilter, artistFilter, sortFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Dropdown
          id="type-filter"
          options={typeOptions}
          defaultValue="all"
          className="w-full"
          onChange={setTypeFilter}
        />
        
        <Dropdown
          id="market-filter"
          options={marketOptions}
          defaultValue="all"
          className="w-full"
          onChange={setMarketFilter}
        />
        
        <Dropdown
          id="artist-filter"
          options={artistOptions}
          defaultValue="twice"
          className="w-full"
          onChange={setArtistFilter}
        />

        <Dropdown
          id="sort-filter"
          options={sortOptions}
          defaultValue="latest"
          className="w-full"
          onChange={setSortFilter}
        />
      </div>

      {/* Albums Grid */}
      <div className="flex flex-wrap gap-4">
        {filteredAndSortedAlbums.length === 0 ? (
          <p className="text-gray-500 text-center w-full py-8">No albums found with the selected filters.</p>
        ) : (
          filteredAndSortedAlbums.map((album) => (
            <AlbumCard key={`${album.name}-${album.releaseDate.getTime()}`} album={album} />
          ))
        )}
      </div>
    </div>
  );
}

// AlbumCard component in Preact
interface AlbumCardProps {
  album: TDiscography;
}

function AlbumCard({ album }: AlbumCardProps) {
  // Get the image source from the album data or construct the filename
  const getImageSrc = () => {
    if (album.image?.src) {
      return album.image.src;
    }
    
    // Construct filename from album name
    const fileName = album.name.replace(/\s+/g, '-').replace(/:/g, '').replace(/'/g, '');
    
    // Look up in the image map
    const src = imageMap.get(fileName) || imageMap.get('default');
    return src || '';
  };

  const imageSrc = getImageSrc();

  return (
    <div className="rounded-2xl bg-white drop-shadow-md max-w-60 overflow-hidden hover:outline-2 hover:outline-magenta hover:cursor-pointer group">
      <div className="relative w-full overflow-hidden">
        <img 
          src={imageSrc}
          alt={album.name}
          width={300}
          height={300}
          className="w-full h-full object-cover aspect-auto transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-3">    
        <h2 className="text-lg font-bold transition-all duration-500 group-hover:text-magenta">{album.name}</h2>
        <p className="text-gray-500">{album.releaseDate.getFullYear()}</p>
      </div>
    </div>
  );
}


import { useState, useMemo } from "preact/hooks";
import Dropdown from "./Dropdown";
import AlbumCard from "./AlbumCard";
import { DISCOGRAPHY } from "../../const/discography";
import type { Option } from "./Dropdown";
import type { TType, TMarket, TUnit } from "../../types/discography";

const typeOptions: Option[] = [
  { value: "all", label: "All Types" },
  { value: "mini-album", label: "Mini Album" },
  { value: "full-album", label: "Full Album" },
  { value: "single", label: "Single" },
  { value: "repackage", label: "Repackage" },
  { value: "digital", label: "Digital" },
  { value: "ost", label: "OST" },
];

const marketOptions: Option[] = [
  { value: "all", label: "All Markets" },
  { value: "korean", label: "Korean" },
  { value: "japanese", label: "Japanese" },
  { value: "english", label: "English" },
];

const artistOptions: Option[] = [
  { value: "all", label: "All Artists" },
  { value: "twice", label: "TWICE" },
  { value: "misamo", label: "MISAMO" },
  { value: "nayeon", label: "Nayeon" },
  { value: "jeongyeon", label: "Jeongyeon" },
  { value: "momo", label: "Momo" },
  { value: "sana", label: "Sana" },
  { value: "jihyo", label: "Jihyo" },
  { value: "mina", label: "Mina" },
  { value: "dahyun", label: "Dahyun" },
  { value: "chaeyoung", label: "Chaeyoung" },
  { value: "tzuyu", label: "Tzuyu" },
];

const sortOptions: Option[] = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];

export default function DiscographyFilters() {
  const albums = DISCOGRAPHY;
  const [typeFilter, setTypeFilter] = useState("all");
  const [marketFilter, setMarketFilter] = useState("all");
  const [artistFilter, setArtistFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("latest");

  const filteredAndSortedAlbums = useMemo(() => {
    let filtered = albums.filter((album) => {
      if (typeFilter !== "all" && !album.types.includes(typeFilter as TType)) {
        return false;
      }

      if (
        marketFilter !== "all" &&
        album.market !== (marketFilter as TMarket)
      ) {
        return false;
      }

      if (
        artistFilter !== "all" &&
        !album.unit.includes(artistFilter as TUnit)
      ) {
        return false;
      }

      return true;
    });

    // Sort albums
    const sorted = [...filtered].sort((a, b) => {
      switch (sortFilter) {
        case "latest":
          return b.releaseDate.getTime() - a.releaseDate.getTime();
        case "oldest":
          return a.releaseDate.getTime() - b.releaseDate.getTime();
        case "a-z":
          return a.name.localeCompare(b.name);
        case "z-a":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [albums, typeFilter, marketFilter, artistFilter, sortFilter]);

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          defaultValue="all"
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

      <div className="flex flex-wrap gap-4">
        {filteredAndSortedAlbums.length === 0 ? (
          <p className="w-full py-8 text-center text-gray-500">
            No albums found with the selected filters.
          </p>
        ) : (
          filteredAndSortedAlbums.map((album) => (
            <AlbumCard
              key={`${album.name}-${album.releaseDate.getTime()}`}
              album={album}
            />
          ))
        )}
      </div>
    </div>
  );
}

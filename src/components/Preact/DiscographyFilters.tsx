import { useState, useMemo, useEffect } from 'preact/hooks'
import Dropdown from './Dropdown'
import AlbumCard from './AlbumCard'
import { DISCOGRAPHY } from '../../const/discography'
import { Unit } from '../../const/members'
import type { Option } from './Dropdown'
import type { TType, TMarket, TUnit } from '../../types/discography'

const STORAGE_KEY = 'discography-filters'

const DEFAULT_FILTERS = {
  type: 'all',
  market: 'all',
  artist: 'all',
  sort: 'latest',
} as const

const getInitialFilters = () => {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : DEFAULT_FILTERS
  } catch {
    return DEFAULT_FILTERS
  }
}

const typeOptions: Option[] = [
  { value: 'all', label: 'All Types' },
  { value: 'mini-album', label: 'Mini Album' },
  { value: 'full-album', label: 'Full Album' },
  { value: 'single', label: 'Single' },
  { value: 'repackage', label: 'Repackage' },
  { value: 'digital', label: 'Digital' },
  { value: 'ost', label: 'OST' },
]

const marketOptions: Option[] = [
  { value: 'all', label: 'All Markets' },
  { value: 'korean', label: 'Korean' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'english', label: 'English' },
]

const artistOptions: Option[] = [
  { value: 'all', label: 'All Artists' },
  { value: Unit.twice, label: 'TWICE' },
  { value: Unit.misamo, label: 'MISAMO' },
  { value: Unit.jeongyeon, label: 'Jeongyeon' },
  { value: Unit.sana, label: 'Sana' },
  { value: Unit.dahyun, label: 'Dahyun' },
  { value: Unit.nayeon, label: 'Nayeon' },
  { value: Unit.jihyo, label: 'Jihyo' },
  { value: Unit.tzuyu, label: 'Tzuyu' },
  { value: Unit.chaeyoung, label: 'Chaeyoung' },
  { value: 'other', label: 'Other / Collaborations' },
]

const SOLOIST_UNITS = [Unit.nayeon, Unit.jihyo, Unit.tzuyu, Unit.chaeyoung] as const

function isTwiceOnly(unit: TUnit[]): boolean {
  return unit.length === 1 && unit[0] === Unit.twice
}

function isMisamoOnly(unit: TUnit[]): boolean {
  return unit.includes(Unit.misamo)
}

function isSoloistOnly(unit: TUnit[]): boolean {
  return unit.length === 1 && SOLOIST_UNITS.includes(unit[0] as (typeof SOLOIST_UNITS)[number])
}

function isOtherUnit(unit: TUnit[]): boolean {
  return !isTwiceOnly(unit) && !isMisamoOnly(unit) && !isSoloistOnly(unit)
}

const sortOptions: Option[] = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'a-z', label: 'A-Z' },
  { value: 'z-a', label: 'Z-A' },
]

export default function DiscographyFilters() {
  const albums = DISCOGRAPHY
  const [initialLoaded, setInitialLoaded] = useState(false)
  const [typeFilter, setTypeFilter] = useState('all')
  const [marketFilter, setMarketFilter] = useState('all')
  const [artistFilter, setArtistFilter] = useState('all')
  const [sortFilter, setSortFilter] = useState('latest')

  useEffect(() => {
    const initial = getInitialFilters()
    setTypeFilter(initial.type)
    setMarketFilter(initial.market)
    setArtistFilter(initial.artist)
    setSortFilter(initial.sort)
    setInitialLoaded(true)
  }, [])

  useEffect(() => {
    if (!initialLoaded) return
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          type: typeFilter,
          market: marketFilter,
          artist: artistFilter,
          sort: sortFilter,
        }),
      )
    } catch {}
  }, [typeFilter, marketFilter, artistFilter, sortFilter, initialLoaded])

  const filteredAndSortedAlbums = useMemo(() => {
    let filtered = albums.filter((album) => {
      if (typeFilter !== 'all' && !album.types.includes(typeFilter as TType)) {
        return false
      }

      if (marketFilter !== 'all' && album.market !== (marketFilter as TMarket)) {
        return false
      }

      if (artistFilter !== 'all') {
        if (artistFilter === 'other') {
          if (!isOtherUnit(album.unit)) return false
        } else if (SOLOIST_UNITS.includes(artistFilter as (typeof SOLOIST_UNITS)[number])) {
          if (album.unit.length !== 1 || album.unit[0] !== (artistFilter as TUnit)) {
            return false
          }
        } else if (!album.unit.includes(artistFilter as TUnit)) {
          return false
        }
      }

      return true
    })

    const sorted = [...filtered].sort((a, b) => {
      switch (sortFilter) {
        case 'latest':
          return b.releaseDate.getTime() - a.releaseDate.getTime()
        case 'oldest':
          return a.releaseDate.getTime() - b.releaseDate.getTime()
        case 'a-z':
          return a.name.localeCompare(b.name)
        case 'z-a':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    return sorted
  }, [albums, typeFilter, marketFilter, artistFilter, sortFilter])

  return (
    <div>
      <div className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <Dropdown
          id="type-filter"
          options={typeOptions}
          defaultValue={typeFilter}
          className="w-full"
          onChange={setTypeFilter}
        />

        <Dropdown
          id="market-filter"
          options={marketOptions}
          defaultValue={marketFilter}
          className="w-full"
          onChange={setMarketFilter}
        />

        <Dropdown
          id="artist-filter"
          options={artistOptions}
          defaultValue={artistFilter}
          className="w-full"
          onChange={setArtistFilter}
        />

        <Dropdown
          id="sort-filter"
          options={sortOptions}
          defaultValue={sortFilter}
          className="w-full"
          onChange={setSortFilter}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {!initialLoaded ? (
          <p className="w-full py-12 text-center text-charcoal/50">Loading...</p>
        ) : filteredAndSortedAlbums.length === 0 ? (
          <p className="w-full py-12 text-center text-charcoal/50">
            No albums found with the selected filters.
          </p>
        ) : (
          filteredAndSortedAlbums.map((album) => (
            <AlbumCard key={`${album.name}-${album.releaseDate.getTime()}`} album={album} />
          ))
        )}
      </div>
    </div>
  )
}

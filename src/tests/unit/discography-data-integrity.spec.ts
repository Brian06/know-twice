import { describe, it, expect } from 'vitest'
import { DISCOGRAPHY } from '../../const/discography'
import type { TType, TMarket, TUnit } from '../../types/discography'

describe('Discography Data Integrity', () => {
  describe('Basic structure validation', () => {
    it('should contain albums', () => {
      expect(DISCOGRAPHY.length).toBeGreaterThan(0)
    })

    it('should have all albums with unique IDs', () => {
      const ids = DISCOGRAPHY.map((album) => album.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(DISCOGRAPHY.length)
    })
  })

  describe('Data validation', () => {
    DISCOGRAPHY.forEach((album) => {
      describe(`Album: ${album.name}`, () => {
        it('should have all required properties', () => {
          expect(album).toHaveProperty('id')
          expect(album).toHaveProperty('name')
          expect(album).toHaveProperty('image')
          expect(album).toHaveProperty('unit')
          expect(album).toHaveProperty('releaseDate')
          expect(album).toHaveProperty('types')
          expect(album).toHaveProperty('market')
          expect(album).toHaveProperty('songs')
        })

        it('should have valid id', () => {
          expect(typeof album.id).toBe('string')
          expect(album.id.length).toBeGreaterThan(0)
        })

        it('should have valid name', () => {
          expect(typeof album.name).toBe('string')
          expect(album.name.length).toBeGreaterThan(0)
        })

        it('should have valid unit', () => {
          expect(Array.isArray(album.unit)).toBe(true)
          expect(album.unit.length).toBeGreaterThan(0)
        })

        it('should have valid releaseDate', () => {
          expect(album.releaseDate instanceof Date).toBe(true)
          expect(album.releaseDate.getTime()).not.toBe(NaN)
        })

        it('should have valid types', () => {
          const validTypes: TType[] = [
            'mini-album',
            'full-album',
            'single',
            'repackage',
            'digital',
            'ost',
          ]
          expect(Array.isArray(album.types)).toBe(true)
          expect(album.types.length).toBeGreaterThan(0)
          album.types.forEach((type) => {
            expect(validTypes).toContain(type)
          })
        })

        it('should have valid market', () => {
          const validMarkets: TMarket[] = ['korean', 'japanese', 'english']
          expect(validMarkets).toContain(album.market)
        })

        it('should have valid songs', () => {
          expect(Array.isArray(album.songs)).toBe(true)
          expect(album.songs.length).toBeGreaterThan(0)
          album.songs.forEach((song) => {
            expect(typeof song.title).toBe('string')
            expect(song.title.length).toBeGreaterThan(0)
            if (song.link) {
              expect(song.link).toMatch(/^https?:\/\//)
            }
          })
        })

        it('should have valid image', () => {
          expect(album.image).toHaveProperty('src')
          expect(album.image).toHaveProperty('width')
          expect(album.image).toHaveProperty('height')
        })
      })
    })
  })

  describe('Group consistency', () => {
    it('should have albums from different markets', () => {
      const markets = new Set(DISCOGRAPHY.map((album) => album.market))
      expect(markets.has('korean')).toBe(true)
      expect(markets.has('japanese')).toBe(true)
      expect(markets.has('english')).toBe(true)
    })

    it('should have albums from different types', () => {
      const types = new Set(DISCOGRAPHY.flatMap((album) => album.types))
      expect(types.has('mini-album')).toBe(true)
      expect(types.has('full-album')).toBe(true)
      expect(types.has('single')).toBe(true)
    })

    it('should have TWICE as main unit', () => {
      const twiceAlbums = DISCOGRAPHY.filter((album) => album.unit.includes('twice'))
      expect(twiceAlbums.length).toBeGreaterThan(0)
    })
  })
})

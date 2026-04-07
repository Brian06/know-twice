import { test, expect } from '@playwright/test'

const ALBUM_IDS = ['the-story-begins', 'im-nayeon', 'formula-of-love', 'between1and2']

test.describe('Discography Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/discography')
  })

  test('should load the discography page with title', async ({ page }) => {
    await expect(page).toHaveTitle(/TWICE Complete Discography/)
    await expect(page).toHaveURL('/discography')
  })

  test('should display filter dropdowns', async ({ page }) => {
    await expect(page.getByTestId('type-filter')).toBeVisible()
    await expect(page.getByTestId('market-filter')).toBeVisible()
    await expect(page.getByTestId('artist-filter')).toBeVisible()
    await expect(page.getByTestId('sort-filter')).toBeVisible()
  })

  test('should display album cards', async ({ page }) => {
    const albumLinks = page.locator('a[href^="/discography/"]')
    await expect(albumLinks.first()).toBeVisible()
  })

  test('should filter albums by type', async ({ page }) => {
    await page.getByTestId('type-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'Mini Album' }).click()

    const albumCards = page.locator('a[href^="/discography/"]')
    await expect(albumCards.first()).toBeVisible()
  })

  test('should filter albums by market', async ({ page }) => {
    await page.getByTestId('market-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'Korean' }).click()

    const albumCards = page.locator('a[href^="/discography/"]')
    await expect(albumCards.first()).toBeVisible()
  })

  test('should sort albums by latest', async ({ page }) => {
    await page.getByTestId('sort-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'Latest' }).click()

    const albumCards = page.locator('a[href^="/discography/"]')
    await expect(albumCards.first()).toBeVisible()
  })

  test('should filter albums by artist (TWICE)', async ({ page }) => {
    await page.getByTestId('artist-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'TWICE' }).click()

    const albumCards = page.locator('a[href^="/discography/"]')
    await expect(albumCards.first()).toBeVisible()
  })

  test('should show empty state when no albums match filters', async ({ page }) => {
    await page.getByTestId('type-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'Repackage' }).click()

    await page.getByTestId('market-filter').getByRole('button').click()
    await page.getByRole('option', { name: 'English' }).click()

    await expect(page.getByText('No albums found with the selected filters.')).toBeVisible()
  })

  test('should navigate to album detail page when clicking an album', async ({ page }) => {
    const firstAlbum = page.locator('a[href^="/discography/"]').first()
    const href = await firstAlbum.getAttribute('href')
    await firstAlbum.click()
    await expect(page).toHaveURL(new RegExp(href!))
  })
})

test.describe('Discography Detail Page Tests', () => {
  ALBUM_IDS.forEach((albumId) => {
    test.describe(`${albumId} detail page`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/discography/${albumId}`)
      })

      test('should load with correct URL', async ({ page }) => {
        await expect(page).toHaveURL(`/discography/${albumId}`)
      })

      test('should display album name in heading', async ({ page }) => {
        const heading = page.getByRole('heading', { level: 1 })
        await expect(heading).toBeVisible()
        await expect(heading).not.toBeEmpty()
      })

      test('should display album image', async ({ page }) => {
        const albumImage = page.locator('img[alt]').first()
        await expect(albumImage).toBeVisible()
      })

      test('should display album type and market badges', async ({ page }) => {
        const typeBadge = page
          .getByText(/Mini Album|Full Album|Single|Repackage|Digital|OST/)
          .first()
        await expect(typeBadge).toBeVisible()

        const marketBadge = page.getByText(/Korean|Japanese|English/).first()
        await expect(marketBadge).toBeVisible()
      })

      test('should display release date', async ({ page }) => {
        await expect(page.getByText(/Released:/)).toBeVisible()
      })

      test('should display tracklist', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Tracklist' })).toBeVisible()
      })

      test('should display listen now section with music platform links', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Listen Now' })).toBeVisible()
        await expect(page.getByText('Spotify')).toBeVisible()
        await expect(page.getByText('Apple Music')).toBeVisible()
        await expect(page.getByText('YouTube Music')).toBeVisible()
      })

      test('should have working music platform links', async ({ page }) => {
        const spotifyLink = page.getByRole('link', { name: /Spotify/ })
        await expect(spotifyLink).toHaveAttribute('href', /spotify\.com/)

        const appleMusicLink = page.getByRole('link', { name: /Apple Music/ })
        await expect(appleMusicLink).toHaveAttribute('href', /music\.apple\.com/)

        const youtubeMusicLink = page.getByRole('link', { name: /YouTube Music/ })
        await expect(youtubeMusicLink).toHaveAttribute('href', /music\.youtube\.com/)
      })
    })
  })

  test.describe('Discography detail page navigation', () => {
    test('should handle invalid album IDs with 404 redirect', async ({ page }) => {
      await page.goto('/discography/invalid-album')
      const heading = page.getByRole('heading', {
        name: '404 - Page Not Found',
      })
      await expect(heading).toBeVisible()
    })

    test('should be able to navigate between different album pages', async ({ page }) => {
      await page.goto(`/discography/${ALBUM_IDS[0]}`)
      await expect(page).toHaveURL(`/discography/${ALBUM_IDS[0]}`)

      await page.goto(`/discography/${ALBUM_IDS[1]}`)
      await expect(page).toHaveURL(`/discography/${ALBUM_IDS[1]}`)
    })
  })
})

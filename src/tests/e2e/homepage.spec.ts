import { test, expect } from '@playwright/test'

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load the homepage with hero section', async ({ page }) => {
    await expect(page).toHaveTitle(/Know TWICE/)
    await expect(page.getByRole('heading', { name: 'Know TWICE' })).toBeVisible()
    await expect(page.getByText('Your complete guide to the K-pop girl group TWICE')).toBeVisible()
    await expect(page).toHaveURL('/')
  })

  test('should display CTA buttons', async ({ page }) => {
    const membersBtn = page.getByRole('link', { name: /Meet the Members/i })
    await expect(membersBtn).toBeVisible()
    await expect(membersBtn).toHaveAttribute('href', '/members')

    const discographyBtn = page.getByRole('link', { name: /Explore Discography/i })
    await expect(discographyBtn).toBeVisible()
    await expect(discographyBtn).toHaveAttribute('href', '/discography')
  })

  test('should show the hero and comeback as the two homepage sections', async ({ page }) => {
    const sections = page.locator('main > section')
    await expect(sections).toHaveCount(2)

    const hero = sections.nth(0)
    await expect(hero.getByRole('img', { name: /Twice/i })).toBeVisible()
    await expect(hero.getByRole('heading', { name: 'Know TWICE' })).toBeVisible()

    const comeback = sections.nth(1)
    await expect(comeback.getByRole('heading', { name: 'Last Comeback' })).toBeVisible()
    await expect(comeback.locator('lite-youtube')).toBeVisible()
  })

  test('should display comeback section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Last Comeback' })).toBeVisible()
  })

  test('should play the video in the last comeback section', async ({ page }) => {
    const liteYoutube = page.locator('lite-youtube')
    const playButton = page.getByRole('button', {
      name: 'Play video eHHQaoEW30Q',
    })

    await expect(liteYoutube).toBeVisible()
    await expect(playButton).toBeVisible()
    await expect(liteYoutube).not.toHaveClass(/lyt-activated/)
    await playButton.click()
    await expect(liteYoutube).toHaveClass(/lyt-activated/, { timeout: 5000 })
    const iframe = page.locator('lite-youtube iframe')
    await expect(iframe).toBeVisible({ timeout: 5000 })
    await expect(iframe).toHaveAttribute('src', /autoplay=1/)
  })
})

test.describe('Members Page Tests', () => {
  test('should load the members grid page', async ({ page }) => {
    await page.goto('/members')
    await expect(page).toHaveTitle(/TWICE Members/)
    await expect(page.getByTestId('twice-centered-logo')).toBeVisible()
  })

  test('should display all member cards', async ({ page }) => {
    await page.goto('/members')

    const memberIds = [
      'nayeon',
      'jeongyeon',
      'momo',
      'sana',
      'jihyo',
      'mina',
      'dahyun',
      'chaeyoung',
      'tzuyu',
    ]

    for (const memberId of memberIds) {
      const memberLink = page.getByRole('link', { name: memberId })
      await expect(memberLink).toBeVisible()
      await expect(memberLink).toHaveAttribute('href', `/members/${memberId}`)
    }
  })

  test('should navigate to member detail page when member is clicked', async ({ page }) => {
    await page.goto('/members')

    const memberLink = page.getByRole('link', { name: 'nayeon' })
    await expect(memberLink).toBeVisible()

    const isNarrowViewport = await page.evaluate(
      () => window.matchMedia('(max-width: 768px)').matches,
    )
    if (isNarrowViewport) {
      await memberLink.click()
      await memberLink.click()
    } else {
      await memberLink.click()
    }

    await expect(page).toHaveURL('/members/nayeon')
  })
})

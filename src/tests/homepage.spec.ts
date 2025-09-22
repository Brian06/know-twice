import { test, expect } from "@playwright/test";
import { MEMBERS } from "../const/members";

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Know TWICE/);
  });

  test('should display all members', async ({ page }) => {
    const membersIds = MEMBERS.map(member => member.id);
  
    for (const memberId of membersIds) {
      await expect(page.getByRole('link', { name: memberId })).toBeVisible();
    }
  });

  test('should display the member full image when hovered', async ({ page }) => {
    const membersIds = MEMBERS.map(member => member.id);
    
    for (const memberId of membersIds) {
      await page.getByRole('link', { name: memberId }).hover();
      await expect(page.getByTestId('twice-centered-logo')).toBeHidden();
      await expect(page.getByTestId(`full-image-${memberId}`)).toBeVisible();
    }
  });

  test('should navigate to member detail page when clicked', async ({ page }) => {
    const membersIds = MEMBERS.map(member => member.id);
    
    for (const memberId of membersIds) {
      await page.getByRole('link', { name: memberId }).click();
      await expect(page).toHaveURL(`/members/${memberId}`);
      await page.goBack();
    }
  });

  test('should display comeback section', async ({ page }) => {
    await expect(page.getByText('Last Comeback')).toBeVisible();
  });

  test('should play the video in  the last comeback section', async ({ page }) => {
    const liteYoutube = page.locator('lite-youtube');
    const playButton = page.getByRole('button', { name: 'Play video eHHQaoEW30Q' });
    

    await expect(liteYoutube).not.toHaveClass(/lyt-activated/);
    await playButton.click();
    await expect(liteYoutube).toHaveClass(/lyt-activated/);
    const iframe = page.locator('lite-youtube iframe');
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute('src', /autoplay=1/);
  });
});

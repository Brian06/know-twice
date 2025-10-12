import { test, expect } from "@playwright/test";
import { MEMBERS } from "../const/members";

test.describe("Homepage Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the homepage", async ({ page }) => {
    await expect(page).toHaveTitle(/Know TWICE/);
    await expect(page.getByTestId("twice-centered-logo")).toBeVisible();
    await expect(page.getByTestId("comeback-heading")).toBeVisible();
    await expect(page).toHaveURL("/");
  });

  test("should display all members", async ({ page }) => {
    const membersIds = MEMBERS.map((member) => member.id);

    for (const memberId of membersIds) {
      const memberLink = page.getByRole("link", { name: memberId });
      await expect(memberLink).toBeVisible();
      await expect(memberLink).toHaveAttribute("href", `/members/${memberId}`);
    }
  });

  test("should display the member full image when hovered", async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name.includes("Mobile"),
      "Desktop tests are skipped on mobile projects",
    );

    const membersIds = MEMBERS.map((member) => member.id);

    for (const memberId of membersIds) {
      const memberLink = page.getByRole("link", { name: memberId });
      await expect(memberLink).toBeVisible();
      await memberLink.hover();
      await expect(page.getByTestId("twice-centered-logo")).toBeHidden();
      await expect(page.getByTestId(`full-image-${memberId}`)).toBeVisible();
      await page.mouse.move(0, 0);
    }
  });

  test("should navigate to member detail page when clicked", async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name.includes("Mobile"),
      "Desktop tests are skipped on mobile projects",
    );

    const membersIds = MEMBERS.map((member) => member.id);

    for (const memberId of membersIds) {
      const memberLink = page.getByRole("link", { name: memberId });
      await expect(memberLink).toBeVisible();
      await memberLink.click();
      await expect(page).toHaveURL(`/members/${memberId}`);
      await page.goBack();
      await expect(page).toHaveURL("/");
    }
  });

  test("should display comeback section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Last Comeback" }),
    ).toBeVisible();
  });

  test("should play the video in the last comeback section", async ({
    page,
  }) => {
    const liteYoutube = page.locator("lite-youtube");
    const playButton = page.getByRole("button", {
      name: "Play video eHHQaoEW30Q",
    });

    await expect(liteYoutube).toBeVisible();
    await expect(playButton).toBeVisible();
    await expect(liteYoutube).not.toHaveClass(/lyt-activated/);
    await playButton.click();
    await expect(liteYoutube).toHaveClass(/lyt-activated/, { timeout: 5000 });
    const iframe = page.locator("lite-youtube iframe");
    await expect(iframe).toBeVisible({ timeout: 5000 });
    await expect(iframe).toHaveAttribute("src", /autoplay=1/);
  });
});

test.describe("Homepage Mobile Tests", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(
      !testInfo.project.name.includes("Mobile"),
      "Desktop tests are skipped on mobile projects",
    );

    await page.goto("/");
  });

  test("should display the member full image when tapped (mobile)", async ({
    page,
  }) => {
    test.skip(
      !page.viewportSize() || page.viewportSize()!.width > 768,
      "This test is only for mobile viewports",
    );

    const membersIds = MEMBERS.map((member) => member.id);

    for (const memberId of membersIds) {
      const memberLink = page.getByRole("link", { name: memberId });
      await expect(memberLink).toBeVisible();

      await memberLink.tap();
      await expect(page.getByTestId("twice-centered-logo")).toBeHidden();
      await expect(page.getByTestId(`full-image-${memberId}`)).toBeVisible();

      await page.tap("body", { position: { x: 10, y: 10 } });
      await expect(page.getByTestId("twice-centered-logo")).toBeVisible();
    }
  });

  test("should navigate to member detail page with double tap (mobile)", async ({
    page,
  }) => {
    test.skip(
      !page.viewportSize() || page.viewportSize()!.width > 768,
      "This test is only for mobile viewports",
    );

    const membersIds = MEMBERS.map((member) => member.id);

    for (const memberId of membersIds) {
      const memberLink = page.getByRole("link", { name: memberId });
      await expect(memberLink).toBeVisible();

      await memberLink.tap();
      await expect(page.getByTestId(`full-image-${memberId}`)).toBeVisible();

      await memberLink.tap();
      await expect(page).toHaveURL(`/members/${memberId}`);

      await page.goBack();
      await expect(page).toHaveURL("/");
    }
  });
});

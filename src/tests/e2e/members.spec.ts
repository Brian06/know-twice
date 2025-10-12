import { test, expect } from "@playwright/test";
import { MEMBERS } from "../const/members";

test.describe("Members Page Tests", () => {
  MEMBERS.forEach((member) => {
    test.describe(`${member.name} page`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/members/${member.id}`);
      });

      test("should load with correct URL and title", async ({ page }) => {
        await expect(page).toHaveURL(`/members/${member.id}`);
        await expect(page).toHaveTitle(new RegExp(member.name, "i"));
        const memberNameElement = page.getByTestId("member-name");
        await expect(memberNameElement).toBeVisible();
      });

      test("should display member profile information", async ({ page }) => {
        await expect(page.getByTestId("member-full-name")).toBeVisible();
        await expect(page.getByTestId("member-full-name")).toHaveText(
          member.fullName,
        );
        await expect(page.getByTestId("member-emoji")).toBeVisible();
        await expect(page.getByTestId("member-emoji")).toHaveText(member.emoji);
        await expect(page.getByTestId("info-item-nationality")).toBeVisible();
        await expect(page.getByTestId("info-item-nationality")).toContainText(
          member.nationality,
        );
        await expect(page.getByTestId("info-item-color")).toBeVisible();
        await expect(page.getByTestId("info-item-color")).toContainText(
          member.color,
        );

        const instagramProfile = member.social.find(
          (social) => social.platform === "instagram",
        );
        if (instagramProfile) {
          await expect(page.getByTestId("info-item-instagram")).toBeVisible();
          await expect(page.getByTestId("info-item-instagram")).toContainText(
            instagramProfile.username,
          );
        }
      });

      test("should display member positions", async ({ page }) => {
        const positionsCard = page.getByTestId("list-card-positions");
        await expect(positionsCard).toBeVisible();

        for (const position of member.positions) {
          await expect(positionsCard.getByText(position)).toBeVisible();
        }
      });

      test("should display member fun facts", async ({ page }) => {
        if (member.funFacts && member.funFacts.length > 0) {
          const funFactsCard = page.getByTestId("list-card-fun-facts");
          await expect(funFactsCard).toBeVisible();

          const firstFiveFunFacts = member.funFacts.slice(0, 5);
          for (const funFact of firstFiveFunFacts) {
            await expect(funFactsCard.getByText(funFact)).toBeVisible();
          }
        }
      });

      test("should display songs and music platform links", async ({
        page,
      }) => {
        const songsCard = page.getByTestId("list-card-featured-songs");
        await expect(songsCard).toBeVisible();

        for (const song of member.songs) {
          const songListItem = songsCard
            .getByRole("listitem")
            .filter({ hasText: song.title });
          await expect(songListItem).toBeVisible();
          await expect(songListItem.getByText(song.title)).toBeVisible();

          const availablePlatforms = song.links.map((link) => link.platform);

          if (
            availablePlatforms.includes("youtube") ||
            availablePlatforms.includes("youtube-music")
          ) {
            const youtubeLink = songListItem.getByRole("link", {
              name: new RegExp(
                `Listen to ${song.title.replace(/[()]/g, "\\$&")} on (YouTube|YouTube Music)`,
                "i",
              ),
            });
            await expect(youtubeLink).toBeVisible();
          }

          if (availablePlatforms.includes("spotify")) {
            const spotifyLink = songListItem.getByRole("link", {
              name: new RegExp(
                `Listen to ${song.title.replace(/[()]/g, "\\$&")} on Spotify`,
                "i",
              ),
            });
            await expect(spotifyLink).toBeVisible();
          }

          if (availablePlatforms.includes("appleMusic")) {
            const appleMusicLink = songListItem.getByRole("link", {
              name: new RegExp(
                `Listen to ${song.title.replace(/[()]/g, "\\$&")} on Apple Music`,
                "i",
              ),
            });
            await expect(appleMusicLink).toBeVisible();
          }
        }
      });
    });
  });

  test.describe("Common member page functionality", () => {
    test("should have navigation back to homepage", async ({ page }) => {
      await page.goto("/members/nayeon");
      const homeLink = page.getByRole("link", { name: "Home" });
      await expect(homeLink).toBeVisible();
      await homeLink.click();
      await expect(page).toHaveURL("/");
    });

    test("should handle invalid member IDs with 404 redirect", async ({
      page,
    }) => {
      await page.goto("/members/invalid-member");
      const heading = page.getByRole("heading", {
        name: "404 - Page Not Found",
      });
      await expect(heading).toBeVisible();
    });
  });

  test.describe("Member page navigation", () => {
    test("should be able to navigate between different member pages", async ({
      page,
    }) => {
      await page.goto(`/members/${MEMBERS[0].id}`);
      await expect(page).toHaveURL(`/members/${MEMBERS[0].id}`);

      if (MEMBERS.length > 1) {
        await page.goto(`/members/${MEMBERS[1].id}`);
        await expect(page).toHaveURL(`/members/${MEMBERS[1].id}`);
        await expect(page.getByTestId("member-name")).toHaveText(
          MEMBERS[1].name,
        );
      }
    });
  });
});

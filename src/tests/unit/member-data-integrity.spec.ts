import { describe, it, expect } from "vitest";
import { MEMBERS } from "../../const/members";
import type {
  TSocial,
  TSong,
  TMusicLink,
  Tnationality,
  Tposition,
} from "../../types/members";

describe("Member Data Integrity", () => {
  describe("Basic structure validation", () => {
    it("should contain exactly 9 members", () => {
      expect(MEMBERS).toHaveLength(9);
    });

    it("should have all members with unique IDs", () => {
      const ids = MEMBERS.map((member) => member.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(MEMBERS.length);
    });

    it("should contain expected member IDs", () => {
      const expectedIds = [
        "nayeon",
        "jeongyeon",
        "momo",
        "sana",
        "jihyo",
        "mina",
        "dahyun",
        "chaeyoung",
        "tzuyu",
      ];

      const actualIds = MEMBERS.map((member) => member.id).sort();
      expect(actualIds).toEqual(expectedIds.sort());
    });
  });

  describe("Data validation", () => {
    MEMBERS.forEach((member) => {
      describe(`Member: ${member.name}`, () => {
        it("should have all required properties", () => {
          expect(member).toHaveProperty("id");
          expect(member).toHaveProperty("name");
          expect(member).toHaveProperty("fullName");
          expect(member).toHaveProperty("nationality");
          expect(member).toHaveProperty("birthday");
          expect(member).toHaveProperty("positions");
          expect(member).toHaveProperty("social");
          expect(member).toHaveProperty("songs");
        });

        it("should have valid nationality", () => {
          const validNationalities: Tnationality[] = [
            "South Korean",
            "Japanese",
            "Taiwanese",
          ];
          expect(validNationalities).toContain(member.nationality);
        });

        it("should have valid positions", () => {
          expect(Array.isArray(member.positions)).toBe(true);
          expect(member.positions.length).toBeGreaterThan(0);

          const validPositions: Tposition[] = [
            "Main Vocalist",
            "Main Dancer",
            "Visual",
            "Center",
            "Group Face",
            "Sub-Vocalist",
            "Sub-Rapper",
            "Leader",
            "Main-Rapper",
            "Maknae",
          ];

          member.positions.forEach((position) => {
            expect(validPositions).toContain(position);
          });
        });

        it("should have valid social media links", () => {
          expect(Array.isArray(member.social)).toBe(true);
          expect(member.social.length).toBeGreaterThan(0);

          member.social.forEach((social: TSocial) => {
            expect(typeof social.platform).toBe("string");
            expect(typeof social.username).toBe("string");
            expect(typeof social.url).toBe("string");
            expect(social.url).toMatch(/^https?:\/\//);
          });
        });

        it("should have valid songs with links", () => {
          expect(Array.isArray(member.songs)).toBe(true);
          expect(member.songs.length).toBeGreaterThan(0);

          member.songs.forEach((song: TSong) => {
            expect(typeof song.title).toBe("string");
            expect(song.title.length).toBeGreaterThan(0);
            expect(Array.isArray(song.links)).toBe(true);
            expect(song.links.length).toBeGreaterThan(0);

            song.links.forEach((link: TMusicLink) => {
              expect(typeof link.platform).toBe("string");
              expect(typeof link.url).toBe("string");
              expect(link.url).toMatch(/^https?:\/\//);
            });
          });
        });
      });
    });
  });

  describe("Group consistency", () => {
    it("should have proper nationality distribution", () => {
      const nationalityCount = MEMBERS.reduce(
        (acc, member) => {
          acc[member.nationality] = (acc[member.nationality] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );

      expect(nationalityCount["South Korean"]).toBe(5);
      expect(nationalityCount["Japanese"]).toBe(3);
      expect(nationalityCount["Taiwanese"]).toBe(1);
    });

    it("should have exactly one leader", () => {
      const leaders = MEMBERS.filter((member) =>
        member.positions.includes("Leader"),
      );
      expect(leaders).toHaveLength(1);
    });

    it("should have exactly one maknae", () => {
      const maknaes = MEMBERS.filter((member) =>
        member.positions.includes("Maknae"),
      );
      expect(maknaes).toHaveLength(1);
    });
  });
});

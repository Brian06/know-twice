import { describe, it, expect, beforeEach, vi } from "vitest";
import { $, $$ } from "../../utils/dom-selector";

const mockQuerySelector = vi.fn();
const mockQuerySelectorAll = vi.fn();

const mockDocument = {
  querySelector: mockQuerySelector,
  querySelectorAll: mockQuerySelectorAll,
  createElement: vi.fn(),
} as unknown as Document;

const mockElement = {
  querySelector: mockQuerySelector,
  querySelectorAll: mockQuerySelectorAll,
} as unknown as HTMLElement;

Object.defineProperty(global, "document", {
  value: mockDocument,
  writable: true,
});

describe("DOM Selector Utilities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("$ (single element selector)", () => {
    it("should call querySelector on document by default", () => {
      const selector = ".test-class";
      const mockResult = { tagName: "DIV" } as HTMLElement;
      mockQuerySelector.mockReturnValue(mockResult);

      const result = $(selector);

      expect(mockQuerySelector).toHaveBeenCalledWith(selector);
      expect(result).toBe(mockResult);
    });

    it("should call querySelector on provided context element", () => {
      const selector = "#test-id";
      const mockResult = { tagName: "SPAN" } as HTMLElement;
      mockQuerySelector.mockReturnValue(mockResult);

      const result = $(selector, mockElement);

      expect(mockQuerySelector).toHaveBeenCalledWith(selector);
      expect(result).toBe(mockResult);
    });

    it("should return null when element is not found", () => {
      const selector = ".non-existent";
      mockQuerySelector.mockReturnValue(null);

      const result = $(selector);

      expect(result).toBeNull();
    });
  });

  describe("$$ (multiple elements selector)", () => {
    it("should call querySelectorAll on document by default", () => {
      const selector = ".test-class";
      const mockNodeList = [] as unknown as NodeListOf<HTMLElement>;
      mockQuerySelectorAll.mockReturnValue(mockNodeList);

      const result = $$(selector);

      expect(mockQuerySelectorAll).toHaveBeenCalledWith(selector);
      expect(result).toBe(mockNodeList);
    });

    it("should call querySelectorAll on provided context element", () => {
      const selector = "li";
      const mockNodeList = [] as unknown as NodeListOf<HTMLElement>;
      mockQuerySelectorAll.mockReturnValue(mockNodeList);

      const result = $$(selector, mockElement);

      expect(mockQuerySelectorAll).toHaveBeenCalledWith(selector);
      expect(result).toBe(mockNodeList);
    });
  });
});

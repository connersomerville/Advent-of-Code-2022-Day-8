import { describe, it, expect } from "vitest";
import {
  isVisibleEast,
  isVisibleNorth,
  isVisibleSouth,
  isVisibleWest,
} from "./land-search.js";

describe("Land Search", () => {
  describe("Check trees to north", () => {
    it("returns false if taller tree found", () => {
      expect(
        isVisibleNorth({
          map: [[6], [2], [3], [5]],
          rowIndex: 3,
          columnIndex: 0,
        })
      ).toEqual(false);
    });
    it("returns false if same height tree found", () => {
      expect(
        isVisibleNorth({
          map: [[1], [5], [3], [5]],
          rowIndex: 3,
          columnIndex: 0,
        })
      ).toEqual(false);
    });
    it("returns true if no obstructing tree found", () => {
      expect(
        isVisibleNorth({
          map: [[1], [2], [3], [5]],
          rowIndex: 3,
          columnIndex: 0,
        })
      ).toEqual(true);
    });
  });

  describe("Check trees to south", () => {
    it("returns false if taller tree found", () => {
      expect(
        isVisibleSouth({
          map: [[6], [2], [3], [5]],
          rowIndex: 1,
          columnIndex: 0,
          lastRow: 3,
        })
      ).toEqual(false);
    });
    it("returns false if same height tree found", () => {
      expect(
        isVisibleSouth({
          map: [[1], [5], [3], [5]],
          rowIndex: 1,
          columnIndex: 0,
          lastRow: 3,
        })
      ).toEqual(false);
    });
    it("returns true if no obstructing tree found", () => {
      expect(
        isVisibleSouth({
          map: [[1], [2], [1], [0]],
          rowIndex: 1,
          columnIndex: 0,
          lastRow: 3,
        })
      ).toEqual(true);
    });
  });

  describe("Check trees to east", () => {
    it("returns false if taller tree found", () => {
      expect(
        isVisibleEast({
          map: [[6, 5, 2, 9]],
          rowIndex: 0,
          columnIndex: 0,
          lastColumn: 3,
        })
      ).toEqual(false);
    });
    it("returns false if same height tree found", () => {
      expect(
        isVisibleEast({
          map: [[6, 5, 6, 2]],
          rowIndex: 0,
          columnIndex: 0,
          lastColumn: 3,
        })
      ).toEqual(false);
    });
    it("returns true if no obstructing tree found", () => {
      expect(
        isVisibleEast({
          map: [[6, 5, 2, 1]],
          rowIndex: 0,
          columnIndex: 0,
          lastColumn: 3,
        })
      ).toEqual(true);
    });
  });

  describe("Check trees to west", () => {
    it("returns false if taller tree found", () => {
      expect(
        isVisibleWest({
          map: [[9, 1, 2, 9]],
          rowIndex: 0,
          columnIndex: 2,
        })
      ).toEqual(false);
    });
    it("returns false if same height tree found", () => {
      expect(
        isVisibleWest({
          map: [[6, 5, 6, 2]],
          rowIndex: 0,
          columnIndex: 2,
        })
      ).toEqual(false);
    });
    it("returns true if no obstructing tree found", () => {
      expect(
        isVisibleWest({
          map: [[1, 1, 2, 1]],
          rowIndex: 0,
          columnIndex: 2,
        })
      ).toEqual(true);
    });
  });
});

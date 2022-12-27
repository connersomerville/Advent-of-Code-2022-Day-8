import {
  isVisibleEast,
  isVisibleNorth,
  isVisibleSouth,
  isVisibleWest,
} from "./land-search.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";
const lineReader = getLineReader({
  filePath,
});

const treeMap: number[][] = [];
const treeVisibilityMap: string[][] = [];
const VISIBLE = "✓";
const INVISIBLE = "✗";
const UNKNOWN = "-";
let visibleCount = 0;

lineReader.on("line", (line) => {
  const rowOfTrees = line.split("").map((height) => Number(height));
  treeMap.push(rowOfTrees);
  treeVisibilityMap.push(Array.from(UNKNOWN.repeat(rowOfTrees.length)));
});

lineReader.on("close", () => {
  const lastRow = treeMap.length - 1;
  const lastColumn = treeMap[0].length - 1;

  for (const [rowIndex, row] of treeMap.entries()) {
    for (const [treeIndex, tree] of row.entries()) {
      if (
        rowIndex === 0 ||
        rowIndex === lastRow ||
        treeIndex === 0 ||
        treeIndex === lastColumn
      ) {
        treeVisibilityMap[rowIndex][treeIndex] = VISIBLE;
        visibleCount++;
        continue;
      }

      const visibleNorth = isVisibleNorth({
        rowIndex,
        columnIndex: treeIndex,
        map: treeMap,
      });

      const visibleSouth = isVisibleSouth({
        rowIndex,
        columnIndex: treeIndex,
        lastRow,
        map: treeMap,
      });

      const visibleEast = isVisibleEast({
        rowIndex,
        columnIndex: treeIndex,
        lastColumn,
        map: treeMap,
      });

      const visibleWest = isVisibleWest({
        rowIndex,
        columnIndex: treeIndex,
        map: treeMap,
      });

      if (visibleNorth || visibleSouth || visibleEast || visibleWest) {
        treeVisibilityMap[rowIndex][treeIndex] = VISIBLE;
        visibleCount++;
        continue;
      }

      treeVisibilityMap[rowIndex][treeIndex] = INVISIBLE;
    }
  }

  console.log(`Trees:\n`);
  console.log(treeMap);
  console.log(treeVisibilityMap);
  console.log(`\n${visibleCount} are visible\n`);
});

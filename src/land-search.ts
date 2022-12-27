export const isVisibleNorth = ({
  rowIndex,
  columnIndex,
  map,
}: {
  rowIndex: number;
  columnIndex: number;
  map: number[][];
}) => {
  const value = map[rowIndex][columnIndex];
  let _rowIndex = rowIndex - 1;

  while (_rowIndex >= 0) {
    const comparitor = map[_rowIndex][columnIndex];

    if (comparitor >= value) {
      return false;
    }
    _rowIndex--;
  }

  return true;
};

export const isVisibleSouth = ({
  rowIndex,
  columnIndex,
  lastRow,
  map,
}: {
  rowIndex: number;
  columnIndex: number;
  lastRow: number;
  map: number[][];
}) => {
  const value = map[rowIndex][columnIndex];
  let _rowIndex = rowIndex + 1;

  while (_rowIndex <= lastRow) {
    const comparitor = map[_rowIndex][columnIndex];

    if (comparitor >= value) {
      return false;
    }
    _rowIndex++;
  }

  return true;
};

export const isVisibleEast = ({
  rowIndex,
  columnIndex,
  lastColumn,
  map,
}: {
  rowIndex: number;
  columnIndex: number;
  lastColumn: number;
  map: number[][];
}) => {
  const value = map[rowIndex][columnIndex];
  let _columnIndex = columnIndex + 1;

  while (_columnIndex <= lastColumn) {
    const comparitor = map[rowIndex][_columnIndex];

    if (comparitor >= value) {
      return false;
    }
    _columnIndex++;
  }

  return true;
};

export const isVisibleWest = ({
  rowIndex,
  columnIndex,
  map,
}: {
  rowIndex: number;
  columnIndex: number;
  map: number[][];
}) => {
  const value = map[rowIndex][columnIndex];
  let _columnIndex = columnIndex - 1;

  while (_columnIndex >= 0) {
    const comparitor = map[rowIndex][_columnIndex];

    if (comparitor >= value) {
      return false;
    }
    _columnIndex--;
  }

  return true;
};

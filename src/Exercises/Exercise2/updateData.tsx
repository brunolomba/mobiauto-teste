type ObjectData = {
  [key: string]: string;
};

type ObjectDataUpdated = {
  [key: string]: string;
};

function updateData(
  currentObject: ObjectData,
  newDataObject: ObjectData
): ObjectDataUpdated {
  for (const key in newDataObject) {
    if (currentObject[key] !== undefined) {
      currentObject[key] = newDataObject[key];
    }
  }

  return currentObject;
}

export default updateData;

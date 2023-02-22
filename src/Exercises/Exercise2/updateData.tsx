type ObjectData = {
  [key: string]: string;
};

function updateData(
  currentObject: ObjectData,
  newDataObject: ObjectData
): ObjectData {
  for (const key in newDataObject) {
    if (currentObject[key] !== undefined) {
      currentObject[key] = newDataObject[key];
    }
  }

  return currentObject;
}

// module.exports = updateData;
export default updateData;

//Supporting functions that can be used in any component

//Function takes the image ID and changes it so that it matches the Image ID of the pokemon on Serebi.net
export const getImageId = (id) => {
  let imageId = id;
  console.log(`this is the start id ${imageId}`);
  if (id < 10) {
    imageId = `00${id}`;
    console.log(imageId);
  } else if (id < 100 && id > 10) {
    imageId = `0${id}`;
  } else {
    imageId = id;
  }
  console.log(`this is the new id${imageId}`);
  return imageId;
};

// LC 733
//
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
    //why does it return image when the index is already newColor? 
    //it prevents a stackoverflow, I was just wondering how it wouldn't block a fill if there was a non-contiguous square that happened to already be filled with the new color)
    //if it's the newColor, why does the condition saying it's not the firstColor stop it? 
    //why is image.length the height? 
    
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor) return image;
  image[sr][sc] = newColor;
  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);
  return image;
};


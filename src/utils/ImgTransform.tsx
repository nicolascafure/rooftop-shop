const ImgTransform = (imagenes: Array<string>) => {
    const images = [
      {
        original: imagenes[0],
        thumbnail: imagenes[0],
      },
      {
        original: imagenes[1],
        thumbnail: imagenes[1],
      },
      {
        original: imagenes[2],
        thumbnail: imagenes[2],
      },
    ];
    return images;
  };
  export default ImgTransform
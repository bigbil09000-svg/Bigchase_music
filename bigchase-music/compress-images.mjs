import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

(async () => {
  console.log('Optimizing images...');
  
  // Compress PNG files
  await imagemin(['src/assets/*.png'], {
    destination: 'src/assets',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
        speed: 1,
      }),
    ],
  });

  console.log('PNG compression done!');

  // Generate WebP versions
  await imagemin(['src/assets/*.png'], {
    destination: 'src/assets',
    plugins: [
      imageminWebp({ quality: 75 }),
    ],
  });

  console.log('WebP generation done!');
})();

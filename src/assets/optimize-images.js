import {globby} from 'globby';
import imagemin from 'imagemin';
import webp from 'imagemin-webp';

const filePath = 'images/servises/transhei/480';

(async () => {
    const files = await globby([`${filePath}/*.{jpg,png}`]); // путь к твоим изображениям
    console.log('✅ Изображения найдены:', files);
    await imagemin(files, {
        destination: `${filePath}/webp`,
        plugins: [
            webp({
                quality: 80,   // качество
                method: 5      // степень сжатия: от 0 до 6
            })
        ]
    });

    console.log('✅ Изображения успешно оптимизированы и сохранены в папке images-webp');
})();

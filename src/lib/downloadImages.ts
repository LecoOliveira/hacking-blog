import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export const downloadImage = async (url: string, filename: string) => {
    const imagePath = path.join(process.cwd(), 'public', 'images', filename);

    if (fs.existsSync(imagePath)) {
        return imagePath;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao baixar a imagem');

    const buffer = await response.buffer();
    fs.writeFileSync(imagePath, buffer);

    return imagePath;
};
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob-promise');

const convertToWebp = async () => {
    try {
        // Pega todos os arquivos PNG, JPG e JPEG
        const pngFiles = await glob('public/img/catalog/**/*.png');
        const jpgFiles = await glob('public/img/catalog/**/*.jpg');
        const jpegFiles = await glob('public/img/catalog/**/*.jpeg');

        // Junta todos em um único array
        const files = [...pngFiles, ...jpgFiles, ...jpegFiles];

        // Processa cada imagem
        for (const file of files) {
            const webpFile = file.replace(/\.(png|jpe?g)$/i, '.webp'); // Cria nome com extensão .webp

            await sharp(file)
                .webp({ quality: 80 }) // Converte para WebP
                .toFile(webpFile);     // Salva arquivo WebP

            // Remove o arquivo original
            fs.unlink(file, (err) => {
                if (err) {
                    console.error(`Erro ao excluir o arquivo ${file}:`, err);
                } else {
                    console.log(`Arquivo ${file} excluído com sucesso.`);
                }
            });
        }

        console.log('Conversão e remoção concluídas!');
    } catch (err) {
        console.error('Erro no processo de conversão:', err);
    }
};

convertToWebp();

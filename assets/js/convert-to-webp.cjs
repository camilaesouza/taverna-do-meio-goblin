const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob-promise');

const convertToWebp = async () => {
    try {
        // Use o glob para pegar todos os arquivos PNG
        const files = await glob('public/img/catalog/**/*.png');

        // Loop para processar cada imagem
        for (const file of files) {
            const webpFile = file.replace(/\.png$/, '.webp'); // Cria o nome do arquivo WebP
            await sharp(file)
                .webp({ quality: 80 }) // Converte para WebP com qualidade 80
                .toFile(webpFile); // Salva o arquivo WebP

            // Remove o arquivo PNG após a conversão
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

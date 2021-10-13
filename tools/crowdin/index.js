const fs = require('fs');
let filesToSave = 0;

function writeResourcesFile(translations) {
  if (Object.keys(translations).length > 0) {
    let dataToWrite = '';
    for (let i in translations) {
      dataToWrite += `import translation${i.toUpperCase()} from '${translations[i]}';\n`
    }
    dataToWrite += '\nexport const TranslationResources = {';
    for (let i in translations) {
      dataToWrite += `\n\t${i}: {\n\t\ttranslation: translation${i.toUpperCase()}\n\t},`;
    }
    dataToWrite = `${dataToWrite.substring(0, dataToWrite.length -1)}\n};`;
    fs.writeFile(`${process.cwd()}/locales/utils/resources.js`, dataToWrite, (ferr) => {
      if (!ferr) {
        console.log(`Resources file successfully saved`);
      } else {
        console.log(ferr)
      }
    })
  }
}

async function main () {
  const projectId = 'goalenvision-layout';
  const apiKey = '4e7253746eed3bfbf4d7a5af219aa208';

  const crowdin = require('crowdin')({
    key: apiKey,
    schemaVersion: 'v1'
  });

  crowdin.projects.getDetails(projectId)
    .then((result) => {
      const project = result.body;

      if (project.languages) {
        const translations = {};
        project.languages.map(async (lang, index, langs) => {
          console.log(`Downloading ${lang.name} translation`);

          try {
            const fetched = await crowdin.projects.files.export(projectId, {
              'file': `translations.json`,
              'language': lang.code
            });

            console.log(`${lang.name} translation downloaded saving...`);
            const langCode = lang.code.indexOf('-') >= 0 ? lang.code.substring(0, lang.code.indexOf('-')) : lang.code;
            const file = fetched.body;
            const dir = `${process.cwd()}/locales/${langCode}`;
            if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
            }
            filesToSave++;
            fs.writeFile(`${dir}/${langCode}.json`, JSON.stringify(file), { flag: 'w' }, (ferr) => {
              if (!ferr) {
                translations[langCode] = `../${langCode}/${langCode}.json`;
                console.log(`${lang.name} translation saved to ${process.cwd()}/locales/${langCode}/${langCode}.json`);
              } else {
                console.log(ferr)
              }
              if (filesToSave === langs.length) writeResourcesFile(translations);
            });
          } catch (err1) { console.log(err1) }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
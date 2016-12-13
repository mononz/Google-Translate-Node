var config = require('./config.js');

if (config.api_key == 'API_KEY') {
    console.error('API KEY is not set! Generate your own at https://console.developers.google.com and place in config.js');
    process.exit();
}

var googleTranslate = require('google-translate')(config.api_key);

var text = 'test';

config.languages.forEach(function(lang) {
    translateThis(text, lang);
});

function translateThis(text, langCode) {
    googleTranslate.translate(text, langCode, function(err, translation) {
        console.log(langCode + ': ' + translation.translatedText);
    });
}
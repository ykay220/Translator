const select = document.querySelector('select')

const form = document.querySelector('form')

const langObject = [
    {
        "code": "ru", "name": "Russian"
    },
    {
        "code": "fr", "name": "French"
    },
    {
        "code": "af", "name": "Afrikaans"
    },
    {
        "code": "es", "name": "Spanish; Castilian"
    }
]



for (let el of langObject) {
    const langOption = document.createElement('option');
    langOption.textContent = el.name;
    langOption.value = el.code;
    select.append(langOption)
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#user-Input').value



    const res = await axios.get(`https://api.mymemory.translated.net/get?q=${userInput}&langpair=en|${select.options[select.selectedIndex].value}`);

    document.querySelector('#result').textContent = res.data.responseData.translatedText;
})



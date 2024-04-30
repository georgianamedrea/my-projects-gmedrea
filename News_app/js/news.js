import API from './api.js'
import { updateNewsList, createMarkup } from './markup.js'

const form = document.getElementById('form')

form.addEventListener('submit', onSubmit)

async function onSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const inputValue = form.elements.news.value

    try {
        const articles = await API.getNews(inputValue)

        if(articles.length === 0) {
            updateNewsList(`<p> Nu am gasit rezultate </p>`)
            return;
        }
        console.log(articles)

        const markup = articles.reduce( (markup, article) => createMarkup(article) + markup, '')
        updateNewsList(markup)
    } catch(error) {
        onError(error)
    }

    form.elements.news.value = ''   
}

function onError(error) {
    console.error(error)
    updateNewsList(`<p> Nu am gasit rezultate </p>`)
}


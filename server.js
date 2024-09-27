const path = require('path')
const port = process.env.PORT || 3000
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname))

// налаштовуємо роботу із шаблонізаотором
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// налаштовуємо маршрутизацію
app.get(['/','/logUp'], (request, response)=> {
    response.render('logUp', { title: 'Registration' })
})

app.get('/profile', (request, response)=> {
    response.render('profile', { title: 'Profile'})
})

app.get('/info', (request, response)=> {
    response.render('info', { title: 'Info'})
})

app.get('/volunteerApplication', (request, response)=> {
    response.render('volunteerApplication', { title: 'Volunteer'})
})

app.get('/neederApplication', (request, response)=> {
    response.render('neederApplication', { title: 'InNeed'})
})

app.get('/main', (request, response)=> {
    response.render('main', { title: 'Main'})
})

app.get('/logIn', (request, response)=> {
    response.render('logIn', { title: 'Sign In'})
})

// запускаємо аплікацію
app.listen(port, ()=>{
    console.log(`\nServer start!\n\nURL of site : http://localhost:${port}`)
})
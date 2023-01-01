
// import express
const express = require('express')
const app = express()

// importing path
const path = require('path')

// importing multer
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// to serve static file in express to save the result in public directory
app.use('/static', express.static('public'))

const {mergePDF}  = require('./merge')
const port = 3000


// get request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})


// post request
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  console.log(req.files)
  let d = await mergePDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/Merged${d}.pdf`)
  // res.send({data: req.files})
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
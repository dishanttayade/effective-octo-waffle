// const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

// app.use(express.json())
// app.use('/', express.static(path.join(__dirname, 'static')))
// app.use(bodyParser.json())

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/')

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try{
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status: 'ok'})
    }catch (err){
        console.log(err)
        if(err.code === 11000){
            res.json({status: 'User Already Exists.'})
        }
        res.json({status: err})
    }
})


app.post('/api/login', async (req,res) => {
    console.log(req.body)

    const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
    if(user){
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },'password')
            // atob(middle part of token) will give user details
        return res.json({status: 'Ok', user: token})
    }else {
        return res.json({status:'error', user:false})
    }
})


app.get('/api/dashboard', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'password')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/dashboard', async (req, res) => {
	const token = req.headers['x-access-token']
    console.log(token)
	try {
		const decoded = jwt.verify(token, 'password')
		const email = decoded.email
        console.log(email)
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		// console.log(error)
		res.json({ status: 'error', error: 'invalid token'})
	}
})
app.listen(1337, ()=> {
    console.log('Server Started on http://localhost:1337')
})
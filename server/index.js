import 'dotenv/config'
import app from './app.js'
import connectToDB from './db/index.js'

const PORT = 3000 || process.env.PORT 

connectToDB() 
    .then(() => {
        app.on("error",(err)=>{
            console.log(`Unable to communicate with the App Error : ${err}`)
            throw err
        })
        app.listen(PORT, () => {
            console.log(`Server is listening in port : http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.log(`Mongodb Error connection failed at index.js : ${err}`)
        throw err
    })
import * as env from 'dotenv'
env.config()
import { connectWithDb } from './config/db.js'
import { app } from './app.js'

connectWithDb()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


import * as env from 'dotenv'
env.config()
import {app} from './app.js'

const PORT  = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


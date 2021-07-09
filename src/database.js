const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/form', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
})
    .then(db => console.log("Conexión correcta a la db"))
    .catch(e => console.error(e))
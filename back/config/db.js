const moongose = require('mongoose');
require('dotenv').config({ path: 'var.env' });

const connectDB = async () => {
    try {
        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos conectada');
    } catch {
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = connectDB;
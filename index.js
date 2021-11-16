const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Crear sera
const app = express();
//Base de Datos

// dbConnection();

try {
  await mongoose.connect(process.env.DB_CNN);
} catch (error) {
 console.log("Error mongoose", error);
}

//cors
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Rutas
//Auth: Crear, login, renew
//CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  
});

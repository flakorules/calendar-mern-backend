const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

//Crear sera
const app = express();
//Base de Datos

// dbConnection();
console.log(process.env.DB_CNN);
mongoose
  .connect("mongodb+srv://mern_user:lEc1BptPcZjVENgd@cluster0.066qu.gcp.mongodb.net/mern_calendar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },)
  .then(() => {
    console.log("Conectado a la bd");
  });

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

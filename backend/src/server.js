import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors()) //Essa linha aqui

app.use(express.json());    

// Realizando conecção com banco
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "happy"
})

// Consultando orfanatos
app.get('/orphanages', (request, response) => {
    connection.query("SELECT * FROM orphanages", (error, result)=>{
        if(error){
            response.send(error)
        } else { 
            response.send(result)
    }})
})
// Consultando banco de dados por id
app.get('/orphanages/:id', (request, response) => {

    const { id }  = request.params
    connection.query(`SELECT * FROM orphanages WHERE id = ${id}`, (error, result)=>{
        if(error){
            response.send(error)
        } else { 
            response.send(result)
    }})
})

// Cadastrando orfanato
app.post("/orphanages", (request, response) => {
    const { name, latitude, longitude, about, instruction, open_on_weekend, opening_hour } = request.body;
    
    connection.query(`INSERT INTO orphanages (name, latitude, longitude, about, instruction, open_on_weekend, opening_hour) values 
    ('${name}', '${latitude}', '${longitude}', '${about}', '${instruction}', '${open_on_weekend}', '${opening_hour}')`, (error,result) =>{
        if (error){
            response.send("Erro ao exibir o usuario!")
        }else{
            response.status(201).send("Orfanato cadastrado sucesso!")
        }
    })
})

// Porta que esta rodando
app.listen(3333);
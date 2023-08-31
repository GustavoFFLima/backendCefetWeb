const express = require('express')
const app = express()
const mysql = require('mysql2');
const port = 3006
const bodyParser = require("body-parser")
const moment = require("moment")

app.use(bodyParser.urlencoded({extended : true}))

const connection = mysql.createConnection({
  host: 'aulascefet.c8tuthxylqic.sa-east-1.rds.amazonaws.com',
  user: 'aluno',
  database: 'aulas_web',
  password : 'alunoc3f3t',
});

app.get('/', (req, res) => {
  res.send("backend de Gustavo Fernando de Frazao Lima...")
})

app.get('/cliente', (req, res) => {
  connection.query(
    'select * from cliente',
    (err, results, fields) => {
      if(err) console.log(err)
      res.send(results)
    }
  );
})

app.get('/cliente/:id_cliente', (req, res) => {
  var id_cliente = req.params.id_cliente
   connection.query(
     `select * from cliente where id_cliente = ${id_cliente}`,
     (err, results, fields) => {
       if(err) console.log(err)
       res.send(results)
     }
   );
 })

app.get('/cliente_email/:email', (req, res) => {
  var email = req.params.email
   connection.query(
     `select * from cliente where email = "${email}"`,
     (err, results, fields) => {
       if(err) console.log(err)
       console.log(results)
      if(results.lenght > 0) res.send({existe : true})
      else res.send({existe : false})
     }
   );
 })
 
app.post('/cliente_del/:id_cliente', (req, res) => {
  var id_cliente = req.params.id_cliente
   connection.query(
     `select * from cliente where id_cliente = ${id_cliente}`,
     (err, results, fields) => {
       if(err) console.log(err)
       res.send(results)
     }
   );
})

app.get('/cliente_email/:email', (req, res) => {
  var email = req.params.email
   connection.query(
     `select * from cliente where email = "${email}"`,
     (err, results, fields) => {
       if(err) console.log(err)
       console.log(results)
      if(results.lenght > 0) res.send({existe : true})
      else res.send({existe : false})
     }
   );
 })
 
app.post('/cliente_del/:id_cliente', (req, res) => {
  var id_cliente = req.params.id_cliente
   connection.query(
     `select * from cliente where id_cliente = ${id_cliente}`,
     (err, results, fields) => {
       if(err) console.log(err)
       res.send(results)
     }
   );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
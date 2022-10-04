const express = require('express')
const mysql = require('mysql2')
var app = express()
var bodyPraser = require('body-parser')

let codificar = texto => {
    let num = "1234567890";
    let letras = "ABCDEFGHIJKLMÑNOPQRSTUVWXYZ";
    let text = texto.toUpperCase();
    let caracter;
    let texto_codificado;

    for (let i = 0; i < text.length; i++) {
        caracter = text.charAt(i);
        var pos = letras.indexOf(caracter);
        if (caracter == '@') {
            texto_codificado += "z";
        } else if (caracter == '.') {
            texto_codificado += "a";
        } else if (pos == -1) {
            texto_codificado += caracter;
        } else {
            var suma = pos + num;
            if (suma > 26) {
                let exc = suma - 26;
                suma = -1 + exc;
            }
            texto_codificado += letras.charAt(suma);
        }
    }
    return texto_codificado.toLowerCase();
}

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'users'
})

con.connect()

app.use(bodyPraser.json())

app.use(bodyPraser.urlencoded({

    extended: true

}))

app.use(express.static('public'))

app.post('/agregarUsuario', (req, res) => {
    let name = req.body.name
    let lastname = req.body.lastname
    let mail = req.body.mail
    let tel = req.body.tel
    let pass = req.body.pass

    con.query('CREATE TABLE IF NOT EXISTS usuario(name text, lastname text, mail varchar(40), tel text, pass text, primary key (mail))', (err) => {
        if (err) return console.log("Error", err);
    })
    let num = "1234567890";
    let letras = "ABCDEFGHIJKLMÑNOPQRSTUVWXYZ";
    let signos = "@._- "
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (name[i] == num[j]) {
                r_name = true
                break
            }
        }
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            
        }
    }
    con.query('INSERT INTO usuario values(' + "'" + name + "', '" + lastname + "', '" + mail + "', '" + tel + "', '" + pass + "'" + ')', (err) => {
        if (err) return console.log("Error", err), res.redirect('error.html');

        return res.redirect('Iniciar.html')
    })
})

app.post('/consultarUsuario', (req, res) => {
    let nombre = req.body.nombre

    con.query('Select * FROM usuario ', (err, respuesta, fields) => {
        var USERhtml = '';
        var i = 0;
        console.log(respuesta)
        respuesta.forEach(user => {

            i++
            USERhtml += `<tr><td>${i}</td><td>${user.nombre}</td><td>`


        })
        return res.send(`<table>           
            <th>Nombre: </th>
            <ul>
            ${USERhtml}
            </ul>
            </table>`)
    })


})

app.listen(8080, () => {
    console.log("Servidor escuchando el puerto 8080")
})
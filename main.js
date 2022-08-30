'use strict';

const fs = require('fs');
const { Telegraf } = require('telegraf');
require('dotenv').config({ path: './.env' });
const axios = require('axios');
// Variables
const token = process.env.TOKEN;

let rawdata = fs.readFileSync('./menu.JSON');
let products = JSON.parse(rawdata);
console.log(products);

const helpMessage = `/start - Inicia el bot
/info - Ver Sedes, dirección, domicilios y reservas.
/productos - Ver los productos disponibles
/horario - Ver los horarios de atención
/help - Ver este mensaje
/add_pedidos - Agregar Pedido
/pedidos - Ver los pedidos realizados`;

const info = `📌Sede Granjas - Av 26 # 39 – 03  
🛵Domicilios: 320 441 9414 - Whatsapp

🌳Sede El Árbol - Calle 8 # 42 – 25 
📅Reservas: 317 232 6914 - Whatsapp`;

const horario = `📅Lunes a Domingos: 11:00 a.m. a 10:00 p.m.`;

const productos = `🔖Productos: 
1. /hamburguesas
2. /perros
3. /bebidas`;

const hamburguesas = `Hamburguesas 👇:

🍔 Solterona - 💲10.900 - (Carne, Queso, Tomate, Lechuga, Grille)
🍔 Callejera - 💲10.900 - (Carne, Queso, Papas Fritas,  Grille)
🍔 Que-suda - 💲11.500 - (Carne, Triple Queso, Lechuga)
🍔 Pechugona - 💲10.900 - (Pollo, Tomate, Lechuga, Cebolla)
`;
// 🍔 Melosa - 💲11.500 - (Queso, Piña, Jamón, Lechuga, Salsa Dulce)
// 🍔 Tierna - 💲12.500 - (Carne, Queso, Lechuga, Cebolla)
const perros = `Perros 👇: 

🌭 Cachorro - 💲10.900 - (Salchicha Americana, Queso, Papas Trituradas)
🌭 Intenso - 💲10.900 - (Salchicha Americana, Queso, Jamón, Papas Trituradas)
🌭 Chacho - 💲11.500 - (Salchicha Americana, Queso, Cebolla, Papas Trituradas)

`;
// 🌭 Sin Vergüenza - 💲10.900 - (Salchicha Americana, Queso, Pollo Desmechado, Papas Trituradas)
// 🌭 Perra de Pollo - 💲10.900 - (Pollo Desmechado, Tocineta, Maíz Tierno, Queso, Papas Trituradas)
const bebidas = `Bebidas: 👇

🍺 Cerveza - 💲3.500
🥤 Agua - 💲2.000
🧃 Jugo - 💲5.000
🥤 Gaseosa - 💲4.000`;
// 🍸 Soda - 💲4.000
// 🧉 Te - 💲3.900

const n_pedido = new Date().getTime();

// ---------------------------------------------------------------

// Crear bot
const bot = new Telegraf(token);

// Crear una funcion para que el bot responda a un mensaje
// El callback recibe un objeto con el mensaje y el contexto
bot.start((ctx) => {
	console.log(ctx.from);

	// Con reply se responde al mensaje que se envio
	ctx.reply(
		`Hola ${ctx.from.first_name} ${ctx.from.last_name}, ¿Cómo estás?. Para ver los productos puede utilizar el comando /productos y para ver otros comandos puede utilizar el comando /help.`
	);
});

bot.help((ctx) => {
	ctx.reply(helpMessage);
});

bot.command('info', (ctx) => {
	console.log(ctx);
	ctx.reply(info);
});

bot.command('horario', (ctx) => {
	ctx.reply(horario);
});

bot.command('hamburguesas', (ctx) => {
	ctx.reply(hamburguesas);
});

bot.command('perros', (ctx) => {
	ctx.reply(perros);
});

bot.command('bebidas', (ctx) => {
	ctx.reply(bebidas);
});

bot.command('productos', (ctx) => {
	ctx.reply(productos);
});

//launch sirve para iniciar el bot y escuchar los mensajes

bot.launch();

//Comando para detener el bot y no escuchar los mensajes

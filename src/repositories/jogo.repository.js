import { jogoControllers} from "../controllers/jogo.controllers"
import {knex} from "../database/knex.js"

async function getAll(){
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;

};
async function getById(){
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;

};
async function post(){
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;

};
async function patch(){
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;

};
async function delete(){
    const jogo = await knex('jogo')
    .select("*").returning("*");
    return jogo;

};
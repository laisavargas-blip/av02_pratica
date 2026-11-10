import {jogoRepository} from "../repositories/jogo.repository";

async function getAll() {
    const jogo = await jogoRepository.getAll;
    return jogo;
};
async function getById() {
    const jogo = await jogoRepository.getById;
    return jogo;
};
async function post() {
    const jogo = await jogoRepository.post;
    return jogo;
};
async function patch() {
    const jogo = await jogoRepository.patch;
    return jogo;
};
async function delete() {
    const jogo = await jogoRepository.delete;
    return jogo;
};

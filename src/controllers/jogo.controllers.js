import {jogoService} from "../services/jogo.service"

async function getAll(req, res){
    try{
        const jogo = await jogoService.getAll
        res.json(jogo)
    }catch(error)
};
async function getById(req, res) {
    try{ const jogo = await jogoService.getAll
        res.json(jogo)
    }catch(error)
};
async function post(req, res){
    try{
        const jogo = await jogoService.getAll
        res.json(jogo)
    }catch(error)
};
async function patch(req, res) {
    try{
        const jogo = await jogoService
        res.json(jogo)
    }catch(error)
    
};
async function delete(req, res) {
    try{
        const jogo = await jogoService
        res.json(jogo)
    }catch(error)
}
export{
    getAll,
    getById,
    post,
    patch,
    delete
};
export const jogoControllers = new jogoControllers()



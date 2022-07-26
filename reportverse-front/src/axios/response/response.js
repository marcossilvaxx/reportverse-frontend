import axios from "axios";
import React from "react";

const URL = "urlpadrao";

async function listarTodasPostagens(){

    let postagens = [];
    await axios.get(`${URL}/todas`).then(
        res => {     
            res.map( post => {
            //fazer requisicao que transforma id em nome  
            let postagem = {
                horario: post.horario,
                descricao: post.description,
                latitude: post.latitude,
                longitude: post.longitude,
                nome: post.nome, //lembrar de configurar
                comentarios: post.comentarios,
                imagem: post.imagem
                }
                postagens.push(postagem);
            })   
        }
    )
    return postagens;
}



export {listarTodasPostagens} ;




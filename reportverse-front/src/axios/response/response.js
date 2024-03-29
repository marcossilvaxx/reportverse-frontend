import axios from "axios";
import React from "react";
import getUserToken from "../../utils/getUserToken";


const URL = "https://reportverse.herokuapp.com/api";

async function listarTodasPostagens(){  
    let postagens;
    await axios.get(`${URL}/publicacao/todas`,{ 'headers': { 'Authorization': `Bearer ${getUserToken()}` } }).then(
         async res => {
            
         postagens = await Promise.all(
            res.data.map( async post => {       
                const postagem = {
                    horario: post.creationDate,
                    descricao: post.description,
                    latitude: post.latitude,
                    longitude: post.longitude,
                    nome: post.authorName,
                    comentarios: post.comments,
                    imagem: post.medias,
                    postagemId: post.id,
                    reports: post.reports,
                    likes: post.likes
                }
                return postagem;
            })
         )   

            
        }
    )
    return postagens;
}


async function denunciarPostagem(IdPostagem){
    await axios.put(`${URL}/publicacao/${IdPostagem}/reportar`,{},{ 'headers': { 'Authorization': `Bearer ${getUserToken()}`} });
}

async function curtirPostagem(IdPostagem){
    await axios.put(`${URL}/publicacao/${IdPostagem}/curtir`,{},{ 'headers': { 'Authorization': `Bearer ${getUserToken()}`} });
}

async function comentarPostagem(IdPostagem,mensagem){
    await axios.post(`${URL}/publicacao/${IdPostagem}/comentario`,
    {
        text: mensagem,
        isAuthorAnonymous: false
    },
    { 
        'headers':{ 'Authorization': `Bearer ${getUserToken()}`} 
    }).then(resposta => {
        console.log(resposta);
    })
    
}


async function getPostagem(IdPostagem){
    let postagem;
    await axios.get(`${URL}/publicacao/${IdPostagem}`,{ 'headers': { 'Authorization': `Bearer ${getUserToken()}` } }).then(post =>
        {
            postagem = {
                horario: post.data.creationDate,
                descricao: post.data.description,
                latitude: post.data.latitude,
                longitude: post.data.longitude,
                nome: post.data.authorName,
                comentarios: post.data.comments,
                imagem: post.data.medias,
                postagemId: post.data.id,
                reports: post.data.reports,
                likes: post.data.likes,
                locationDescription: post.data.locationDescription
            }       
        })
        if(postagem != null){
            return postagem;
        }
        
}

async function getUserInfo() {
    return (await axios.get(`${URL}/usuario/me`, {
        headers: { 'Authorization': `Bearer ${getUserToken()}`}
    })).data;
}




export {
    listarTodasPostagens,
    denunciarPostagem, 
    comentarPostagem, 
    getPostagem, 
    getUserInfo,
    curtirPostagem
} 




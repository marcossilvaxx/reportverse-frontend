import axios from "axios";
import React from "react";


const URL = "https://reportverse.herokuapp.com/api";
const TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3VzYTAyNDBAZ21haWwuY29tIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDE2NTc2OCwidXNlclJvbGUiOlsiVU5JVkVSU0lUQVJJTyJdfQ.GfUk5QGK9wprkxoy6fe_4QL-x0a1a_Mq_MAHZyef27s';




async function listarTodasPostagens(){  
    let postagens;
    await axios.get(`${URL}/publicacao/todas`,{ 'headers': { 'Authorization': TOKEN } }).then(
         async res => {
            
         postagens = await Promise.all(
            res.data.map( async post => { 
                let nomeUser = "";
                // await axios.get(`${URL}/usuario/${post.authorId}`,{ 'headers': { 'Authorization': TOKEN} }).then(resposta => {
                //     nomeUser = resposta.data.name;
                // })        
                const postagem = {
                    horario: post.creationDate,
                    descricao: post.description,
                    latitude: post.latitude,
                    longitude: post.longitude,
                    nome: post.authorName,
                    comentarios: post.comments,
                    imagem: post.medias,
                    postagemId: post.id
                    }
                return postagem;
            })
         )   

            
        }
    )
    return postagens;
}


async function denunciarPostagem(IdPostagem){
    await axios.put(`${URL}/publicacao/${IdPostagem}/reportar`,{},{ 'headers': { 'Authorization': TOKEN} }).then(resposta =>{
    console.log(resposta);
});
}



async function comentarPostagem(IdPostagem,mensagem){
    await axios.post(`${URL}/publicacao/${IdPostagem}/comentario`,
    {
        text: mensagem,
        isAuthorAnonymous: false
    },
    { 
        'headers':{ 'Authorization': TOKEN} 
    }).then(resposta => {
        console.log(resposta);
    })
    
}


async function getPostagem(IdPostagem){
    let postagem;
    await axios.get(`${URL}/publicacao/${IdPostagem}`,{ 'headers': { 'Authorization': TOKEN } }).then(post =>
        {
            postagem = {
                horario: post.data.creationDate,
                descricao: post.data.description,
                latitude: post.data.latitude,
                longitude: post.data.longitude,
                nome: post.data.authorName,
                comentarios: post.data.comments,
                imagem: post.data.medias,
                postagemId: post.data.id
                }

                

            
        })
        if(postagem != null){
            return postagem;
        }
        
}




export {listarTodasPostagens,denunciarPostagem, comentarPostagem,getPostagem} 




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
                
                await axios.get(`${URL}/usuario/${post.authorId}`,{ 'headers': { 'Authorization': TOKEN} }).then(resposta => {
                    nomeUser = resposta.data.name;
                })
                  
                const postagem = {
                    horario: post.creationDate,
                    descricao: post.description,
                    latitude: post.latitude,
                    longitude: post.longitude,
                    nome: nomeUser,
                    comentarios: post.comments,
                    imagem: post.mediasPathList,
                    postagemId: post.id
                    }
                return postagem;
        
            })
         )   

            
        }
    )
    
    return postagens;
   
}





export {listarTodasPostagens} ;




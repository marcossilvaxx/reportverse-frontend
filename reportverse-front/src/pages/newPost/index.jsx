import axios from 'axios';
import React, { useRef, useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import MapPicker from '../../components/MapPicker';
import getUserToken from '../../utils/getUserToken';

import './styles.scss';

function NewPost({ history }) {

  const descriptionInput = useRef(null);
  const photoInput = useRef(null);
  const locationInput = useRef(null);
  const locationDescriptionInput = useRef(null);

  const [photoName, setPhotoName] = useState("");

  const handleSubmit = async () => {
    if (!isValid()) {
      alert("Preencha todos os campos");
      return;
    }

    const data = new FormData();

    data.append("description", descriptionInput.current.value);
    data.append("isAuthorAnonymous", false);
    data.append("latitude", locationInput.current[0]);
    data.append("longitude", locationInput.current[1]);

    if (photoInput.current.files.length > 0) {
      data.append("mediasBytesList", photoInput.current.files[0]);
    }

    await axios.post("https://reportverse.herokuapp.com/api/publicacao/cadastro", data, {
      headers: {
        "Authorization": `Bearer ${getUserToken()}`
      }
    });

    history.push("/mapa");

  }

  const isValid = () => !!(descriptionInput.current.value && locationDescriptionInput.current.value && locationInput.current)
  
  return (
    <Container
      titleComponent={<h4>Postar denúncia</h4>}
      className="container-newpost"
    >
      <section>
        <h5>Escreva uma descrição da denúncia</h5>
        <textarea name="description" placeholder="Gostaria de denunciar..." ref={descriptionInput}></textarea>
      </section>
      <section>
        <h5>Selecione uma foto da denúncia</h5>
        <label className="input-image-button">
          <p>Procurar foto no dispositivo</p>
          <input type="file" accept="image/png, image/jpeg" ref={photoInput} onChange={() => setPhotoName(photoInput.current.files[0].name)} />
        </label>
        <p className="input-image-name">{photoName}</p>
      </section>
      <section>
        <h5>Adicione uma localização</h5>
        <MapPicker
          width="auto"
          height={516}
          mapStyle={{
            marginTop: 8
          }}
          onChangeCallback={points => locationInput.current = points}
        />
      </section>
      <section>
        <h5>Descrição da localização</h5>
        <textarea name="description-location" placeholder="Fica perto de..." ref={locationDescriptionInput}></textarea>
      </section>
      <Button 
        className="button-newpost"
        variation="danger"
        onClick={handleSubmit}
      >
        ENVIAR
      </Button>
    </Container>
  );
}

export default NewPost;
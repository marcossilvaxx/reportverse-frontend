import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import MapPicker from '../../components/MapPicker';

import './styles.scss';

function NewPost() {
  return (
    <Container
      titleComponent={<h4>Postar denúncia</h4>}
      className="container-newpost"
    >
      <section>
        <h5>Escreva uma descrição da denúncia</h5>
        <textarea name="description" placeholder="Gostaria de denunciar..."></textarea>
      </section>
      <section>
        <h5>Selecione uma foto da denúncia</h5>
        <label className="input-image-button">
          <p>Procurar foto no dispositivo</p>
          <input type="file" accept="image/png, image/jpeg" />
        </label>
        <p className="input-image-name">fotoConstrução.png</p>
      </section>
      <section>
        <h5>Adicione uma localização</h5>
        <MapPicker
          width="auto"
          height={516}
          mapStyle={{
            marginTop: 8
          }}
          onChangeCallback={points => console.log(points)}
        />
      </section>
      <section>
        <h5>Descrição da localização</h5>
        <textarea name="description-location" placeholder="Fica perto de..."></textarea>
      </section>
      <Button 
        className="button-newpost"
        variation="danger"
      >
        ENVIAR
      </Button>
    </Container>
  );
}

export default NewPost;
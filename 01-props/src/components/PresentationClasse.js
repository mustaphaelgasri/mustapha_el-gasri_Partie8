import React, { Component } from 'react';

export default class PresentationClasse extends Component {
  render() {
    const { nom, prenom } = this.props.personne;

    return (
      <div>
        <h2>Salut {nom} {prenom}</h2>
        <hr />
        <h3>Diplômes:</h3>
        <p>{this.props.diplomes}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
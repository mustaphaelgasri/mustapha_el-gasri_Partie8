import { Component } from "react";

export default class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      face: null, 
      compteur: 0, 
      fin: false 
    };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    let count = this.state.compteur + 1;
    let isWin = (this.props.cache === valeur);

    this.setState({
      face: valeur,
      compteur: count,
      fin: isWin
    });
  }

  
  getImage() {
    switch (this.state.face) {
      case 1: 
        return "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg";
      case 2: 
        return "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg";
      case 3: 
        return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg";
      case 4: 
        return "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg";
      case 5: 
        return "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg";
      case 6: 
        return "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg";
      default: 
        
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTz7ynWH8ZHazCJ9QAsrYndZpdbC3qmH32Y_PEwRQ4Q&s=10";
    }
  }

  initialiser() {
    this.setState({ 
      face: null, 
      compteur: 0, 
      fin: false 
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img 
          src={this.getImage()} 
          style={{ width: 120, height: 120 }} 
          alt="Dé" 
        />
        <h1>Jeu de Dé...</h1>
        <h2>Face : {this.state.face}</h2>
        <h2>Nombre d'essais : {this.state.compteur}</h2>

        {!this.state.fin && (
          <button onClick={() => this.jouer()}>Jouer</button>
        )}

        {this.state.fin && (
          <div>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Bravo vous avez trouvez la face cachée.....
            </p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
          </div>
        )}
      </div>
    );
  }
}
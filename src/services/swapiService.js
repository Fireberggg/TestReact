export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img';
  
    async getResourse (url) {
      try {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
      } catch ( err ) {
        console.log(err);
      }
    }
  
    getAllPeople = async () => {
      const res = await this.getResourse('/people/');
      return res.results.map(people => this._transformPerson(people))
    }
  
    getPerson = async (id) => {
      const person = await this.getResourse(`/people/${id}`);
      return this._transformPerson(person);
    }
  
    getAllPlanets = async () => {
      const res = await this.getResourse('/planets/');
      return res.results.map(planet => this._transformPlanet(planet));
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResourse(`/planets/${id}`);
      return this._transformPlanet(planet);
    }
    
    getAllStarships = async () => {
      const res = await this.getResourse('/starships/');
      return res.results.map(starship => this._transformSpaceship(starship))
    }
  
    getStarship = async (id) => {
      const starship = await this.getResourse(`/starships/${id}`);
      return this._transformSpaceship(starship);
    }

    _getId(url) {
      return url.split('/')[url.split('/').length - 2];
    }

    getPersonImage = ({id}) => {
      return `${this._imgBase}/characters/${id}.jpg`;
    }

    getStarshipImage = ({id}) => {
      return `${this._imgBase}/starships/${id}.jpg`;
    }

    getPlanetImage = ({id}) => {
      return `${this._imgBase}/planets/${id}.jpg`;
    }

    _transformPlanet = (planet) => {
      return {
        id: this._getId(planet.url),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    _transformSpaceship = (spaceship) => {
      return {
        id: this._getId(spaceship.url),
        name: spaceship.name,
        model: spaceship.model,
        manufacturer: spaceship.manufacturer,
        costInCredits: spaceship.cost_in_credits,
        length: spaceship.length,
        crew: spaceship.crew,
        passangers: spaceship.passangers,
        cargoCapacity: spaceship.cargoCapacity
      }
    }
    
    _transformPerson = (person) => {
      return {
        id: this._getId(person.url),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }


  
}
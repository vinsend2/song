export default class GotService {
    _apiBase = `https://www.anapioficeandfire.com/api`;
   
   
    getResourse = async (url) => {
       const res = await fetch(`${this._apiBase}${url}`);

       if (!res.ok) {
           throw new Error (`Could not fetch ${url}, status ${res.status}`)
       }

       return await res.json();
   } 
   getAllCharacters = async () => {
       const res = await this.getResourse(`/characters?page=5&pageSize=10`);
      
       return res.map(this._transformCharacter);
       
   }
   getCharacter = async (id) => {   
    const res = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(res);
   }

   getAllBooks = async () => {
    const res = await this.getResourse(`/books/`);    
    return res.map(this._transformBook);
    }

    getBooks = async (id) => {
    const res = await this.getResourse(`/books/${id}/`);
    return this._transformBook(res);    
    }

    getAllHouses = async () => {
        const res = await this.getResourse(`/houses/`);
        return res.map(this._transformHouse);
    }
    getHouses = async (id) => {
     const res = await this.getResourse(`/houses/${id}/`);
     return this._transformHouse(res);
    }


     _extractId (item) {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    } 

    _transformCharacter = (char) => {             
        return {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture,   
        id: this._extractId(char)  
        }
    }
    _transformHouse = (house) => {
        return {
        name: house.name,
        region: house.region,
        words: house.words,
        titles: house.titles,
        overlord: house.overlord,
        ancestralWeapons: house.ancestralWeapons,
        id: this._extractId(house)  
        }
    }
    _transformBook = (book) => {
        return {
        name: book.name,
        numberOfPages: book.numberOfPages,
        publisher: book.publisher,
        released: book.released,
        id: this._extractId(book)  
        }
    }

}




class Character {
    #id
    #name
    #status
    #origin
    #episode = []
    #image

    setId(id){this.#id = id}
    getId() { return this.#id }

    setName(name){ this.#name = name }
    getName(){ return this.#name}

    setStatus(status){ this.#status = status }
    getStatus() { return this.#status}

    setImage(image){ this.#image = image}
    getImage() { return this.#image}

    setOrigin(origin){ this.#origin = origin}
    getOrigin() { return this.#origin }

    setEpisode(episode){ this.#episode = episode}
    getEpisode() { return this.#episode}

}
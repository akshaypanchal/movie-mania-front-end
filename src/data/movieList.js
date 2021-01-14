
const data = [
        {
            "id": 1,
            "name": "The Shawshank Redemption",
            "image": "assets/images/the shawshank redemption.jpg",
            "context":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "director": "Frank Darabont",
            "Stars": "Tim Robbins, Morgan Freeman, Bob Gunton",
            "imdb": "9.3/10"
        },
        {
            "id": 2,
            "name": "The Godfather",
            "image": "assets/images/godfather.jpg",
            "context":"An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            "director": "Francis Ford Coppola",
            "Stars": "Marlon Brando, Al Pacino, James CaanTim Robbins, Morgan Freeman, Bob Gunton",
            "imdb": "9.2/10"
        },
        {
            "id": 3,
            "name": "The Godfather: Part II",
            "image": "assets/images/godfather - 2.jpg",
            "context":"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            "director": "Francis Ford Coppola",
            "Stars": "Al Pacino, Robert De Niro, Robert Duvall",
            "imdb": "9.0/10"

        },
        {
            "id": 4,
            "name": "The Dark Knight",
            "image": "assets/images/the dark knight.jpg",
            "context":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "director": "Christopher Nolan",
            "Stars": "Christian Bale, Heath Ledger, Aaron Eckhart",
            "imdb": "9.0/10"
        },
        {
            "id": 5,
            "name": "12 Angry Men",
            "image": "assets/images/12 angry men.jpg",
            "context":"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            "director": "Sidney Lumet",
            "Stars": "Henry Fonda, Lee J. Cobb, Martin Balsam",
            "imdb": "9.0/10"
        },
        {
            "id": 6,
            "name": "Schindler's List",
            "image": "assets/images/Schindler's List.jpg",
            "context":"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "director": "Steven Spielberg",
            "Stars": "Liam Neeson, Ralph Fiennes, Ben Kingsley",
            "imdb": "8.9/10"
        },
        {
            "id": 7,
            "name": "The Lord of the Rings: The Return of the King",
            "image": "assets/images/The Lord of the Rings.jpg",
            "context":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "director": "Peter Jackson",
            "Stars": "Elijah Wood, Viggo Mortensen, Ian McKellen",
            "imdb": "8.9/10"
        },
        {
            "id": 8,
            "name": "Pulp Fiction",
            "image": "assets/images/pulp function.jpg",
            "context":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "director": "Quentin Tarantino",
            "Stars": "John Travolta, Uma Thurman, Samuel L. Jackson",
            "imdb": "8.9/10"
        },
        {
            "id": 9,
            "name": "The Good, the Bad and the Ugly",
            "image": "assets/images/The Good, the Bad and the Ugly.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 10,
            "name": "The Lord of the Rings: The Fellowship of the Ring",
            "image": "assets/images/The Fellowship of the Ring.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 11,
            "name": "Fight Club",
            "image": "assets/images/Fight Club.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 12,
            "name": "Forrest Gump",
            "image": "assets/images/Forrest Gump.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 13,
            "name": "Inception",
            "image": "assets/images/Inception.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 14,
            "name": "The Lord of the Rings: The Two Towers",
            "image": "assets/images/The Two Towers.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 15,
            "name": "Star Wars: Episode V - The Empire Strikes Back",
            "image": "assets/images/The Empire Strikes Back.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 16,
            "name": "The Matrix",
            "image": "assets/images/The Matrix.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 17,
            "name": "Goodfellas",
            "image": "assets/images/Goodfellas.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 18,
            "name": "One Flew Over the Cuckoo's Nest",
            "image": "assets/images/One Flew Over the Cuckoo's Nest.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 19,
            "name": "Seven Samurai",
            "image": "assets/images/Seven Samurai.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id":20,
            "name": "Se7en",
            "image": "assets/images/Se7en.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 21,
            "name": "Life Is Beautiful",
            "image": "assets/images/Life Is Beautiful.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 22,
            "name": "City of God",
            "image": "assets/images/City of God.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 23,
            "name": "The Silence of the Lambs",
            "image": "assets/images/The Silence of the Lambs.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id":24,
            "name": "It's a Wonderful Life",
            "image": "assets/images/It's a Wonderful Life.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        },
        {
            "id": 25,
            "name": "Star Wars: Episode IV - A New Hope",
            "image": "assets/images/Episode IV - A New Hope.jpg",
            "context":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "director": "Sergio Leone",
            "Stars": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
            "imdb": "8.8/10"
        }
    ]

    export default data;
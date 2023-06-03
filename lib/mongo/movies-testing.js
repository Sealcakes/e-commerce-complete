import clientPromise from ".";

let client;
let db;
let movies;

async function init() {
    if (db) return;
    
    try {
        client = await clientPromise;
        db = await client.db('sample_mflix');
        movies = await db.collection('movies');

        console.log('Successfully connected to movies db')
    } catch (error) {
        throw new Error('Failed to establish a connection to the database');
    }
}


// figure out what this is??  grabbed it from Hamed Bahram's connect NextJs app to MongoDB @ 9:22
// Haven't seen this type of async function before
;(async () => {
    await init();
})();


export async function getMovies() {
    try {
        if (!movies) await init();
        const result = await movies
            .find({})
            .limit(20)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray()

        return { movies: result }
    } catch (error) {
        return { error: 'Failed to fetch movies!' }
    };
};
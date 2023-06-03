import { getMovies } from "@/lib/mongo/movies-testing";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try { 
            const { movies, error } = await getMovies();
            if (error) throw new Error(error);

            return res.status(200).json({ movies });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeadaer('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} is not allowed`);
}

export default handler;
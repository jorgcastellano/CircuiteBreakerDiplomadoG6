import express, {Express, Request, Response} from 'express';
import { PostsController } from "./controllers/PostsController"
import { CircuitBreakerService } from "./services/CircuitBreakerService"

const posts = new PostsController();
const circuitBreaker = new CircuitBreakerService();

const app: Express = express();
const port = 3000;
app.use(express.json());


// Endpoint para obtener todos los productos ficticios
app.get('/api/posts', async (req: Request, res: Response) => {
    try {
        const allPosts = await circuitBreaker.execute(() => posts.getAllPosts());
        res.json(allPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/posts/:id', async (req: Request, res: Response) => {
    try {
        const post = await circuitBreaker.execute(() => posts.getPost(req.params.id));
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`El servidor funciona en http://localhost:${port}`);
});

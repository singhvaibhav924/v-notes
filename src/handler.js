import {Router} from "itty-router";
import notes from "./handlers/notes.js";
const router = Router();

//router.post('/', validate)
//router.get('/:id', notes)
router.post('/:id',notes)

router.get('*',() => new Response("Invalid URL", {status : 404}));
export default function handler(req) {
    return router.handle(req);
}
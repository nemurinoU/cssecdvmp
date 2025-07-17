import { Router } from "express"
import controller from "../controllers/controller.js"

const router = Router()

// GETS

router.get(`/`,  controller.home)
router.get(`/login`, controller.login)
router.get(`/register`, controller.register)

// POSTS
router.post(`/login`, controller.login)

export default router
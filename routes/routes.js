import { Router } from "express"
import controller from "../controllers/controller.js"

const router = Router()

router.get(`/`,  controller.home)
router.get(`/login`, controller.login)
router.get(`/register`, controller.register)

export default router
import { Router } from "express";
import { createUser, updateUser } from "../controller/user.controller";

const router = Router();

// http://localhost:3000/api/v1/user
router.post("/v1/user", createUser);

// http://localhost:3000/api/v1/user/:id + el id
router.put("/v1/user/:id", updateUser);

export default router;

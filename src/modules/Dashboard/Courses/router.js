const express = require("express")
const router = express.Router()
const responses = require("../../../red/responses")
const controller = require("./controller")

const security = require("../../../middlewares/security")


router.get("/", security(), (req, res) => {
    const { user } = req


    responses.success(req, res, { messaage: `Hello ${user.nombre}`, user }, 200)
})


router.get("/:id", security(), async (req, res) => {
    const { user, params } = req

    const { id } = params

    const result = await controller.getCourseTasks(id);

    responses.success(req, res, { result }, 200)
})


module.exports = router
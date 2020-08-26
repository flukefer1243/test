const {Human} = require('../models')
module.exports = {
    // get all user
    async index (req, res) {
        try {
            const humans = await Human.findAll()
            res.send(humans)
        } catch (err){
            res.status(500).send({
                error: 'The humans information was incorrect'
            })
        }
    },
    // create user
    async create (req, res) {
        try {
            const human = await Human.create(req.body)
            res.send(human.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create humans incorrect'
            })
        }
    },
    // edit user, suspend, active
    async put (req, res) {
        try {
            await Human.update(req.body, {
                where: {
                    id: req.params.humanId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update human incorrect'
            })
        }
    },
    // delete user
    async remove (req, res) {
        try {
            const human = await Human.findOne({
                where: {
                    id: req.params.humanId
                }
            })
            if(!human){
                return res.status(403).send({
                    error: 'The human information was incorrect'
                })
            }
            await human.destroy()
            res.send(human)
        } catch (err) {
            res.status(500).send({
                error: 'The human information was incorrect'
            })
        }
    },
    // get user by id
    async show (req, res) {
        try {
            const human = await Human.findById(req.params.userId)
            res.send(human)
        } catch (err) {
            req.status(500).send({
                error: 'The human information was incorrect'
            })
        }
    },
} 
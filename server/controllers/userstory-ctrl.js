const Userstory = require('../models/userstory-model')

createUserstory = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a userstory',
        })
    }

    const userstory = new Userstory(body)

    if (!userstory) {
        return res.status(400).json({ success: false, error: err })
    }

    userstory
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: userstory._id,
                message: 'Userstory created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Userstory not created!',
            })
        })
}

updateUserstory = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Userstory.findOne({ _id: req.params.id }, (err, userstory) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Userstory not found!',
            })
        }
        userstory.title = body.title
        userstory.description = body.description
        userstory.difficulty = body.difficulty
        userstory
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: userstory._id,
                    message: 'Userstory updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Userstory not updated!',
                })
            })
    })
}

deleteUserstory = async (req, res) => {
    await Userstory.findOneAndDelete({ _id: req.params.id }, (err, userstory) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userstory) {
            return res
                .status(404)
                .json({ success: false, error: `Userstory not found` })
        }

        return res.status(200).json({ success: true, data: userstory })
    }).catch(err => console.log(err))
}

getUserstoryById = async (req, res) => {
    await Userstory.findOne({ _id: req.params.id }, (err, userstory) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userstory) {
            return res
                .status(404)
                .json({ success: false, error: `Userstory not found` })
        }
        return res.status(200).json({ success: true, data: userstory })
    }).catch(err => console.log(err))
}

getUserstories = async (req, res) => {
    await Userstory.find({}, (err, userstorys) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!userstorys.length) {
            return res
                .status(404)
                .json({ success: false, error: `Userstory not found` })
        }
        return res.status(200).json({ success: true, data: userstorys })
    }).catch(err => console.log(err))
}

module.exports = {
    createUserstory,
    updateUserstory,
    deleteUserstory,
    getUserstories,
    getUserstoryById,
}
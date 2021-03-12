const express = require('express')

const UserstoryCtrl = require('../controllers/userstory-ctrl')

const router = express.Router()

router.post('/userstory', UserstoryCtrl.createUserstory)
router.put('/userstory/:id', UserstoryCtrl.updateUserstory)
router.delete('/userstory/:id', UserstoryCtrl.deleteUserstory)
router.get('/userstory/:id', UserstoryCtrl.getUserstoryById)
router.get('/userstories', UserstoryCtrl.getUserstories)
module.exports = router;
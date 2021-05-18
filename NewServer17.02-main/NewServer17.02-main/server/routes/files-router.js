const express = require('express')
const router = express.Router()
const FileCtrl = require('../controllers/file-ctrl')

const auth= require('../middleware/validate_token')
const authorize= require('../middleware/check_authorization')

router.post('/uploadfile',FileCtrl.fileUpload)

// router.post('/uploadfiles',auth,authorize,FileCtrl.files_Upload)
// router.get('/getfiles',auth,authorize,FileCtrl.getfiles)
// router.post('/createdir',auth,authorize,FileCtrl.create_directory)


router.post('/uploadfiles',auth,authorize,FileCtrl.files_Upload)
router.get('/getfiles',auth,authorize,FileCtrl.getfiles)
router.post('/createdir',auth,authorize,FileCtrl.create_directory)
router.delete('/deletedir',auth,authorize,FileCtrl.deleteFile)
router.put('/movedir',auth,authorize,FileCtrl.moveFile)
router.put('/pastedir',auth,authorize,FileCtrl.paste_File)
router.get('/download',auth,authorize,FileCtrl.download)
router.put('/rename',auth,authorize,FileCtrl.renameFile)

module.exports = router
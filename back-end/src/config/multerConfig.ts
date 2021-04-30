import multer from 'multer'
import path from 'path'

const multerConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
    filename: function (req, file, cb) {
      const now = new Date()
      cb(null, '' + now.getMilliseconds() + now.getDate() + now.getMonth() + now.getFullYear() + '-' + file.originalname)
    }
  })
}

export default multerConfig

import multer from 'multer';
import path from 'path'

const publicDirectory = path.join(__dirname, "../../public")
const uploadDirectory = path.join(publicDirectory, 'uploads')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadDirectory)
    },

    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

export default multer({ storage })
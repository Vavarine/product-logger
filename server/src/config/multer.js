import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
   storage: multer.diskStorage({
      destination: function (req, file, cb) {
         cb(null, './uploads')
      },
      filename: function (req, file, cb) {
         const uniqueSuffix = crypto.randomBytes(6).toString('hex');
         
         cb(null, uniqueSuffix.toString() + '-product-image' + path.extname(file.originalname));
      }
   })
}

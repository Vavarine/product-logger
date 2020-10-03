import Images from '../database/models/Images';

class ImagesController {
   async store(req, res) {
      console.log('prodcutId: ' + req.body.productId);
      // return res.status(200).send( {data: req.body, file: req.file} );

      Images.create({ productId: parseInt(req.body.productId), fileName: "asdfasdf.jpg" }, res).then(resp => {
         return res.status(201).send(resp);
      }).catch(err => {
         //console.log(err);
         return res.status(500).send(err);
      });
   }
}

export default ImagesController;
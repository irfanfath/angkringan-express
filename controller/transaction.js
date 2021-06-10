const { Trx } = require('../models');

class TrxController {
    static async addTrx (res,req, next){
        try {
            const input = {
                nama : req.body.nama,
                harga : req.body.harga,
                qty : req.body.qty,
                tgl : req.body.tgl
            }

            const trx = await Trx.create(input);
            return res.status(201).json(trx);
        } catch(err) {
            return next(err);
        }
    }

    static async getTrx (res, req, next){
        try {
            const trx = await Trx.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            return res.status(200).json(trx)
        }catch(err){
            return next(err)
        }
    }

    static async deleteTrx (req, res, next) {
        try {
          const id = +req.params.id;
    
          const trx = await Trx.destroy({
            where: {
              id
            }
          });
    
          if (trx) {
            return res.status(200).json({ message: 'Transaction has deleted successfully' });
          } else {
            return next({
              status: 404,
              name: 'NotFound',
              message: 'Transaction not found'
            });
          }
        } catch (err) {
          return next(err);
        }
    }
}

module.exports = TrxController;


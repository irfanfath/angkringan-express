const { Menu } = require('../models');

class MenuController {
    static async addMenu (res,req, next){
        try {
            const input = {
                nama : req.body.nama,
                harga : req.body.harga,
                qty : req.body.qty
            }

            const menu = await Menu.create(input);
            return res.status(201).json(menu);
        } catch(err) {
            return next(err);
        }
    }

    static async getMenu (res, req, next){
        try {
            const menu = await Menu.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            return res.status(200).json(menu)
        }catch(err){
            return next(err)
        }
    }

    static async editMenu(req, res, next) {
        try {
          const id = +req.params.id
          const input = {
            qty: req.body.qty
          }
          
          const menu = await Menu.findByPk(id);
    
          if (menu) {
            const updateMenu = await Menu.update(input, {
              where: {
                id
              }, returning: true
            });
    
            return res.status(200).json(updateMenu[1][0]);
          } else {
            return next({
              status: 404,
              qty: 'NotFound',
              message: 'Menu not found'
            });
          }
        } catch (err) {
          return next(err);
        }  
    }

    static async deleteMenu (req, res, next) {
        try {
          const id = +req.params.id;
    
          const menu = await Menu.destroy({
            where: {
              id
            }
          });
    
          if (menu) {
            return res.status(200).json({ message: 'Menu has deleted successfully' });
          } else {
            return next({
              status: 404,
              name: 'NotFound',
              message: 'Menu not found'
            });
          }
        } catch (err) {
          return next(err);
        }
    }
}

module.exports = MenuController;


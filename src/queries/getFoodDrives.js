const FoodDrive = require('../models/FoodDrive')

const query = ({ attiva }) => {
  if (attiva) {
    return FoodDrive.findOne({
      where: {
        attiva
      }
    })
  } else {
    return FoodDrive.findAll()
  }
}

module.exports = query

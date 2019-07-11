const getReport = require('../queries/getReport')
const getProductTypes = require('../queries/getProductTypes');
const { haveItPlain } = require('../utils');

module.exports = async (req, res) => {
  const { query: { idArea, ...query } } = req;
  if (req.session.user.privileges >= 1) {
    query.idArea = idArea;
  }
  const values = { kg: 0, boxes: 0 };
  const emptyProductsRow = await getProductTypes(query)
    .map(haveItPlain)
    .reduce((obj, { name }) => {
      obj[name] = { ...values };
      return obj;
    }, { total: { ...values } });

  const formatReportRow = ({ products, ...row }) => ({
    ...row,
    products: (products.length && products.reduce((obj, { type, kg, boxes }) => {
      if (!obj[type]) obj[type] = {...values };
      obj[type].kg += kg;
      obj[type].boxes += boxes;
      obj.total.kg += kg;
      obj.total.boxes += boxes;
      return obj;
    }, { total: { ...values } }))
    || emptyProductsRow,
  });
  
  const formatReport = report => report.map(formatReportRow);
  
  return getReport(query)
    .map(haveItPlain)
    .then(formatReport)
    .then(results => res.send(results))
    .catch(error => {
      res.status(500).send({error: error.message})
    })
}

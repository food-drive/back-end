const getReport = require('../queries/getReport')
const getProductTypes = require('../queries/getProductTypes');

const haveitPlain = el => el.get({ plain: true });

module.exports = async (req, res) => {
  const { query: { idArea, ...query } } = req;
  if (req.session.user.privileges >= 1) {
    query.idArea = idArea;
  }

  const emptyProductsRow = await getProductTypes(query)
    .map(haveitPlain)
    .reduce((obj, { name }) => {
      obj[name] = { kg: 0, boxes: 0};
      return obj;
    }, {});

  const formatReportRow = ({ products, ...row }) => ({
    ...row,
    products: (products.length && products.reduce((obj, { type, kg, boxes }) => {
      if (!obj[type]) obj[type] = { kg: 0, boxes: 0 };
      obj[type].kg += kg;
      obj[type].boxes += boxes;
      return obj;
    }, {})) || emptyProductsRow,
  });
  
  const formatReport = report => report.map(formatReportRow);
  
  return getReport(query)
    .map(haveitPlain)
    .then(formatReport)
    .then(results => res.send(results))
    .catch(error => {
      res.status(500).send({error: error.message})
    })
}

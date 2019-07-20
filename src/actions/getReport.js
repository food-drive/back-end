const getReport = require('../queries/getReport');
const getProductTypes = require('../queries/getProductTypes');
const { haveItPlain } = require('../utils');

module.exports = async (req, res) => {
  const { query: { idArea, ...query } } = req;
  if (req.session.user.privileges > 1) {
    query.idArea = idArea;
  }
  const values = { kg: 0, boxes: 0 };

  const totalCol = {
    headerName: 'Totale',
    field: 'products.total.kg',
    colSpan: 2,
    children: [
      { headerName: 'kg', field: 'products.total.kg' },
      { headerName: 'boxes', field: 'products.total.boxes' },
    ],
  };

  const formatReportRow = ({ products, city: { name: cityName, province: { name: provinceName }}, ...row }) => ({
    ...row,
    city: cityName,
    province: provinceName,
    products: (products.length && products.reduce((obj, { type, kg, boxes }) => {
      if (!obj[type]) obj[type] = { ...values };
      obj[type].kg = parseFloat((obj[type].kg + kg).toFixed(2));
      obj[type].boxes += boxes;
      obj.total.kg = parseFloat((obj.total.kg + kg).toFixed(2));
      obj.total.boxes += boxes;
      return obj;
    }, { total: { ...values } }))
    || emptyProductsRow,
  });

  const formatReport = report => report.map(formatReportRow);

  const productTypes = await getProductTypes(query)
  const emptyProductsRow = productTypes
    .map(haveItPlain)
    .reduce((obj, { name }) => {
      obj[name] = { ...values };
      return obj;
    }, { total: { ...values } });

  const report = getReport(query)
    .map(haveItPlain)
    .then(formatReport)

  const header = [
    ...productTypes
      .sort((a, b) => a < b)
      .map(({ name }) => ({
        headerName: name,
        field: `products.${name}.kg`,
        colSpan: 2,
        children: [
          { headerName: 'kg', field: `products.${name}.kg` },
          { headerName: 'scatole', field: `products.${name}.boxes` },
        ],
      })),
    totalCol,
  ]

  return Promise.all([report]).then(([data]) => {
    res.send({
      data,
      header,
    })
  }).catch(error => {
    res.status(500).send({error: error.message})
  });
}

export default (req, res, NextApiResonse) => {
  res.setPreviewData({})
  res.redirect(req.query.route)
}

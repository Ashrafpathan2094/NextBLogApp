export default (req, res, NextApiResonse) => {
  res.clearPreviewData()
  res.end('preview mode disabled')
}

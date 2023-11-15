export function error404Forwarder (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

export function errorDebugMiddleware (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
}

export function errorReleaseMiddleware (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
}

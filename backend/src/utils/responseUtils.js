/*
* @author vantuan_tbtx
*/
export async function responseGetInfo (res, data) {
  if (!data) {
    res.status(400).json({
      status: false,
      message: 'id is not valid'
    })
  } else {
    res.json(data)
  }
}
export async function reponseError (res, err) {
  res.status(400).json({
    status: false,
    message: err.message
  })
}

export function showResultToClient (err, data, res) {
  if (err || data === null) {
    res.json({ success: false, message: err === null ? 'Not found' : err.message })
  } else {
    res.json(data)
  }
}

export const responseResult = (err, data, statusCode, res) => {
  if (err || data === null) {
    res.status(statusCode).json({ success: false, message: err === null ? 'Not found' : err.message })
  } else {
    res.status(statusCode).json(data)
  }
}
export const showResponseToClient = (err, data, statusCode, res) => {
  if (err || data === null) {
    res.status(statusCode).json({ success: false, message: err === null ? 'Not found' : err.message })
  } else {
    res.status(statusCode).json(data)
  }
}

import AdminModel from '../models/AdminModel'
import Pagination from '../utils/pagination'
import bcrypt from '../utils/bcrypt'

const create = async (req) => {
  const password = bcrypt.generate(req.body.password)
  const body = {
    username: req.body.username,
    password: password,
    createdBy: 'root',
    email: req.body.email
  }
  const data = await AdminModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  const total = await AdminModel.countDocuments({})
  const pageUtil = new Pagination(req, total)
  const data = await AdminModel.find({})
    .skip(pageUtil.minIndex)
    .limit(pageUtil.itemPerPage)
  return {
    pagination: pageUtil.getPagination(),
    data: data
  }
}
const getDetail = (req) => {
}
const login = async () => {
  return 'Login'
}
export default {
  login,
  create,
  update,
  remove,
  getList,
  getDetail
}

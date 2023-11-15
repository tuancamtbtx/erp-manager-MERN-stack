/*
* @author vantuan_tbtx
*/
import url from 'url'

export default class Pagination {
  constructor (req, totalItem) {
    const url_parts = url.parse(req.url, true)
    const query = url_parts.query
    // Default page = 1
    this.currentPage = (query.page === undefined ? 1 : parseInt(query.page))
    // Default item_per_page = 10
    this.itemPerPage = (query.item_per_page === undefined ? 10 : parseInt(query.item_per_page))

    this.minIndex = (this.currentPage - 1) * this.itemPerPage
    this.maxIndex = this.currentPage * this.itemPerPage
    this.totalItem = totalItem
  }

  getPagination () {
    return {
      total_item: this.totalItem,
      page: this.currentPage,
      item_per_page: this.itemPerPage,
      min_index: this.minIndex,
      max_index: this.maxIndex
    }
  }
}

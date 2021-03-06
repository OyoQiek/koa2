const logger = require('./log4j')
/**
 * 通用函数
 */

const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, // 参数错误
  USER_ACCOUNT_ERROR: 20001, // 账户或密码错误
  USER_LOGIN_ERROR: 30001, // 用户未登录
  BUSINESS_ERROR: 40001, // 业务请求失败
  AUTH_ERROR: 50001, // 认证失败或token过期
}

module.exports = {
  /**
   * 分页结构封装
   * @param {number} pageNum
   * @param {number} pageSize 
   * @returns 
   */
  pager ({ pageNum = 1, pageSize = 10 }) {
    pageNum *= 1
    pageSize *= 1
    const skipIndex = (pageNum - 1) * pageSize
    return {
      page: {
        pageNum,
        pageSize
      },
      skipIndex
    }
  },
  success (data = '', msg = '', code = CODE.SUCCESS) {
    logger.debug(data)
    return {
      code,
      data,
      msg
    }
  },
  fail (msg = '', data = null, code = CODE.BUSINESS_ERROR) {
    logger.error(msg)
    return {
      code,
      data,
      msg
    }
  },
  CODE
}
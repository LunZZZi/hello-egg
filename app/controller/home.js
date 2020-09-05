'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test1() {
    this.ctx.body = {
      err_no: '0',
    };
  }

  async test2() {
    const { ctx } = this;
    ctx.body = {
      err_no: '0',
      err_msg: '',
      results: [],
    };
  }
}

module.exports = HomeController;

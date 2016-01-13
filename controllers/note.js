'use strict';
const moment = require('moment');

exports.index = (req, res, next) => {

    function start () {
        send_response()
    }

    function send_response () {
        res.render('index', {
            dates: get_dates('2013-12')
        });
    }

    function get_dates(from) {
        let date = moment(from, 'YYYY-MM');
        let dates = [];
        let now = moment();

        while(now.diff(date, 'months', true) > 0) {
            dates.push(date.format('YYYY-MM'));
            date.add(1, 'month');
        }

        return dates;
    }

    start();
};

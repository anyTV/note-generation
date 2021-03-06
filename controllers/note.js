'use strict';
const moment = require('moment');

exports.index = (req, res) => {

    function start () {
        send_response();
    }

    function send_response () {
        res.render('index', {
            dates: get_dates('2013-12')
        });
    }

    function get_dates(from) {
        let min_date = moment(from, 'YYYY-MM');
        let dates = [];
        let now = moment();


        while(min_date.diff(now, 'months', true) <= 0) {
            dates.push({
                selected: moment().subtract(2, 'month').format('YYYY-MM') === now.format('YYYY-MM'),
                value: now.format('YYYY-MM')
            });
            now.subtract(1, 'month');
        }

        return dates;
    }

    start();
};

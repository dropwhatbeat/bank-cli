const prompt = require('prompt-sync')({sight:true});
const {loginClient} = require('./loginClient');
const {splitCommand} = require('./splitCommand');
const {topupClient} = require('./topupClient');
const {payClient} = require('./payClient');

module.exports = {
    prompt, loginClient, splitCommand, topupClient, payClient
};
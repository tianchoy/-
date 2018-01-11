/**
 * 注：区分RSA私钥的类型，有pkcs1和pkcs8。pkcs8格式的私钥主要用于Java中
 
 pkcs1格式：
-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY------

 pkcs8格式：
-----BEGIN PRIVATE KEY-----
-----END PRIVATE KEY-----

 */
var RSA = require('../../utils/wx_rsa.js')
//获取应用实例
var app = getApp()
var Sig = ""
var encStr = ""

Page({
  data: {
    output: '',
    output1: '',
    input: ''

  },
  input_rsa: function (e) {
    this.setData({
      input: e.detail.value
    })
    let v = e.detail.value
  },

  //加密
  jiami: function () {
    var input_rsa = this.data.input;

    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);

    encStr = encrypt_rsa.encrypt(input_rsa)

    encStr = RSA.hex2b64(encStr);

    console.log("加密结果：" + encStr)

    this.setData({
      output: encStr
    })
  },

  //解密

  jiemi: function () {

    var decrypt_rsa = new RSA.RSAKey();
    decrypt_rsa = RSA.KEYUTIL.getKey(privateKey);
    var s = this.data.input;
    var d = RSA.b64tohex(s);
    var c = decrypt_rsa.decrypt(d)
    console.log(c)
    console.log(typeof(c))
  
    this.setData({
      output1: c
    })
  },

  onLoad: function () {
  }
})
var privateKey = '-----BEGIN RSA PRIVATE KEY-----'+
  'MIICXAIBAAKBgQCLMniaFacLWDAvrlkawAWBV / EW3a37kAdtKpGg1BHZ1WwNbHZ2'+
  'z8CAv1Lic311sGz8f0rg3IkefoxPbwXHHi6FaONPagl1jRJV + twINQf1TZvxAg + 7'+
  'OssISNxE7g5 + 1zY6YC/ 45rdfzIWwqmQlSAoP0EYclZtjW7lszSO/ 6dBD2wIDAQAB'+
  'AoGBAJfL4YM / K5yOfnXw7tDiKN7FtW + XLf2RMtgUvR0jR5hDSwNUjdfBdY + xlUTI'+
  'Zz / ptuCgPFr9hTbREFgrnaRoQJe0uBGcE06W6kMwccq01nQi6LFNdS5itjhPWZ2g'+
  'BFCJfNcVx / ckkpjHxOw1wuoMIqRBV / H9o7GjktChgZ6JOwtRAkEAzuLwcoVvikPM'+
  'ZQJosKwJWlb1XSg4zDsP1mmTwYSM1m9m0xtj1oN2zJqxdnKzyybpt5FlHSzj1zN2'+
  '2AT8EbAVSQJBAKw93Xa1Ud2YHbyeK0MIuD8s9/ ubmr8nk9EQ6yyyWRXzshjJs4 / W'+
  'KG2Nbb1498pG5QTvsVJZZyNHPHIsUMJz5AMCQHdHfmv4pNNpvXlrRyK9PXM5eaOp'+
  'If4V + 06adlb3bh/ gAL + sJgayqxbSBYkOHrz9BXkRueN1UzNq95UaYp5sEAkCQHiH'+
  'rkNUrR4ZRa3pLTLyliQ3bq1WfVqI8oqZgUi84VRYPWfVNd9QqOfI0WOGlDerlrX2'+
  'maqbv23TerwWwMjiWksCQFUL9bdBnWH6frQDqH1BJ7vD54hxSS0mP6EEIebc3AtF'+
  'Kkz92E5y4KsDXyy / jitpqtJnM5ARgCGtgwMJ7fPGsWI='+
'-----END RSA PRIVATE KEY-----'

var publicKey = '-----BEGIN PUBLIC KEY-----' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCLMniaFacLWDAvrlkawAWBV / EW'+
  '3a37kAdtKpGg1BHZ1WwNbHZ2z8CAv1Lic311sGz8f0rg3IkefoxPbwXHHi6FaONP'+
  'agl1jRJV + twINQf1TZvxAg + 7OssISNxE7g5+ 1zY6YC/ 45rdfzIWwqmQlSAoP0EYc'+
  'lZtjW7lszSO / 6dBD2wIDAQAB'+
'-----END PUBLIC KEY-----'

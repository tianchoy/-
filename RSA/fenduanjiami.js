var myMap = {};
//塞入键值对
myMap.c = 'User';
myMap.f = 'getWxUser';
myMap.sessionKey = getApp().globalData.session_key;
myMap.iv = res.iv;
myMap.encryptedData = res.encryptedData;
//转换成json对象
var dat = JSON.stringify(myMap);

//加密功能

var jiami = {};
var maxLength = 117;
var lt = "";
var m_data;

if (dat.length > maxLength) {
  lt = dat.match(/.{1,117}/g);
  lt.forEach(function (item,index) {
    //加密数据
    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);
    m_data = encrypt_rsa.encrypt(item)
    m_data = RSA.hex2b64(m_data);

    jiami['data'+index]= m_data

    return;
  });
}
    console.log(jiami)
    console.log('------')

//解密功能

var jiemi = {};
var ct = '';
for(var i in jiami){
  //解密数据
  var decrypt_rsa = new RSA.RSAKey();
  decrypt_rsa = RSA.KEYUTIL.getKey(privateKey);
  var s = jiami[i];
  var d = RSA.b64tohex(s);
  var c = decrypt_rsa.decrypt(d)
  ct += c;
}
var obj = JSON.parse(ct);
console.log(obj)

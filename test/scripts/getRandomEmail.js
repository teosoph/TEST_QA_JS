const endings = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"];
const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

class getRandomEmail {
  rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0;
  }

  getRandomStr(len) {
    var ret = "";
    for (var i = 0; i < len; i++) console.log((ret += symbols[this.rand(0, symbols.length - 1)]));
    return ret;
  }

  getEmail() {
    var a = this.getRandomStr(this.rand(3, 5)),
      b = this.getRandomStr(this.rand(3, 5));
    return a + "." + b + "@" + endings[this.rand(0, endings.length - 1)];
  }
}

module.exports = new getRandomEmail();

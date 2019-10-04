function go() {
    var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!", "add another"];
  
    for (let i = 0; i < messages.length; i++) {
      setTimeout(function () {
        cat.say(messages[i]);
      }, i * 1500);
    }
  }
  
  
  var cat = {
    speech: document.getElementById("speech"),
    cat: document.getElementById("cat"),
    say: function (quip) {
      this.speech.textContent = "" + quip;
      this.cat.textContent = "😸";
      setTimeout(function () {
        this.speech.textContent = "";
        this.cat.textContent = "😼";
      }.bind(this), 1250);
    }
  };
  
  document.getElementById("go").addEventListener("click", function () { go(); });
  
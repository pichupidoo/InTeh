const navigation__button1 = document.getElementById("navigation__button1");
const navigation__button2 = document.getElementById("navigation__button2");
const navigation__button3 = document.getElementById("navigation__button3");
const navigation__button4 = document.getElementById("navigation__button4");
const navigation__katalog1 = document.getElementById("services__button1");
const navigation__katalog2 = document.getElementById("services__button3");
const navigation__katalog3 = document.getElementById("services__button2");
const navigation__katalog4 = document.getElementById("services__button4");
const navigation__katalog5 = document.getElementById("services__button5");
const katal1 = document.getElementById("katal1");
const katal2 = document.getElementById("katal2");
const katal3 = document.getElementById("katal3");

navigation__button1.addEventListener("click", function () {
  navigation__katalog1.scrollIntoView({ behavior: "smooth" });
});

navigation__button2.addEventListener("click", function () {
  navigation__katalog2.scrollIntoView({ behavior: "smooth" });
});

navigation__button3.addEventListener("click", function () {
  navigation__katalog3.scrollIntoView({ behavior: "smooth" });
});

navigation__button4.addEventListener("click", function () {
  navigation__katalog4.scrollIntoView({ behavior: "smooth" });
});

katal1.addEventListener("click", function () {
  navigation__katalog3.scrollIntoView({ behavior: "smooth" })
})

katal2.addEventListener("click", function () {
  navigation__katalog2.scrollIntoView({ behavior: "smooth" })
})

katal3.addEventListener("click", function () {
  navigation__katalog5.scrollIntoView({ behavior: "smooth" })
})


/*async function sendEmail(client_address, message_text) {
  email.send({
    Host: "smtp.elasticemail.com", // хост, где ты зарегался
    Username: "gosharak12345@gmail.com", // почта, с помощью которой ты регался на elastic
    Password: "E94E79B372C780EDC3A85A22422B82FDE0A8", // Пароль твой с сайта
    To: client_address, // Адрес почты, на которую придет почта
    From: "gosharak12345@gmail.com", // Та же самая почта
    Subject: "Attention! New client!", // Заголовок
    Body: message_text,
  }).then(response => {
    // response - ответ от сервера. Если письмо отправильно, то вернет строку 'OK', иначе в response будет описана ошибка
    if (response === 'OK') {
      my_alert.style.display = 'block';
      alert_text.textContent = 'Mail send succesfully!';
      my_alert.classList.remove('error');
      my_alert.classList.remove('warning');
      my_alert.classList.add('success');
      alert_code.textContent = 'Success!';

      form.style.display = 'none';
      close_form();
      setTimeout(close_alert, 5000);
    } else {
      my_alert.style.display = 'block';
      alert_text.textContent = response;
      alert_code.textContent = 'Error!';
      my_alert.classList.remove('warning');
      my_alert.classList.remove('success');
      my_alert.classList.add('error');

      setTimeout(close_alert, 10000);
    }
  })
}

let form = document.querySelector('form');
let btn = document.querySelector('#openModal');
let close = document.querySelector('.close');
let is_close_btn_pressed = false;

let my_alert = document.querySelector('.alert');
let alert_text = document.querySelector('.alert__text');
let close_alert_btn = document.querySelector('.alert_close');
let alert_code = document.querySelector('.alert_code');

let inner = form.children[4];

let name = inner.children[1];
let email = inner.children[2];
let phone = inner.children[3];

function handleForm(event) {
event.preventDefault();
if (is_close_btn_pressed)
return;

if (name.value == '') {
my_alert.style.display = 'block';
alert_text.textContent = 'Enter your name.';
alert_code.textContent = 'Warning!';
my_alert.classList.remove('error');
my_alert.classList.remove('success');
my_alert.classList.add('warning');

name.style = 'border: 2px solid; border-color: red;';
setTimeout(close_alert, 10000);

return;
}

if (email.value == '') {
my_alert.style.display = 'block';
alert_text.textContent = 'Enter your email.';
alert_code.textContent = 'Warning!';
my_alert.classList.remove('error');
my_alert.classList.remove('success');
my_alert.classList.add('warning');

email.style = 'border: 2px solid; border-color: red;';
setTimeout(close_alert, 10000);

return;
}

if (phone.value == '') {
my_alert.style.display = 'block';
alert_text.textContent = 'Enter your phone number.';
phone.style = 'border: 2px solid; border-color: red;';
alert_code.textContent = 'Warning!';
my_alert.classList.add('warning');

return;
}

if (!isNumberValid(phone.value)) {
my_alert.style.display = 'block';
alert_text.textContent = 'Invalid phone number!';
phone.style = 'border: 2px solid; border-color: red;';
alert_code.textContent = 'Warning!';
my_alert.classList.remove('error');
my_alert.classList.remove('success');
my_alert.classList.add('warning');

setTimeout(close_alert, 10000);
return;
}

let addition_info = inner.children[4].value;
let message =
`<div style="background-color: #93d5bd; border-radius: 50px; padding: 15px">
<p style="color: #031d13; text-align: center;">Name: ${name.value}</p>
<p style="color: #031d13; text-align: center;">Email: ${email.value}</p>
<p style="color: #031d13; text-align: center;">Phone number: ${phone.value}</p>
<p style="color: #031d13; text-align: center;">Additional information: ${addition_info}</p>
<img src="https://static.wixstatic.com/media/3f3e1e_b23a52deaa11458c90a912c9be83302e~mv2.png/v1/fill/w_753,h_526,al_c,usm_0.66_1.00_0.01/3f3e1e_b23a52deaa11458c90a912c9be83302e~mv2.png" />
</div>`

sendEmail('gosharak12345@mail.ru', message);
}

form.addEventListener('submit', handleForm);*/

let quantity = document.querySelector(".basket__quantity").textContent;
let sum = document.querySelector(".basket__sum").textContent;
let cost = document.querySelectorAll(".price-list__price");
let buy = document.querySelectorAll(".shop__buy");
let basket = document.querySelector(".basket__img");
let shop = document.querySelector(".blr");
let body = document.querySelector("body");
let sname = document.querySelectorAll(".price-list__name");
let list = document.querySelector(".list");
let l = document.querySelector(".l");
let but = document.querySelector(".but");
let i = 0;
let pos = [];
let cross = [];

function show() {
  shop.classList.add("blur");
  l.style.display = "block";
  console.log(cross.length);

  for (i = 0; i < buy.length; i++) {
    buy[i].disabled = true;
  }
  basket.disabled = true;
  let del = document.querySelectorAll(".cross");
}

basket.addEventListener("click", show);

function fsum(a) {
  quantity = Number(quantity) + 1;
  document.querySelector(".basket__quantity").textContent = quantity;
  sum = Number(sum) + Number(cost[a].textContent);
  document.querySelector(".basket__sum").textContent = sum;

  pos[i] = document.createElement("div");
  list.appendChild(pos[i]);

  pos[i].setAttribute('style', 'display:flex; justify-content: space-between; background-color: #A7A7A7; border-radius: 10px');
  let name = document.createElement("p");
  pos[i].appendChild(name);
  name.textContent = sname[a].textContent;
  name = document.createElement("p");
  pos[i].appendChild(name);
  name.textContent = Number(name.textContent) + 1;
  name = document.createElement("p");
  pos[i].appendChild(name);
  name.textContent = Number(name.textContent) + Number(cost[a].textContent);

  cross[i] = document.createElement("img");
  pos[i].appendChild(cross[i]);
  cross[i].src = "img/close.png";
  cross[i].classList.add("cross");
  cross[i].setAttribute("onclick", "del_elem(" + i + ")");
  i++;
}


function del_elem(b) {
  pos[b].remove();
}

cr = document.querySelector(".cross");

function close_b() {
  l.style.display = "none";
  for (i = 0; i < buy.length; i++) {
    buy[i].disabled = false;
  }
  basket.disabled = false;
  shop.classList.remove("blur");
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  this.classList.add("active");
});
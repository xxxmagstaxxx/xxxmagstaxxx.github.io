const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};
includeHeader.send();
const includeAside = new XMLHttpRequest();
includeAside.open("GET", "aside.html", true);
includeAside.onreadystatechange = function () {
  if (includeAside.readyState === 4 && includeAside.status === 200) {
    const asideHTML = includeHeader.responseText;
    const aside = document.querySelector("#aside");
    aside.insertAdjacentHTML("afterbegin", asideHTML);
  }
};
includeAside.send();
(function () {
  var C = window.PAGINA || {};

  // Data de hoje na barra de topo + ano no rodapé
  var hoje = new Date();
  var dd = String(hoje.getDate()).padStart(2, "0");
  var mm = String(hoje.getMonth() + 1).padStart(2, "0");
  document.querySelectorAll("[data-hoje]").forEach(function (el) { el.textContent = dd + "/" + mm; });
  document.querySelectorAll("[data-ano]").forEach(function (el) { el.textContent = hoje.getFullYear(); });

  // Checkout e parcelas
  // Botões de checkout: o clique sempre passa por redirectWithParams (mantém UTM, fbclid, gclid etc.)
  var checkouts = { completo: C.checkoutCompleto, basico: C.checkoutBasico };
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    var destino = checkouts[a.getAttribute("data-checkout")] || "#";
    a.href = destino;
    a.addEventListener("click", function (e) {
      if (!/^https?:\/\//i.test(destino)) return;
      e.preventDefault();
      redirectWithParams(destino);
    });
  });
  document.querySelectorAll("[data-parcelas]").forEach(function (el) { el.textContent = C.parcelas || 12; });

  // Carrosséis
  var alvo = document.getElementById("carrosseis");
  if (alvo && C.carrosseis) {
    C.carrosseis.forEach(function (c) {
      var bloco = document.createElement("div");
      bloco.className = "carrossel";
      var slides = "";
      for (var i = 1; i <= c.qtd; i++) {
        slides += '<div class="slot slide"><img src="img/' + c.prefixo + "-" + i + '.webp" alt="Mapa ' + i + " — " + c.titulo +
          '" loading="lazy" decoding="async" width="600" height="900" onerror="this.remove()"><span>Mapa ' + i + "</span></div>";
      }
      bloco.innerHTML =
        "<h3>" + c.titulo + "</h3>" +
        '<div class="trilho-box">' +
        '<button class="seta ant" type="button" aria-label="Anterior">‹</button>' +
        '<div class="trilho" tabindex="0">' + slides + "</div>" +
        '<button class="seta prox" type="button" aria-label="Próximo">›</button>' +
        "</div>";
      alvo.appendChild(bloco);
      var trilho = bloco.querySelector(".trilho");
      bloco.querySelector(".ant").addEventListener("click", function () { trilho.scrollBy({ left: -trilho.clientWidth * 0.8, behavior: "smooth" }); });
      bloco.querySelector(".prox").addEventListener("click", function () { trilho.scrollBy({ left: trilho.clientWidth * 0.8, behavior: "smooth" }); });
    });
  }

  // Depoimentos
  var deps = (C.depoimentos || []).filter(function (d) { return d && d.texto; });
  var depBox = document.querySelector("[data-depoimentos]");
  if (depBox && !deps.length) {
    // Espaços reservados até os depoimentos reais serem adicionados no config.js
    deps = [1, 2, 3].map(function (n) { return { texto: "Depoimento " + n + " — aguardando o texto da cliente", nome: "Nome da cliente", detalhe: "idade, profissão", vazio: true }; });
  }
  if (depBox && deps.length) {
    deps.forEach(function (d) {
      var fig = document.createElement("figure");
      if (d.vazio) fig.className = "vazio";
      var foto = d.foto ? '<img class="dep-foto" src="' + d.foto + '" alt="" width="64" height="64" loading="lazy" decoding="async">' : "";
      fig.innerHTML = '<span class="aspas" aria-hidden="true">\u201C</span><blockquote></blockquote><figcaption>' + foto + "<span><b></b><small></small></span></figcaption>";
      fig.querySelector("blockquote").textContent = d.texto;
      fig.querySelector("b").textContent = d.nome || "";
      fig.querySelector("small").textContent = d.detalhe || "";
      depBox.appendChild(fig);
    });
  }

  // Contador até 23:59:59 de hoje
  var h = document.querySelector("[data-h]"), m = document.querySelector("[data-m]"), s = document.querySelector("[data-s]");
  function tick() {
    var agora = new Date();
    var fim = new Date(agora); fim.setHours(23, 59, 59, 999);
    var d = Math.max(0, fim - agora);
    var hh = Math.floor(d / 3600000), mi = Math.floor(d % 3600000 / 60000), se = Math.floor(d % 60000 / 1000);
    h.textContent = String(hh).padStart(2, "0");
    m.textContent = String(mi).padStart(2, "0");
    s.textContent = String(se).padStart(2, "0");
  }
  if (h) { tick(); setInterval(tick, 1000); }
})();

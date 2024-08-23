let xBhttps://github.com/janielly1234

function mostraBolinha() {
  fill('green');
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
if(xBolinha > width || xBolinha < 0) {
  velocidadeXBolinha *= -1;
}
if(yBolinha > height || yBolinha < 0) {
  velocidadeYBolinha *= -1;
}
}

function mostraRaquete() {
  fill('green'); //muda a cor da raquete
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaRaquete() {
  if(keyIsDown(87)) {
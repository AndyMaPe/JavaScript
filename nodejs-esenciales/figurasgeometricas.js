class FigurasGeometrica {
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
  }
}


class Triangulo extends FigurasGeometrica {

  calculoArea() {
    return (this.base * this.altura) / 2;
  }
}

class Cuadrado extends FigurasGeometrica {

  constructor(lado) {
    super();
    this.lado = lado;
  }
  calculoArea() {
    return this.lado * this.lado;
  }
}

class Rectangulo extends FigurasGeometrica {

  calculoArea() {
    return (this.base * this.altura);
  }
}

var cuadrado1 = new Cuadrado(3);
console.log(cuadrado1.calculoArea());
var triangulo1 = new Triangulo(3, 3, 2);
console.log(triangulo1.calculoArea());
var rectangulo1 = new Rectangulo(5, 4);
console.log(rectangulo1.calculoArea());

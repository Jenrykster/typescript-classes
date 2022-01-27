var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircunferencia = areaCircunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
        console.log(Area.areaCircunferencia(10));
        console.log(areaRetangulo(10, 20));
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
/// <reference path="geometriaCirc.ts" />
/// <reference path="geometriaRect.ts" />
console.log(Geometria.Area.areaCircunferencia(2));

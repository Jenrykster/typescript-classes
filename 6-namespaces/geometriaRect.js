"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
        console.log(Area.areaCircunferencia(10));
        console.log(areaRetangulo(10, 20));
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));

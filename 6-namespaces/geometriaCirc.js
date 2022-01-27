"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircunferencia = areaCircunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));

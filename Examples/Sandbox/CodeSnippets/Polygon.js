(function() {
    "use strict";
    /*global Cesium,Sandbox*/

    Sandbox.Polygon = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-72.0, 40.0),
                new Cesium.Cartographic2(-70.0, 35.0),
                new Cesium.Cartographic2(-75.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-68.0, 40.0)
            ]));

            primitives.add(polygon);
        };
    };

    Sandbox.PolygonColor = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-72.0, 40.0),
                new Cesium.Cartographic2(-70.0, 35.0),
                new Cesium.Cartographic2(-75.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-68.0, 40.0)
            ]));

            // The color's alpha component defines the polygon's opacity.
            // 0 - completely transparent.  1.0 - completely opaque.
            polygon.material.color = {
                red : 1.0,
                green : 0.0,
                blue : 0.0,
                alpha : 0.75
            };

            primitives.add(polygon);
        };
    };

    Sandbox.StripePolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.VerticalStripeMaterial({
                repeat : 5.0
            });

            primitives.add(polygon);
        };
    };

    Sandbox.CheckerboardPolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.CheckerboardMaterial({
                lightColor: {
                    red: 1.0,
                    green: 1.0,
                    blue: 0.0,
                    alpha: 0.75
                },
                darkColor: {
                    red: 0.0,
                    green: 1.0,
                    blue: 1.0,
                    alpha: 0.75
                },
                sRepeat : 5,
                tRepeat : 5
            });

            primitives.add(polygon);
        };
    };

    Sandbox.DotPolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.DotMaterial({
                lightColor: {
                    red: 1.0,
                    green: 1.0,
                    blue: 0.0,
                    alpha: 0.75
                },
                darkColor: {
                    red: 0.0,
                    green: 1.0,
                    blue: 1.0,
                    alpha: 0.75
                },
                sRepeat : 5,
                tRepeat : 5
            });

            primitives.add(polygon);
        };
    };

    Sandbox.TieDyePolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.TieDyeMaterial({
                lightColor: {
                    red: 1.0,
                    green: 1.0,
                    blue: 0.0,
                    alpha: 0.75
                },
                darkColor: {
                    red: 1.0,
                    green: 0.0,
                    blue: 0.0,
                    alpha: 0.75
                },
                frequency : (1.0 / 5.0)
            });

            primitives.add(polygon);
        };
    };

    Sandbox.FacetPolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.FacetMaterial({
                lightColor: {
                    red: 0.25,
                    green: 0.25,
                    blue: 0.25,
                    alpha: 0.75
                },
                darkColor: {
                    red: 0.75,
                    green: 0.75,
                    blue: 0.75,
                    alpha: 0.75
                },
                repeat : 10.0
            });

            primitives.add(polygon);
        };
    };

    Sandbox.BlobPolygonMaterial = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.BlobMaterial({
                repeat : 10.0
            });

            primitives.add(polygon);
        };
    };

    Sandbox.ErosionPolygonAnimation = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.CheckerboardMaterial({
                sRepeat : 5,
                tRepeat : 5
            });
            primitives.add(polygon);

            scene.getAnimations().addProperty(polygon, "erosion", 0.0, 1.0);
        };
    };

    Sandbox.AlphaPolygonAnimation = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.CheckerboardMaterial({
                sRepeat : 5,
                tRepeat : 5
            });
            primitives.add(polygon);

            scene.getAnimations().addAlpha(polygon.material, 0.0, 0.7);
        };
    };

    Sandbox.HeightPolygonAnimation = function (scene, ellipsoid, primitives) {
        this.code = function () {
            var polygon = new Cesium.Polygon(undefined);
            polygon.setPositions(ellipsoid.cartographicDegreesToCartesians([
                new Cesium.Cartographic2(-80.0, 30.0),
                new Cesium.Cartographic2(-70.0, 30.0),
                new Cesium.Cartographic2(-70.0, 40.0),
                new Cesium.Cartographic2(-80.0, 40.0)
            ]));
            polygon.material = new Cesium.CheckerboardMaterial({
                sRepeat : 5,
                tRepeat : 5
            });
            primitives.add(polygon);

            scene.getAnimations().addProperty(polygon, "height", 2000000.0, 0.0);
        };
    };

}());
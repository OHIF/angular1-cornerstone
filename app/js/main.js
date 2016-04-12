var app = angular.module("cornerstoneApp", []);

app.directive('cornerstoneImage', function () {

    return{
        restrict: 'E',
        templateUrl: 'views/cornerstoneImage.html',
        scope: {
          imageId: '@imageid'
        },
        link: function(scope, element, attributes) {
            var imageId = scope.imageId;
            var cornerstoneContainer = element[0];
            var cornerstoneElement = cornerstoneContainer.querySelector("#dicomImage");
            cornerstone.enable(cornerstoneElement);
            cornerstone.loadImage(imageId).then(function (image) {
                cornerstone.displayImage(cornerstoneElement, image);
                cornerstoneTools.mouseInput.enable(cornerstoneElement);
                cornerstoneTools.mouseWheelInput.enable(cornerstoneElement);

                // Enable all tools we want to use with this element
                cornerstoneTools.wwwc.activate(cornerstoneElement, 1); // ww/wc is the default tool for left mouse button
                cornerstoneTools.pan.activate(cornerstoneElement, 2); // pan is the default tool for middle mouse button
                cornerstoneTools.zoom.activate(cornerstoneElement, 4); // zoom is the default tool for right mouse button
                cornerstoneTools.zoomWheel.activate(cornerstoneElement); // zoom is the default tool for middle mouse wheel
            });
        }
    };

});
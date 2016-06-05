angular.module('dcylabsVerticalButton', []).directive('dcylabsVerticalButton', function() {
    return {
        restrict: "C",
        link: function(scope, element, attrs){
            var $element = jQuery(element);
            var $wrapper = $element.find('.vertical-wrapper');
            var previousWidth = -1;
            var previousHeight = -1;
            var newWidth = -1;
            var newHeight = -1;
            scope.$watch(
                function(){
                    return $wrapper.width();
                },
                function(){
                    newWidth = $wrapper.width();
                    newHeight = -1;
                    jQuery('.btn', $wrapper).each(function(){
                        if(jQuery(this).height() > newHeight){
                            newHeight = jQuery(this).height();
                        }
                    });
                    if(newWidth !== previousWidth){
                        $element.width(newWidth);
                        previousWidth = newWidth;
                    }
                    if(newHeight !== previousHeight){
                        $element.height(newHeight);
                        previousHeight = newHeight;
                    }
                }
            );
        }
    };
});
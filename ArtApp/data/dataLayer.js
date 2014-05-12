window.RealtorApp = window.RealtorApp || {};
window.RealtorApp.data = window.RealtorApp.data || {};

$(function() {
    var TIMEOUT = 1000;

    
    function getPropertiesByCoordinates(latitude, longitude) {
        var result = $.Deferred();
        setTimeout(function() {
            var properties = [];
            $.each(RealtorApp.data.SampleData, function(_, value) {
                properties.push(new RealtorApp.data.PropertyViewModel(value));
            });
            result.resolve(properties);
        }, TIMEOUT);
        return result.promise();
    }

    function getPropertiesByPlaceName(name) {
        var result = $.Deferred();
        setTimeout(function () {
            var properties = [];
            $.each(RealtorApp.data.SampleData, function(_, value) {
                properties.push(new RealtorApp.data.PropertyViewModel(value));
            });
            result.resolve(properties);
        }, TIMEOUT);
        return result.promise();
    }

    function getPropertyInfo(id) {
        var current = null;
        $.each(RealtorApp.data.SampleData, function(_, value) {
            if(value.ID == id)
                current = value;
        });

        var result = $.Deferred();
        setTimeout(function () {
            result.resolve(new RealtorApp.data.PropertyViewModel(current));
        }, TIMEOUT);
        return result.promise();
    }

    function getBestOffers(take) {
        function alea(min, max) {return (Math.floor((max-min)*Math.random())+min); }

        var nbimage = 10;

        function getrandom()
        {
            var tmp = -1;
            do
            {
                tmp = alea(0,nbimage);
            }while(nb1 == tmp || nb2 == tmp || nb3 == tmp || nb4 == tmp || nb5 == tmp)
            return tmp;
        }

        var nb1 = -1;
        var nb2 = -1;
        var nb3 = -1;
        var nb4 = -1;
        var nb5 = -1;

        nb1 = getrandom();
        nb2 = getrandom();
        nb3 = getrandom();
        nb4 = getrandom();
        nb5 = getrandom();

        var result = $.Deferred(),
            bestOffersList = [nb1, nb2, nb3, nb4, nb5],
            topProperties = [];
        if (!take || isNaN(take) || take > bestOffersList.length)
            take = bestOffersList.length;

        setTimeout(function () {
            for (var i = 0; i < take; i++)
                topProperties.push(new RealtorApp.data.PropertyViewModel(RealtorApp.data.SampleData[bestOffersList[i]]));
            result.resolve(topProperties);
        }, TIMEOUT);
        return result.promise();
    }

    $.extend(RealtorApp.data, {
        getPropertiesByCoordinates: getPropertiesByCoordinates,
        getPropertiesByPlaceName: getPropertiesByPlaceName,
        getPropertyInfo: getPropertyInfo,
        getBestOffers: getBestOffers
    });
})
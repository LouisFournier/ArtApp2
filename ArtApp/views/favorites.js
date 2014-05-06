RealtorApp.Favorites = function (params) {

    var viewModel = {
        noDataText: 'Vous n\'avez pas encore mis de tableau en favoris.',
        favoritesItemClick: function (item) {
            RealtorApp.app.navigate("Details/" + item.model.ID);
        }
    };

    return viewModel;
};
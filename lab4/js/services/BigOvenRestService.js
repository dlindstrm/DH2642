var BigOvenRestService = function() {
  var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
  var endpoint = "http://api.bigoven.com/";
  var searchRequest = null;
  var getRequest = null;

  this.search = function(titleKeyWord, anyKeyword, callback) {
    var _this = this;

    this.searchRequest = $.getJSON(
      endpoint+"recipes",
      {
        api_key: apiKey,
        title_kw: titleKeyWord,
        any_kw: anyKeyword,
        pg: 1,
        rpp: 50
      }
    )
    .done(function(data) {
        var result = [];
        var len = data.Results.length;
        if(len === 0) {
          return callback("Didn't find any result that matched you key.", result);
        }
        $.each(data.Results, function( index, item ) {
          result.push(_this.formatRecipeToWhatWeLike(item))
          if(index == len - 1) {
            return callback(null, result);
          }
        });
    })
    .fail(function(error) {
      return callback("Lost connection. Please check you wifi and try again.", []);
    });
  }

  this.getById = function(id) {
    var _this = this;

    if(this.getRequest) {
      this.getRequest.abort();
    }

    this.getRequest = $.getJSON(
      endpoint+"recipe/"+id,
      {
        api_key: apiKey,
      }
    )
    .done(function(data) {
        var result = _this.formatRecipeToWhatWeLike(data);
        return callback(null, result);
    })
    .fail(function(error) {
      return callback("Lost connection. Please check you wifi and try again.", []);
    });
  }

  this.formatRecipeToWhatWeLike = function(recipe) {
    return { 
      'id':recipe.RecipeID,
      'name':recipe.Title,
      'type':recipe.Category,
      'image': recipe.ImageURL,
      'description': recipe.Instructions !== null ? recipe.Instructions : "",
      'ingredients': recipe.Ingredients !== null ? recipe.Ingredients : [] 
    };
  }
}
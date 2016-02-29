var BigOvenRestService = function() {
  var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
  var endpoint = "http://api.bigoven.com/";

  this.search = function(keyword, callback) {
    var _this = this;
    $.getJSON(
      endpoint+"recipes",
      {
        api_key: apiKey,
        any_kw: keyword,
        pg: 1,
        rpp: 50
      }
    )
    .done(function(data) {
        var result = [];
        var len = data.length;
        $.each(data, function( index, val ) {
          result.push(_this.formatRecipeToWhatWeLike(val))
          if(index == len - 1) {
            return callback(false, result);
          }
        }
    })
    .fail(function(error) {
      return callback(true, []);
    });
  }

  this.getById = function(id) {
    var _this = this;
    $.getJSON(
      endpoint+"recipe/"+id,
      {
        api_key: apiKey,
      }
    )
    .done(function(data) {
        var result = _this.formatRecipeToWhatWeLike(data);
        return callback(false, result);
    })
    .fail(function(error) {
      return callback(true, []);
    });
  }

  this.formatRecipeToWhatWeLike = function(recipe) {
    console.log(recipe);
  }
}
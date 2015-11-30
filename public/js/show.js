console.log('show JS loaded!');

var deleteCrawl = function (deleteId) {
    $.ajax({
      method: "DELETE",
      url: "/crawls/" + deleteId
    }).success(function (data) {
      window.location.href = "http://localhost:3000";
    });
};

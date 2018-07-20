/**
 * Trata de todos os métodos de exibição dinâmica, como a lista de cursos e a troca de telas
 * Os nomes e comandos estão bem simples, por isso não são comentados linha a linha
 */

var view = {
    list_courses: function(courses) {
        console.log(courses)
        $("#courses").html("")
        for(courseIndex in courses) {
            courses[courseIndex].banner
            $("#courses").append('\
                <div class="col-md-4">\
                    <div class="card mb-4 box-shadow">\
                        <div class="card-img-top" style="height:200px;background:url(' + courses[courseIndex].banner + ');background-size:cover"></div>\
                        <div class="card-body">\
                        <p class="card-text">' + courses[courseIndex].title + '</p>\
                        <p class="text-secondary">' + courses[courseIndex].teachers_names + '</p>\
                        <div class="d-flex justify-content-between align-items-center">\
                            <a href="" class="btn btn-primary" role="button">VER CONTEÚDO</a>\
                            <small class="text-muted">' + courses[courseIndex].category + '</small>\
                        </div>\
                        </div>\
                    </div>\
                    </div>')
        }
    },

    show_error: function(error) {
        $("#courses").html("<h1>Ocorreu um erro.</h1><p>" + error + "</p>")
    },

    show_loading: function() {
        $("#courses").html("<img src='assets/images/loading.gif'/>")
    }
}
/**
 * Trata de todos os métodos de exibição dinâmica, como a lista de cursos e a troca de telas
 * Os nomes e comandos estão bem simples, por isso não são comentados linha a linha
 */

var view = {
    list_courses: function(courses) {
        $("#cursos").html("")
        for(courseIndex in courses) {
            courses[courseIndex].banner
            $("#cursos").append('\
                <div class="col-md-4 fade-in">\
                    <div class="card mb-4 box-shadow">\
                        <div class="card-img-top" style="height:200px;background:url(' + courses[courseIndex].banner + ');background-size:cover"></div>\
                        <div class="card-body">\
                        <p class="card-text">' + courses[courseIndex].title + '</p>\
                        <p class="text-secondary">' + courses[courseIndex].teachers_names + '</p>\
                        <div class="d-flex justify-content-between align-items-center">\
                            <a href="curso.html#' + courses[courseIndex].id + '" class="btn btn-primary" role="button">VER CONTEÚDO</a>\
                            <small class="text-muted">' + courses[courseIndex].category + '</small>\
                        </div>\
                        </div>\
                    </div>\
                    </div>')
        }
    },

    show_error: function(error) {
        $("#cursos").html("<h1>Ocorreu um erro.</h1><p>" + error + "</p>")
    }
}
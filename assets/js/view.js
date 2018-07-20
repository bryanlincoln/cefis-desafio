/**
 * Trata de todos os métodos de exibição dinâmica, como a lista de cursos e a troca de telas
 * Os nomes e comandos estão bem simples, por isso não são comentados linha a linha
 */

var view = {
    list_courses: function(courses) {
        console.log(courses)
        $("#courses").html("")
        for(courseIndex in courses) {
            $("#courses").append("<h2>" + courses[courseIndex].title + "</h2>")
        }
    },

    show_error: function(error) {
        $("#courses").html("<h1>Ocorreu um erro.</h1><p>" + error + "</p>")
    },

    show_loading: function() {
        $("#courses").html("<img src='assets/images/loading.gif'/>")
    }
}
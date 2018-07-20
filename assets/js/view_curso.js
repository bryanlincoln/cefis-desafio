/**
 * Trata de todos os métodos de exibição dinâmica, como a lista de cursos e a troca de telas
 * Os nomes e comandos estão bem simples, por isso não são comentados linha a linha
 */

var view = {
    set_details: function(details) {
        console.log(details)
        $("title").html(details.title + " - CEFIS")
        $("#nome-curso").html(details.title)
        $("#sub-curso").html(details.subtitle)
        $("#cover").css("background-image", "url(" + details.banner + ")")
        $("#professores-curso").html(details.teachers_names)
        $("#descricao-curso").html(details.resume)
        $("#objetivo-curso").html(details.goal)
        $("#trailer").html(details.video_divulgacao)
        
        $("#classes").html("")
        if(details.classes.length > 0) {
            $("#class-count").html(details.classes.length)
            for(classIndex in details.classes) {
                $("#classes").append('\
                    <li class="list-group-item d-flex justify-content-between lh-condensed class" onclick="location.href=\'' + details.classes[classIndex].video.mp4 + '\'">\
                        <div>\
                            <img src="' + details.classes[classIndex].thumbnail_url + '" class="thumbnail float-left"/>\
                            <h6 class="my-0 class-name">' + details.classes[classIndex].title + '</h6>\
                        </div>\
                        <span class="text-muted">' + details.classes[classIndex].duration + '</span>\
                        </a>\
                    </li>')
            }
        } else {
            $("#class-count").html("Nenhuma disponível")
        }
    },

    list_courses: function(courses) {
        console.log(courses)
        $("#courses").html("")
        for(courseIndex in courses) {
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
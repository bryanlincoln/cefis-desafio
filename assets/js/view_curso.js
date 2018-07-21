/**
 * Trata de todos os métodos de exibição dinâmica, como a lista de cursos e a troca de telas
 * Os nomes e comandos estão bem simples, por isso não são comentados linha a linha
 */

var view = {
    set_details: function(details) {
        $("title").html(details.title + " - CEFIS")
        $("#nome-curso").html(details.title)
        $("#sub-curso").html(details.subtitle)
        $("#cover").css("background-image", "url(" + details.banner + ")")
        $("#professores-curso").html(details.teachers_names)
        $("#descricao-curso").html(details.resume)
        $("#objetivo-curso").html(details.goal)
        $("#trailer").html(details.video_divulgacao)
        $("#categoria-curso").html(details.category)
        
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
}
import $ from 'jquery'

//Array que contém as funções que serão chamadas após um html ser carregado com sucesso
const loadHtmlSuccessCallbacks = []

//Inclui função no array de callbacks, caso a função ainda não esteja presente no array
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()
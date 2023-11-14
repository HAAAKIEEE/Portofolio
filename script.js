function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const massage = $("#inp-massage")

    if(!$(email).val()){
        alert("Email is Requirt")
    }
    else if(!$(subject).val()){
        alert("Subject is Requirt")
    }
    else if(!$(massage).val()){
        alert("Massage is Requirt")
    }
    else{
       
        alert("Form Submited")
        $(email).val("")
        $(subject).val("")
        $(massage).val("")
    }
}
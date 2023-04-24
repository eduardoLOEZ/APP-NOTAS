

//renderizar el layout del homepage
exports.homepage = async(req,res)=>{
    const locals= {
        title: "notes app",
        description: "notes"
    }

    res.render("index", {
        locals,
        layout: "../views/layouts/front-page.ejs"
    })
}


//renderizar la pagina de about
exports.about= async(req,res)=>{
    const locals= {
        title: "about. nodejs notes",
        description: "about the app"
    }
    res.render("about", locals)

}
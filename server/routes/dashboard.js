const express= require("express")
const router= express.Router()
const dashboardController= require("../controllers/dashboardController")
const { isLoggedIn }= require("../middleware/checkAuth")
// Middleware personalizado para verificar si el usuario está autenticado

// Rutas del dashboard
//middleware para que no usen el endpoint dashboard sin haber iniciado sesion
router.get("/dashboard", isLoggedIn, dashboardController.dashboard);
router.get("/dashboard/item/:id", isLoggedIn, dashboardController.dashboardViewNote)
router.put("/dashboard/item/:id", isLoggedIn, dashboardController.dashboardUpdateNote)
router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNoteSubmit)
router.delete("/dashboard/item-delete/:id", isLoggedIn, dashboardController.dashboardDeleteNote)

module.exports = router;




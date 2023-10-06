const HomeController = (req, res) => {
    res.render('layout',{ data:{ title: 'Home', page:'Home' }});
}

export default HomeController;

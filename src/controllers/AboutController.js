const AboutController = (req, res) => {
    res.render('layout',{ data:{ title: 'About' , page:'About'}});
}

export default AboutController;
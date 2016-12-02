var model = require("../model/models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render("index.html");
    });
    app.get('/blog', function (req, res) {
        model.blog.find({}, (err, data) => {
            if (err) {
                return res.json({ status: false, message: err.message });
            }
            res.json({ status: true, data: data });
        });
    });

    app.get('/blog/:id', function (req, res) {
        if (req.params.id) {
            model.blog.findById(req.params.id, (err, data) => {
                if (err) return res.json({ status: false, message: err.message });
                res.json({ status: true, data: data });
            });
        }
    });

    app.post('/blog', function (req, res) {
        model.blog.create(req.body, (err, data) => {
            if (err) return res.json({ status: false, message: err.message });
            return res.json({ status: true, message: "added successfully", data: data });
        });
    });

    app.put('/blog', function (req, res) {
        model.blog.update({ _id: id }, { $set: { comments: 'large' } }, (err, data) => {

        });
    });
    //comment
    app.post('/comment', function (req, res) {
        var body = req.body;
        var comment = {
            body: body.body,
            user: body.user,
            image: body.image
        };
        model.blog.findOneAndUpdate({ _id: body.id }, { $push: { comments: comment } }, (err, data) => {
            if (err) return res.json({ status: false, message: err.message });
            return res.json({ status: true, message: "saved", data: data });
        });
    });

    //category
    app.get('/category', function (req, res) {
        model.category.find({}, (err, data) => {
            if (err) return res.json({ status: false, message: err.message });
            return res.json({ status: true, data: data });
        });
    });
    app.post('/category', function (req, res) {

        if (req.body.name == "") {
            return res.json({ status: false, message: "please enter category" });
        }

        model.category.create({ name: req.body.name }, (err, data) => {
            if (err) return res.json({ status: false, message: err.message });
            return res.json({ status: true, message: "added successfully", data: data });
        });

    });

}
exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', "Write a title").notEmpty();
    req.check('title', "Title length between 4 and 150").isLength({
        min: 4,
        max: 150
    });
    // body
    req.check('body', "Write a body").notEmpty();
    req.check('body', "Body between 4 and 2000").isLength({
        min: 4,
        max: 2000
    });
    // check errors
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    };
    // proceed to next middleware
    next();
}
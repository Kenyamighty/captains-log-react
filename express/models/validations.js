//validations validates incoming data and models holds the data
const validateURL = (req, res, next) => {
    if (
      req.body.url.substring(0, 7) === "http://" ||
      req.body.url.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .send(`Oops, you forgot to start your url with http:// or https://`);
    }
  };
  // now this validation checks if the url entered starts w/ http or https
  
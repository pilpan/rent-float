export default function authCheck(req, res, next) {
  if (!req.session.userId) {
    console.log(1);
    next();
  } else {
    console.log(2);
    res.redirect('/');
  }
}

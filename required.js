module.exports = (req, props) => new Promise((resolve, reject) => {
  if (props.length === props.filter(p => req.body[p]).length) {
    resolve();
  } else {
    reject(`The following fields are required: ${props.join(', ')}`);
  }
});

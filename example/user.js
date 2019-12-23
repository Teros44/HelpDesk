module.exports = {
  get
}

const SELECT_USER = 'select id, login, admin, UserName from `user` where login = ? and `password` = sha2(?, 512)';
const SECRET = 'Weeir87325';

function toUser(p) {
  return {
    id: p.id,
    login: p.login,
    isAdmin: p.admin[0] > 0,
    userName: p.UserName
  };
}

function isInt(value) {
  if (isNaN(value)) return false;
  let x = parseFloat(value);
  return (x | 0) === x;
}

// Load group ids, titles and status
async function get(pool, loginInfo) {
  const connection = await pool.getConnection();
  try {
    var groups = await connection.query(SELECT_USER, [
      loginInfo.user,
      loginInfo.password + loginInfo.user + SECRET
    ]);
    return groups[0].map(g => toUser(g));
  } finally {
    connection.release();
  }
}

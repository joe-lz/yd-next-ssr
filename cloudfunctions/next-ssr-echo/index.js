const cloud = require('@cloudbase/node-sdk');

exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });
  const db = app.database();

  if (event.queryStringParameters && event.queryStringParameters.page === 'contact') {
    const res = await getcontact(db);
    return res;
  }
  if (event.queryStringParameters && event.queryStringParameters.page === 'index') {
    const res = await getindex(db);
    return res;
  }
  if (event.queryStringParameters && event.queryStringParameters.page === 'invest') {
    const res = await getinvest(db, event.queryStringParameters.id);
    return res;
  }

  if (event.queryStringParameters && event.queryStringParameters.page === 'investType') {
    const res = await getinvestType(db);
    return res;
  }

  if (event.queryStringParameters && event.queryStringParameters.page === 'team') {
    const res = await getteam(db);
    return res;
  }

  if (event.queryStringParameters && event.queryStringParameters.page === 'links') {
    const res = await getlinks(db);
    return res;
  }
  return {
    event,
    envId: cloud.parseContext(context).namespace,
  };
};

// 获取联系方式
async function getcontact(db) {
  const collection = db.collection('official_contact');
  const res = await collection.where({}).get();
  return res;
}

// 获取联系方式
async function getindex(db) {
  const collection = db.collection('official_index');
  const res = await collection.where({}).get();
  return res;
}

// 获取invest
async function getinvest(db, id) {
  const collection = db.collection('official_invest');
  let res = null;
  if (id) {
    res = await collection.where({ type: id }).get();
  } else {
    res = await collection.where({}).orderBy('sort', 'desc').get();
  }
  return res;
}

// 获取project_type
async function getinvestType(db) {
  const collection = db.collection('project_type');
  const res = await collection.where({}).get();
  return res;
}

// 获取team
async function getteam(db) {
  const collection = db.collection('official_team');
  const res = await collection.where({}).get();
  return res;
}

// 获取 link
async function getlinks(db) {
  const collection = db.collection('official_links');
  const res = await collection.where({}).orderBy('sort', 'desc').get();
  return res;
}

const cloud = require("@cloudbase/node-sdk");

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
    const res = await getinvest(db);
    return res;
  }

  if (event.queryStringParameters && event.queryStringParameters.page === 'investType') {
    const res = await getinvestType(db);
    return res;
  }
  return {
    event,
    envId: cloud.parseContext(context).namespace
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
async function getinvest(db) {
  const collection = db.collection('official_invest');
  const res = await collection.where({}).get();
  return res;
}

// 获取project_type
async function getinvestType(db) {
  const collection = db.collection('project_type');
  const res = await collection.where({}).get();
  return res;
}
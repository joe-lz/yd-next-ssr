import { IndexReq } from '../../requests/index';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result_indexArr = await IndexReq.getindex();

    result_indexArr.slice(2, 0, { type: 'honor' })

    const result_contact = await IndexReq.getContact();

    const result_honer = await IndexReq.gethoner();

    res.status(200).json({
      result_indexArr,
      result_contact,
      result_honer,
    });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}

import { mockApi } from '../src/utils/config';
const { index, knowledge } = mockApi;
module.exports = {
  [`GET ${index.test}`](req, res) {
    // const { query } = req

    res.status(200).json({
      code: 'S000000',
      data: {
        test: '11111',
      },
      msg: '请求成功！',
    });
  },
  [`GET ${knowledge.tree}`](req, res) {
    // const { query } = req
    const x = 3;
    const y = 2;
    const z = 1;
    const gData = [];

    const generateData = (_level, _preKey, _tns) => {
      const preKey = _preKey || '0';
      const tns = _tns || gData;

      const children = [];
      for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
          children.push(key);
        }
      }
      if (_level < 0) {
        return tns;
      }
      const level = _level - 1;
      children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
      });
    };
    generateData(z);

    res.status(200).json({
      code: 'S000000',
      data: gData,
      msg: '请求成功！',
    });
  },
};

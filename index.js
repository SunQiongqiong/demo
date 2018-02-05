
/*现在要求实现一个getPath(json,id)函数，针对这样的一段JSON和一个给定的id，返回一个内容为id对应的各级元素的id的List或者数组。例如对于id=95，要求返回[0,32,95]。*/
var json = {data:[
  {
    name: '根目录',
    level: 0,
    id: '0',
    children: [
      { name: 'OSX 10.11壁纸', id: '1', level: 1, children: [] },
      {
        name: 'ZAS单点登录',
        id: '2',
        level: 1,
        children: [
          { name: 'ZAS1.x', id: '3', level: 2, children: [] },
          { name: 'ZAS2.x', id: '19', level: 2, children: [] },
          { name: '其他', id: '31', level: 2, children: [] },
        ],
      },
      {
        name: 'ZCMS内容管理',
        id: '32',
        level: 1,
        children: [
          { name: '2.x文档', id: '33', level: 2, children: [] },
          { name: '产品开发管理', id: '37', level: 2, children: [] },
          { name: '合同文本', id: '65', level: 2, children: [] },
          { name: '售前文档', id: '66', level: 2, children: [] },
          { name: '培训手册', id: '73', level: 2, children: [] },
          { name: '宣传', id: '80', level: 2, children: [] },
          { name: '开发手册', id: '82', level: 2, children: [] },
          { name: '操作手册', id: '83', level: 2, children: [] },
          { name: '用户反馈', id: '91', level: 2, children: [] },
          { name: '部署文档', id: '95', level: 2, children: [] },
        ],
      },
      { name: 'ZDeveloper', id: '97', level: 1, children: [] },
      {
        name: 'ZECM系统文档',
        id: '98',
        level: 1,
        children: [
          { name: 'icon', id: '99', level: 2, children: [] },
          { name: '客户端', id: '100', level: 2, children: [] },
          { name: '客户端图片源文件', id: '102', level: 2, children: [] },
          { name: '界面设计', id: '105', level: 2, children: [] },
        ],
      },
      {
        name: 'ZExam题库',
        id: '108',
        level: 1,
        children: [{ name: '参考资料', id: '109', level: 2, children: [] }],
      },
      {
        name: 'ZPortal企业门户',
        id: '112',
        level: 1,
        children: [
          { name: '参考资料', id: '113', level: 2, children: [] },
          { name: '报价', id: '114', level: 2, children: [] },
        ],
      },
      {
        name: 'ZSCK素材库',
        id: '115',
        level: 1,
        children: [
          { name: '医学素材库截图', id: '116', level: 2, children: [] },
          { name: '泽元多媒体素材库截图', id: '117', level: 2, children: [] },
        ],
      },
      { name: 'ZSearch高级检索', id: '118', level: 1, children: [] },
      {
        name: 'ZShop网上商城',
        id: '119',
        level: 1,
        children: [
          { name: '2.x文档', id: '120', level: 2, children: [] },
          { name: '家家购药网', id: '121', level: 2, children: [] },
          { name: '支付接口', id: '122', level: 2, children: [] },
          { name: '电子商城白皮书', id: '221', level: 2, children: [] },
        ],
      },
    ],
  }
]}

function getPath (array, id) {
  var result = [];
  array.forEach(function(item0) {
    if (item0.id === id) {
      result = [item0.id]
    } else {
      item0.children.forEach(function(item1) {
        if (item1.id === id) {
          result = [item0.id, item1.id]
        } else {
          item1.children.forEach(function(item2) {
            if (item2.id === id) {
              result = [item0.id, item1.id, item2.id]
            }
          });
        }
      });
    }
  });

  return result;
}
console.log(getPath(json.data, '95'))
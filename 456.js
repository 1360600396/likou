/**
 * 数组转树形结构
 * @param {array} list 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
function arrayToTreeV2(list, root) {
  const result = [] // 用于存放结果
  const map = {} // 用于存放 list 下的节点

  // 遍历 list
  for (const item of list) {
    // 1. 获取节点的 id 和 父 id
    const { id, parent_id } = item // ES6 解构赋值

    // 2. 将节点存入 map
    if (!map[id]) map[id] = {}

    // 3. 根据 id，将节点与之前存入的子节点合并
    map[id] = map[id].children
      ? { ...item, children: map[id].children }
      : { ...item }

    // 4. 如果是根节点，存入 result
    if (parent_id === root) {
      result.push(map[id])
    } else {
      // 5. 反之，存入父节点
      if (!map[parent_id]) map[parent_id] = {}
      if (!map[parent_id].children) map[parent_id].children = []
      map[parent_id].children.push(map[id])
    }
  }

  // 将结果返回
  return result
}
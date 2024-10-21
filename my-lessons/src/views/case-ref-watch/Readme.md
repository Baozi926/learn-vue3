# 监听Ref变化

## 为什么我watch一个ref但是监听不到变化

使用 watch 监听变化时，应该 watch 对应的.value 而不是 ref 本身，否则监听不到变化

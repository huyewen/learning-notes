#### 索引类型

在 Mongoose（一个 MongoDB 驱动和对象模型工具）中，索引类型有多种，可以根据数据的特性和查询需求选择适当的类型。以下是一些常见的索引类型：

1. 单键索引（Single Field Index）：

```
const schema = new Schema({ fieldName: { type: String, index: true } });
```
这将在 fieldName 字段上创建一个默认的升序单键索引。

2. 复合索引（Compound Index）：

```
const schema = new Schema({ name: { type: String, index: true }, age: { type: Number, index: true } });
```
这将在 name 和 age 字段上创建一个复合索引，可以根据这两个字段进行查询。

3. 文本索引（Text Index）：

```
const schema = new Schema({ content: { type: String, index: 'text' } });
```
这将在 content 字段上创建一个文本索引，用于全文搜索。

4. 哈希索引（Hashed Index）：

```
const schema = new Schema({ email: { type: String, index: 'hashed' } });
```
这将在 email 字段上创建一个哈希索引，可以用于敏感数据的索引。

5. 2D 索引（2D Index）：

```
const schema = new Schema({ loc: { type: [Number], index: '2d' } });
```
这将在 loc 字段上创建一个二维地理空间索引，用于地理坐标。

6. 2D 球面索引（2dsphere Index）：

```
const schema = new Schema({ loc: { type: [Number], index: { type: '2dsphere' } } });
```
这将在 loc 字段上创建一个二维球面索引，用于球面地理坐标。

这只是一些常见的示例，Mongoose 提供了丰富的索引选项，可以根据需要进行定制，包括唯一索引、复合唯一索引、稀疏索引等。选择适当的索引类型取决于您的具体数据和查询模式。
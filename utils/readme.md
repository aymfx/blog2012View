## 日志

type：

"type":"console"，即为控制台打印，多数用于开发测试。

"type":"file"，表示日志输出为普通文件，在此种配置下日志会输出到目标文件夹的目标文件中，并会随着文件大小的变化自动份文件.。

"type":"dateFile"，表示是输出按时间分文件的日志，在此种配置下,日志会输出到目标目录下，并以时间格式命名，随着时间的推移，以时间格式命名的文件如果尚未存在，则自动创建新的文件.。

filename：日志文件路径。

maxLogSize：只在 type:file 模式有效，表示文件多大时才会创建下一个文件（xxx.log.1 之类）单位是字节，实际设置时具体的值根据业务来定,但是不推荐大于 100Mb.。

pattern：只在 type:dateFile 模式有效，表示一个文件的时间命名模式，在生成文件中会依照 pattern 配置来在 filename 的文件结尾追加一个时间串来命名文件。

alwaysIncludePattern：只在 type:dateFile 模式有效，这个配置为 ture.即最终的日志路径文件名为 filename+pattern

backups：只在 type:file 模式有效，表示备份的文件数量，如果文件过多则会将最旧的删除。

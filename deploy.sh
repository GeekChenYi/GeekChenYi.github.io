#!/usr/bin/env sh

# 打包编译
# npm run build
# 常量定义
distDir='/www/web/site/blog/dist'
TIMESPAN=`date +%s`
TIMEFMT=`date +%Y-%m-%d\ %H:%M:%S`
DEPLOYNAME=GeekChenYi.docs.${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz
SERVER=39.106.144.159
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
tar -zcvf ${DEPLOYFILES} ./*

# deploy to aliyun
ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} << prod_deploy
cd ${distDir}
rm -rdf ./*
mkdir tarfiles
exit;
prod_deploy
# 本地文件上传到服务器
scp -P 22 -o StrictHostKeyChecking=no ${DEPLOYFILES} root@${SERVER}:${distDir}/tarfiles
# 压缩包解压
ssh -p 22 -o StrictHostKeyChecking=no root@${SERVER} tar -xzf ${distDir}/tarfiles/${DEPLOYFILES} -C ${distDir}
# $?上一条命令的退出码
if [ $? -ne 0 ]; then
    echo "fail"
else
    echo "【提示】执行成功  ${TIMEFMT} "
    echo "【提示】${DEPLOYFILES} 已成功部署服务器 "
fi
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
exit
echo done

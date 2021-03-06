#!/bin/sh
set -e
# 参数1 发布模式：a 全量 1 只提交vuepress-blog 2 只发布博客   
# 参数2 vuepress-blog 提交日志msg / 提交日志msg
# 参数3 blog 发布日志msg
# 终止一个错误
DEPLOY_MODEL=$1
COMMIT_MSG1='deploy'
COMMIT_MSG2='deploy'

if [ $DEPLOY_MODEL = '-a' ] ; then
    if [ ! $2 ] || [ ! $3 ]; then  # $2｜$3 IS NULL
        echo "commit information is required ！ex：deploy.sh -a [commigInfo1] [commigInfo2]"
        exit
    fi
    echo "发布模式：全量发布"
    echo "1.blog代码提交日志信息为：$2 ，提交代码中......"
    # 提交代码到博客vuepress-blog仓库
    git add -A
    git commit -m $2
    git push
   
    echo "2.发布blog提交日志信息为：$3 ，构建生成静态文件，发布中......"  
    # 构建
    sudo yarn run docs:build
    # 进入生成的构建文件夹，发布博客
    cd docs/.vuepress/dist

    git init
    git add -A
    git commit -m $3

    # 如果发布到  https://<USERNAME>.github.io
    git push -f git@github.com:wwllong/wwllong.github.io.git master
    git push -f https://gitee.com/wenwlon/wwllong.github.io.git master

elif [ $DEPLOY_MODEL = '-1' ] ; then  
    if [ ! $2 ]; then  # $2 IS NULL
        echo "commit information is required ！ex：deploy.sh -1 [commigInfo]"
        exit
    fi
    echo "发布模式：只提交vuepress-blog"
    echo "blog代码提交日志信息为：$2 ，提交代码中......"
    git add -A
    git commit -m $2
    git push

elif [ $DEPLOY_MODEL = '-2' ] ; then
    if [ ! $2 ]; then  # $2 IS NULL
        echo "commit information is required ！ex：deploy.sh -2 [commigInfo]"
        exit
    fi
    echo "发布模式：只发布博客"
    echo "发布blog提交日志信息为：$2 ,构建生成静态文件，发布中......"
     # 构建
    sudo yarn run docs:build
    # 进入生成的构建文件夹，发布博客
    cd docs/.vuepress/dist

    git init
    git add -A
    git commit -m $2

    # 如果发布到  https://<USERNAME>.github.io
    git push -f git@github.com:wwllong/wwllong.github.io.git master
    git push -f https://gitee.com/wenwlon/wwllong.github.io.git master

else
    echo "What deploy model? deploy.sh -[a][1][2]"
    echo "发布模式：a 全量发布 1 只提交vuepress-blog 2 只发布博客 "
fi
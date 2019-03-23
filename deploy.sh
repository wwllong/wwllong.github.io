# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到  https://<USERNAME>.github.io
git push -f git@github.com:wwllong/wwllong.github.io.git master

cd -